import Vue from 'vue'
import Vuex from 'vuex'
import jwt_decode from "jwt-decode";

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    dado: '',
    name: '', 
    picture: '',
    exp: '',
    id_user: ''
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    decodeJwt(context, param) {
      const token = localStorage.getItem("token");
      if (token) {
        let data = jwt_decode(token);
          context.state.dado = data[`${param}`];
        }
    }
  },
  modules: {
  }
})
