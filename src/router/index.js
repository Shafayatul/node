import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import car from '../components/dashboard/crud/Car'
import Cities from '../components/dashboard/crud/City'
import Drivers from '../components/dashboard/admin/DriverList'
import UserData from '../components/dashboard/UserData'
import ChangePassword from '../components/dashboard/Credential'
import Products from '../components/dashboard/crud/Product'
import Trip from '../components/dashboard/crud/Trip'
import MyTrips from '../components/dashboard/customer/MyTrips'
import Profile from '../components/dashboard/profile'
import Scanner from '../components/dashboard/partner/CodeScanner'
import Index from '../views/frontend/index'
import Cart from '../views/frontend/Cart'
import Rideshare from '../views/frontend/RideShare'
import Shipment from '../views/frontend/Shipment'
import TripList from '../views/frontend/TripList'
import TripDetails from '../views/frontend/trips/TripDetails'
import bookTrip from '../views/frontend/trips/TripBooking'
import NewPassword from '../components/auth/ResetPassword'
Vue.use(VueRouter)

const routes = [
  {path:'/' , component: Index, name:'home'},
  {path:'/login' , component: Login, name:'login'},
  {path:'/register' , component: Register, name:'register'},
  {path:'/driver-register' , component: Register, name:'register-driver'},
  {path:'/trip-list' , component: TripList, name:'tripList'},
  {path:'/trip-details/:id' , component: TripDetails, name:'tripDetails'},
  {path:'/cart' , component: Cart, name:'Cart'},

  {path:'/reset-password/:token',component: NewPassword},
  {path:'/book-trip/:id',component:bookTrip,name:'bookTrip'},
  {path:'/profile',component:Profile, children:[

      {path:'my-cars' , component: car, name:'cars'},
      {path:'trips-list' , component: Trip, name:'trips'},
      {path:'drivers' , component: Drivers, name:'drivers'},
      {path:'cities-list' , component: Cities, name:'cities'},
      {path:'products-list' , component: Products, name:'products'},
      {path:'scanner' , component: Scanner, name:'scanner'},
      {path:'my-trips' , component: MyTrips, name:'mytrips'},
      {path:'user' , component: UserData, name:'user'},
      {path:'credentials' , component: ChangePassword},
      // {path:'user',component: userInfo , name: 'userInfo', meta: { auth: true, title: 'User' }},
      // {path:'cars',component: car, meta: { auth: true, title: 'Profile' }},
      // {path:'my-trips',component: Employee, meta: { auth: true, title: 'Profile' }}
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  hashbang:false,
  base: process.env.BASE_URL,
  routes
})

export default router
