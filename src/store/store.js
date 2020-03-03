import Vue from 'vue'
import Vuex from 'vuex'
import Car from './module/car'
import City from './module/city'
import Product from './module/products'
import Review from './module/review'
import Trip from './module/trip'
import User from './module/user'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        Car,City,Product,Review,Trip,User
    }
})