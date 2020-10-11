<template>
  <div>
    AdminHome
    <h2>{{account}}</h2>
    <pre>{{articles}}</pre>
    <b-button @click="routerToArticles">routerToArticles</b-button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['routerToArticles'])
  },
  computed: {
    ...mapState(['account', 'articles'])
  }
}
</script>