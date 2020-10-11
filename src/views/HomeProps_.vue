<template>
  <div class="home">
    <section class="home-article">
      <article v-for='art of articles' :key='art.id'>
        <b-card bg-variant="dark" text-variant="white" class="article ml-5">
          <h3 @click="routerToArticle(art.id)">{{art.title}}</h3>
        <hr class="hr">
          <b-card-text>
            <div><i>{{art.date | moment("dddd, MMMM Do YYYY")}}</i></div>
            <span >{{art.content | subContent}}</span>
          </b-card-text>
        </b-card>
      </article>
    </section>
    <section class="home-side-bar">
      <sidebar :articles='articles'></sidebar>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import sidebar from '@/components/_sidebar'


export default {
  name: 'Home',
  data() {
    return {
      articles: null,
    }
  },
  filters: {
    subContent(content) {
      return content.substring(0, 150)
    }
  },
  mounted() {
    const vm = this
    const api = 'https://us-central1-expressapi-8c039.cloudfunctions.net/app/article'
    vm.$http.get(api).then((response) => {
      console.log(response.data.data)
      vm.articles = response.data.data
      console.log(vm.articles)
    })
  },
  methods: {
    routerToArticle(id) {
      const vm = this
      vm.$router.push({name:'Article', params:{id:id}})
    }
  },
  components: {
    sidebar,
  }
}
</script>


<style lang="scss" scoped>
.home {
  display: flex;
  .home-article {
    flex: 1;
  }
}
.article {
  margin-top: 2rem;
}
.hr {
  background-color: aliceblue;
}
</style>