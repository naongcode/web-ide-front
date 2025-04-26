import { getHeadersWithoutBearer } from "./auth";

let socket = null;
// 연결 시작
export const connectChatSocket = (team_id, onMessage) => {
  if (socket && socket.readyState === WebSocket.OPEN) return;

  socket = new WebSocket('wss://43.202.161.69:8443/ws/chat');

  socket.onopen = () => {
    console.log('🟢 WebSocket 연결됨');
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (onMessage) onMessage(data);
  };

  socket.onerror = (err) => {
    console.error('❌ WebSocket 에러:', err);
  };

  socket.onclose = () => {
    console.warn('🟡 WebSocket 연결 종료');
  };
};
//메세지 전송
export const sendMessageToServer = (message) => {
  if (!socket || socket.readyState !== WebSocket.OPEN) {
    console.warn('❗ WebSocket이 열려있지 않습니다.');
    return;
  }

  const payload = {
    type: 'message',
    ...message,
  };

  socket.send(JSON.stringify(payload));
};

//연결 해제
export const disconnectChatSocket = () => {
  if (socket) {
    socket.close();
    socket = null;
  }
};





//채팅 검색
export async function searchChatMessages(teamId, keyword) {
  try {
    const res = await fetch(
      `/api/chat/search?teamId=${teamId}&keyword=${encodeURIComponent(keyword)}`,
      {
        headers: headers,
      }
    );
    console.log('Request Headers:', getHeadersWithoutBearer());

    if (!res.ok) throw new Error('search false');

    const data = await res.json();
    return data; // [{nickname, content, timestamp, user_id, team_id}, ...]
  } catch (error) {
    console.error('chating search error: ', error);
    return [];
  }
}

//채팅 기록
export async function getChatHistory(teamId, headers) {
  try {
    console.log('Request Headers:', headers);

    const res = await fetch(`/api/chat/history?teamId=${teamId}`, {
      headers: headers,
    });

    console.log('요청', res)

    if (!res.ok) throw new Error('chatHistory false');

    const data = await res.json();
    return data; //메세지 배열
  } catch (error) {
    console.error('chatHistory error: ', error);
    return [];
  }
}
