<template>
  <div>
    <h4>最新文章</h4>
    <hr>
    <ul>
      <li v-for='art of articles' :key="art.id" @click="routerToArticle(art.id)">
        {{art.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    articles: Array
  },
  methods: {
    routerToArticle(id) {
      this.$router.push({name: 'Article', params: {id:id}})
    }
  }
}
</script>