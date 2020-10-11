<template>
  <b-card-group deck>
    <div class="deck container">
      <b-card-group deck class="mb">
        <b-card border-variant="dark" header="登入" class="text-center">
                  
          <div class="container col-6">
            <form class="form-signin" @submit.prevent="signin">
              <div class="form-group">
                <label for="exampleInputEmail1">輸入帳號</label>
                <input type="text" class="form-control" id="exampleInputaccount1" aria-describedby="accountHelp" v-model='form.account' required>
                <small id="accountHelp" class="form-text text-muted">We'll never share your account with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">輸入密碼</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model='form.password' required>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>

        </b-card>
      </b-card-group>
    </div>
  </b-card-group>
  
</template>

<script>
export default {
  data() {
    return {
      form: {
        account:'',
        password: '',
      }
    }
  },
  methods: {
    signin() {
      this.$router.push('/admin')
      // this.$router.push({name: "Admin-Home" })
    }
  }
}
</script>

<style lang="scss" scoped>
  .deck.container {
    margin-top: 6rem;
  }

</style>