import NotFound from '@/views/not-found'
import Login from '@/views/login'
import Signup from '@/views/signup'
import ForgotPassword from '@/views/forgot-password'
import ResetPassword from '@/views/reset-password'
import Dashboard from '@/views/dashboard'

let children = [
]

export default [
  { path: '/login', name: 'login', component: Login },
  { path: '/signup', name: 'signup', component: Signup, meta: {} },
  { path: '/forgot-password', name: 'forgotPassword', component: ForgotPassword },
  { path: '/reset-password', name: 'resetPassword', component: ResetPassword },
  { path: '/dashboard', name: 'dashboard', component: Dashboard },
  { path: '/', redirect: '/dashboard'},
  { path: '*', component: NotFound }
]
