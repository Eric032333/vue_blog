<template>
  <div class="home">
    <section class="home-article">
      <article v-for='(art, index) of filterBySearchKey' :key='art.index'>
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
import { mapState, mapGetters } from 'vuex'
import sidebar from '@/components/_sidebar'
import navbar from '@/components/_navbar'


export default {
  name: 'Home',
  data() {
    return {
      // articles: null,
    }
  },
  filters: {
    subContent(content) {
      return content.substring(0, 150)
    }
  },
  // 因為在computed掛載了mapstate  mounted已掛載載app.vue上
  // mounted() {
  //   const vm = this
  //   const api = 'https://us-central1-expressapi-8c039.cloudfunctions.net/app/article'
  //   vm.$http.get(api).then((response) => {
  //     console.log(response.data.data)
  //     vm.articles = response.data.data
  //     console.log(vm.articles)
  //   })
  // },
  computed: {
    ...mapState(['articles']),
    ...mapGetters(['filterBySearchKey'])
  },
  methods: {
    routerToArticle(id) {
      const vm = this
      vm.$router.push({name:'Article', params:{id:id}})
    }
  },
  components: {
    sidebar,
    navbar
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