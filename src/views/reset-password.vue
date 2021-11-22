<template>
  <v-container fluid fill-height grid-list-md text-xs-center>
    <v-layout wrap align-center justify-center fill-height>
      <v-flex xs12 md3>
        <h1>Reset Password</h1>
        <v-form @submit.prevent="submit">
          <v-text-field v-model="user.password" type="password" label="New Password" required></v-text-field>
          <v-text-field v-model="user.password_confirmation" type="password" label="Confirm Password" required></v-text-field>
          <v-btn block color="primary" :loading="loading" type="submit">Reset Password</v-btn>

          <a @click="goTo('login')">Login</a>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'ResetPasswordView',

  data () {
    return {
      loading: false,
      user: {
      }
    }
  },

  methods: {
    async submit () {
    }
  }
}
</script>
