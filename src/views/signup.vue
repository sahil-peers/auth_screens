<template>
  <v-container fluid fill-height grid-list-md text-xs-center>
    <v-layout wrap align-center justify-center fill-height>
      <v-flex xs12 md3>
        <h1>Signup</h1>
        <v-form @submit.prevent="submit">
          <template>
            <v-text-field v-model="user.name"
                          name="name"
                          label="Name"
                          v-validate="'required'"
                          :error-messages="errors.collect('name')"
                          data-vv-name="name"
                          data-vv-as="First Name"
                          required
                          ></v-text-field>

            <!-- <v-text-field v-model="user.last_name"
                          name="last_name"
                          label="Last Name"
                          v-validate="'required'"
                          :error-messages="errors.collect('last_name')"
                          data-vv-name="last_name"
                          data-vv-as="Last Name"
                          required
                          ></v-text-field> -->

            <v-text-field v-model="user.email"
                          name="email"
                          label="Email"
                          v-validate="'required'"
                          :error-messages="errors.collect('email')"
                          data-vv-name="email"
                          data-vv-as="Email"
                          required
                          ></v-text-field>

            <v-text-field v-model="user.password"
                          name="password"
                          label="Password"
                          v-validate="'required|min:6'"
                          :error-messages="errors.collect('password')"
                          data-vv-name="password"
                          data-vv-as="Password"
                          required
                          type="password"
                          :rules="passwordRules"
                          ></v-text-field>

            <v-text-field
              v-model="user.password_confirmation"
              name="confirmPassword"
              label="Confirm Password"
              v-validate="'required|min:6'"
              :error-messages="errors.collect('confirmPassword')"
              data-vv-name="confirmPassword"
              data-vv-as="Confirm Password"
              type="password"
              required
              :rules="confirmPasswordRules"
            />

            <v-text-field v-model="user.phone"
                          name="phone"
                          label="Phone Number"
                          v-validate="'required|max:10'"
                          :error-messages="errors.collect('phone')"
                          data-vv-name="phone"
                          data-vv-as="Phone Number"
                          required
                          ></v-text-field>

            <v-btn block color="primary" type="button" @click="submit()">Submit</v-btn>
          </template>

          <a @click="goTo('login')">Login</a><br>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SignupView',

  props: {},

  data () {
    return {
      loading: false,
      user: {},
      confirmPasswordRules: [
        (value) => !!value || 'type confirm password',
        (value) =>
          value === this.user.password || 'The password confirmation does not match.',
      ],
      passwordRules: [
        (value) =>
          value === this.user.password_confirmation || 'The password confirmation does not match.',
      ]
    }
  },

  components: {
  },

  computed: {
  },

  methods: {
    async submit () {
      const isValid = await this.$validator.validateAll()

      if (!isValid || (this.user.password != this.user.password_confirmation)) { return }

      this.loading = true
      try {
        console.log('User', this.user)
        const result = await axios.post(`${process.env.VUE_APP_API_URL}/sign_up`, { user: this.user }, { headers: {} })
        this.$store.state.currentUser = result.data

        this.goTo('dashboard')

      } catch (err) {
        alert('Sign Up failed.')
      }
      this.loading = false
    }
  },

  watch: {
  },

  async mounted () {
  }
}
</script>
