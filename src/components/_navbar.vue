<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">Codeing</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to='/'>
              Home
            </b-nav-item>
            <b-nav-item to='/about'>
              About
            </b-nav-item>
            <b-nav-item to='/login'>
              Login
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input v-model="searchKey" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button @click.prevent="submitSeachhKey" size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
  import { mapActions }  from 'vuex'
  export default {
    data() {
      return {
        searchKey: '',
      }
    },
    watch: {
      searchKey(){
        if(this.searchKey === '') {
          this.submitSeachhKey()
        }
      }
    },
    methods: {
      ...mapActions(['keyupSearchKey']),
      submitSeachhKey() {
        this.keyupSearchKey(this.searchKey)
      }
    }
  }
</script>