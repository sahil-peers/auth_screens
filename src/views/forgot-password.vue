<template>
  <v-container fluid fill-height grid-list-md text-xs-center>
    <v-layout wrap align-center justify-center fill-height>
      <v-flex xs12 md3>
        <h1>Forgot Password</h1>
        <v-form @submit.prevent="submit">
          <v-text-field v-model="email" :label="Email" required></v-text-field>
          <v-btn block color="primary" :loading="loading" type="submit">Send</v-btn>

          <a @click="goTo('login')">Login</a>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'ForgotPasswordView',

  data () {
    return {
      loading: false,
      email: ''
    }
  },

  methods: {
    async submit () {
      this.loading = false
    }
  }
}
</script>
