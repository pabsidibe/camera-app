export const state = () => ({
    user: null,
    person: null
  });
  
  export const mutations = {
    setSession(state, data) {
      state.user = data;
    },
    getUser(state) {
      state.user = user;
    },
    setPerson(state, data) {
      state.person = data;
    }
  };