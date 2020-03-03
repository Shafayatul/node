import Vue from 'vue'
import App from './App.vue'
import carousel from 'vue-owl-carousel'
import router from './router'
import store from './store/store'
import User from './helpers/User'

import { Form, HasError, AlertError } from 'vform'
import JQuery from 'jquery'
window.$ = window.jquery = JQuery
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import DatetimePicker from 'vuetify-datetime-picker'
import VueProgressBar from 'vue-progressbar'
import Swal from 'sweetalert2'
window.Swal = Swal 
require('./assets/css/style.css')
require('./assets/css/main.css')
require('./assets/css/responsive.css')
require('./assets/css/search.css')
require('./assets/css/animate.css')
require('./assets/css/flaticon.css')
require('./assets/css/slick.css')
require('./assets/css/nice-select.css')

require('./assets/css/themify-icons.css')

const options = {
  color: '#8080ff',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.5s',
    opacity: '0.6s',
    termination: 800
  },
  autoRevert: true,
  // location: 'left',
  inverse: false
}
Vue.component('vue-progress-bar', VueProgressBar)
Vue.use(VueProgressBar, options)

Vue.use(DatetimePicker)
// import  './assets/css/main.css'

window.EventBus = new Vue()
window.Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

window.User = User
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
// Plugins
import './plugins'
let serve = 'http://localhost:8000'
// Vue.http = serve
window.root = serve
import vuetify from './plugins/vuetify';
Vue.config.productionTip = false
let rooturl = "{{ Config::get('app.url') }}";
new Vue({
  components: { carousel },
  router,
  store,
  vuetify,
  serve,
  data: {
    root: serve,
    number: null
  },
  render: h => h(App)
}).$mount('#app')
