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
  mutations: {
    ROUTERTOARTICLES(state, payload){
      state.articles = payload
    },
    KEYUPSEARCHKEY(state, payload){
      state.searchKey = payload
    }
  },
  getters: {
    filterBySearchKey: state => {
      // if (state.articles.length){
        if (state.searchKey === ''){
          return state.articles
        }else {
          console.log(state.searchKey)
          return state.articles.filter((art) => {
            return art.title.toLowerCase().includes(state.searchKey.toLowerCase());
          })
        } 
      // }
    }
  },
})
