import { create } from "zustand";

export const userDataStore = create((set, get) => ({
  user_id: null,
  nickname: null,
  tier: null,
  email: null,
  team_id: null,

  // 데이터 세팅 함수들
  setUser_id: (user_id) => set({ user_id }),
  setNickname: (nickname) => set({ nickname }),
  setTier: (tier) => set({ tier }),
  setEmail: (email) => set({ email }),
  setTeam_id: (team_id) => set({ team_id }),

  setUserProfile: ({ user_id, nickname, tier, email, team_id }) =>
    set({ user_id, nickname, tier, email, team_id }),

  resetUserProfile: () =>
    set({
      user_id: null,
      nickname: null,
      tier: null,
      email: null,
      team_id: null,
    }),

  // 세션에서 데이터를 로드하는 함수
  loadFromSessionStorage: () => {
    const savedData = sessionStorage.getItem("user-data");
    // console.log("🚀 Checking sessionStorage for user data..."); // 로그 추가

    if (savedData) {
      // console.log("✅ User data found in sessionStorage:", savedData); // 세션에 데이터가 있을 때
      const { user_id, nickname, tier, email, team_id } = JSON.parse(savedData);
      set({ user_id, nickname, tier, email, team_id });
    } else {
      console.log("❌ No user data found in sessionStorage."); // 세션에 데이터가 없을 때
    }
  },

  // 세션에 데이터를 저장하는 함수
  saveToSessionStorage: () => {
    const state = get(); // `get`을 제대로 사용
    console.log("🚀 Saving user data to sessionStorage:", state);

    sessionStorage.setItem(
      "user-data",
      JSON.stringify({
        user_id: state.user_id,
        nickname: state.nickname,
        tier: state.tier,
        email: state.email,
        team_id: state.team_id,
      })
    );
  },

  // JWT 토큰에서 user_id 추출
  setUserIdFromToken: (token) => {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const user_id = payload.id || payload.user_id || payload.sub;
      console.log("🚀 Extracted user_id from token:", user_id);

      set({ user_id });
    } 
    catch (e) {
      console.error("❌ user_id 추출 실패:", e);
    }
  },

}));

// 앱이 시작할 때 세션에서 데이터 로드
// console.log("🚀 Initializing user data store and loading from sessionStorage...");
userDataStore.getState().loadFromSessionStorage();

// 상태가 변할 때마다 세션에 데이터 저장
userDataStore.subscribe(() => {
  const state = userDataStore.getState();
  
  // 상태가 올바르게 변경되었는지 확인
  if (state.user_id !== undefined) {
    console.log("🚀 User data state changed, saving to sessionStorage...");
    state.saveToSessionStorage();
  } else {
    console.warn("⚠️ User ID is undefined, not saving to sessionStorage.");
  }
});
