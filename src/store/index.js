import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: 'Glove',
    articles: [],
    searchKey: '',
  },
  mutations: {
    ROUTERTOARTICLES(state, payload){
      state.articles = payload
    },
    KEYUPSEARCHKEY(state, payload){
      state.searchKey = payload
    }
  },
  actions: {
    routerToArticles(context) {
      const api = 'https://us-central1-expressapi-8c039.cloudfunctions.net/app/article'
      axios.get(api).then((response) => {
        context.commit('ROUTERTOARTICLES', response.data.data)
        // console.log(response.data.data)
      })
    },
    keyupSearchKey(context, payload){
      context.commit('KEYUPSEARCHKEY', payload)
    }
  },
  getters: {
    filterBySearchKey: state => {
      console.log(state)
      return state.articles.filter( art => art.title === state.searchKey)
      
    }
  },
  modules: {
  },
})
