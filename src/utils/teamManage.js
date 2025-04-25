import { getHeaders } from "./auth";
import { userDataStore } from "@/store/userDataStore";

// 특정 티어의 팀 목록을 가져오는 비동기 함수
export async function getTeamList() {
  try {
    // 서버에 GET 요청을 보내 해당 티어의 팀 목록 조회
    const response = await fetch("/api/team/list", {
      method: "GET",
      headers: getHeaders(),
    });
    // console.log(response.headers);
    
    const contentType = response.headers.get("content-type");
    if (!response.ok || !contentType?.includes("application/json")) {
      const errorText = await response.text(); // HTML이나 오류 메시지 출력
      console.error("❌ Error fetching team list:", errorText);
      return [];
    }

    // 응답 데이터를 JSON으로 파싱
    const dataArray = await response.json();

    // 팀 목록 반환
    return dataArray;
  } catch (error) {
    // 오류 발생 시 콘솔에 로그 출력
    console.log(error);
  }
  // 오류 발생 시 빈 배열 반환
  return [];
}

// 새로운 팀을 생성하는 비동기 함수
export async function createTeam(form) {
  // 서버에 POST 요청을 보내 새 팀 생성
  const response = await fetch("/api/team", {
    method: "POST",
    headers: getHeaders(),
    // 폼 데이터를 JSON 문자열로 변환하여 요청 본문에 포함
    body: JSON.stringify({
      ...form,
    }),
  });

  // 요청 성공 여부에 따라 boolean 값 반환
  if (response.ok) return true;
  else return false;
}

// 특정 팀의 상세 정보를 가져오는 비동기 함수
export async function getTeam(team_id) {
  try {
    // 서버에 GET 요청을 보내 특정 팀 조회
    const response = await fetch(`/api/team/${team_id}`, {
      headers: getHeaders(),
    });
    // 응답 데이터를 JSON으로 파싱
    const data = await response.json();
    // 팀 상세 정보 반환
    return data;
  } catch (error) {
    // 오류 발생 시 콘솔에 로그 출력
    console.log(error);
  }
}

// 특정 팀의 멤버 목록을 가져오는 비동기 함수
export async function getTeamMembers(team_id) {
  console.log(team_id);
  try {
    // 서버에 GET 요청을 보내 특정 팀의 멤버 목록 조회
    const response = await fetch(`/api/team/${team_id}/member`, {
      headers: getHeaders(),
    });
    // 응답 데이터를 JSON으로 파싱
    const data = await response.json();
    // 팀 멤버 목록 반환
    return data;
  } catch (error) {
    // 오류 발생 시 콘솔에 로그 출력
    console.log(error);
  }
}

export async function joinTeam(team_id) {
  try {
    // 상태에서 유저 아이디 가져오기
    const user_id = userDataStore.getState().user_id;
    console.log('User ID from store:', user_id); 
    
    if (!user_id) {
      console.error("유저 아이디가 없습니다.");
      return false;  // 유저 아이디가 없으면 실패
    }

    // 서버에 POST 요청을 보내 팀 가입
    const response = await fetch("/api/team/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...getHeaders(),
      },
      body: JSON.stringify({
        team_id,   // 팀 아이디
        user_id,   // 유저 아이디
      }),
    });

    // 요청 성공 여부에 따라 boolean 값 반환
    if (response.ok) return true;
    else return false;
  } catch (error) {
    // 오류 발생 시 콘솔에 로그 출력
    console.log(error);
    return false;
  }
}