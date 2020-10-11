<template>
  <div>
    <h1>404</h1>
    <button @click='backHome404'>返回
      <!-- <router-link to="/">返回</router-link> -->
    </button>
  </div>
</template>


<script>
export default {
  methods: {
    backHome404() {
      return this.$router.push('/')
    }
  }
}
</script>