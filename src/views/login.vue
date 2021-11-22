<template>
  <v-container fluid fill-height grid-list-md text-xs-center>
    <v-layout wrap align-center justify-center fill-height>
      <!-- <v-flex xs12 md3>
        <v-layout justify-center class="pa-3">
          <v-img :src="this.logoUrl" width="200"></v-img>
        </v-layout>
      </v-flex> -->

      <v-flex xs12 md3>
        <h1>Login</h1>
        <v-form @submit.prevent="submit">
          <v-text-field v-model="email" label="Email" required></v-text-field>
          <v-text-field v-model="password" type="password" label="Password" required></v-text-field>
          <v-btn block color="primary" :loading="loading" type="submit">Login</v-btn>

          <a @click="goTo('forgotPassword')">Forgot Password</a>
          <br>
          <a @click="goTo('signup')">Signup</a>
          <br />
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LoginView',

  data () {
    return {
      loading: false,
      email: '',
      password: '',
    }
  },

  methods: {
    async submit () {
      const isValid = await this.$validator.validateAll()

      this.loading = true
      try {
        const result = await axios.get(`${process.env.VUE_APP_API_URL}/users/login?email=${ this.email }&password=${ this.password }`, { headers: {} })
        this.$store.state.currentUser = result.data

        this.goTo('dashboard')
      } catch (err) {
        alert('Login failed. Please try again.')
      }
      this.loading = false
    }
  },

  async mounted () {
  }
}
</script>
