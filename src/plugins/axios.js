import Vue from 'vue'

// Lib imports
import axios from 'axios'

window.axios = axios
const passportToken  = `Bearer ${localStorage.getItem('token')}`;
axios.defaults.headers.common['Authorization'] = passportToken;


Vue.prototype.$http = axios
