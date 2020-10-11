<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>



<script>

import navbar from '@/components/_navbar'
export default {
  data(){
    return {
      // articles: null,
    }
  },
  mounted() {
    //進入最上層會先render所以文章 所以掛載載#app
    const vm = this
    vm.$store.dispatch('routerToArticles')
  },
  components: {
    navbar,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
