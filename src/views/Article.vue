<template>
  <div class="container">
    <!-- 怕api axios 還沒render完資料會出錯誤 所以讓他陣列內有東西在開始渲染 -->
    <article v-if="articles != '' ">
      <h2>{{filterById.title}}</h2>
      <i>{{filterById.date}}</i>
      <span v-html="filterById.content"></span>
    </article>
  </div>
</template>

<script>
export default {
  data () {
    return {
      artId: '',
      articles: [],
    }
  },
  mounted() {
    const vm = this
    const id = vm.$route.params.id
    vm.artId = id
    const api = 'https://us-central1-expressapi-8c039.cloudfunctions.net/app/article'
    vm.$http.get(api).then((response) => {
      vm.articles = response.data.data
    })
    console.log(vm.artId) 
  },
  computed: {
    filterById() {
      //上方的article [] filter  mounted內的 artId是否同一筆 
      return this.articles.filter(art => art.id === this.artId)[0]
    }
  }
}
</script>