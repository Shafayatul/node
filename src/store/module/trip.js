import Vue from 'vue'
import Axios from 'axios'
  

const state={
    tripDetails: [],
    tripList:[]
}
const getters={
    trip(state){
        return state.tripDetails
    },
    getTripList(state){
        return state.tripList
    }

}
const actions={
    bookTrip({commit},form){
        return new Promise((resolve, reject) => {
            form.post('/api/trip-bookings')
            .then(res=>{
                commit('addTrip',res.data.trip)
                resolve(res)
            })
            .catch(error=>{
                reject(error)
            })
        });
    },
    cancelTrip({commit},trip){
        return new Promise((resolve, reject) => {
            Axios.delete(`/api/trip-bookings/${trip.id}`)
            .then(res=>{
                commit('cancelTrip',trip.id)
                resolve(res)
            })
            .catch(error=>{
                reject(error)
            })
        });
    },
    addTrip({commit},form){
        return new Promise((resolve, reject) => {
            Axios.post('/api/trips',form)
            .then(res=>{
                commit('addTrip',res.data.trip)
                resolve(res)
            })
            .catch(error=>{
                reject(error)
            })
        });
    },
    getTripDetails({commit},id){
        return new Promise((resolve, reject) => {
            Axios.get(`/api/trip-detail/${id}`)
            .then(res=>{
                commit('getTripDetails',res.data.data)
                resolve(res)
            }) 
            .catch(error=>{
                reject(error)
            })
        });
    },
    setTripList({commit}){
        return new Promise((resolve, reject) => {
            Axios.get('/api/trips')
            .then(res=>{
                commit('setTripList',res.data.data)
                resolve(res)
            })
            .catch(error=>{
                reject(error)
            })
        });
    },
    deleteTrip({commit},id){
        console.log(id)
        return new Promise((resolve, reject) => {
            Axios.get(`/api/trips/${id}`)
            .then(res=>{
                commit('deleteTrip',id)
                resolve(res)
            })
            .catch(error=>{
                reject(error)
            })
        });
    },
}
const mutations={
    getTripDetails(state,trip){
        state.tripDetails=trip
    },
    setTripList(state,data){
        state.tripList = data.reverse()
    },
    addTrip(state,data){
        console.log(data)
        state.tripList.unshift(data)
    },
    cancelTrip(state,id){
        state.tripList = state.tripList.filter(obj=>obj.id != id)
    },
    deleteTrip(state,id){
        state.tripList = state.tripList.filter(data=>data.id != id)
    },
}


export default {
    state,getters,actions,mutations
}