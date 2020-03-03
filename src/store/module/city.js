import Axios from "axios"
import Vue from 'vue'
const state={
    cities:[],
    city:{}
}
const getters={
    myCities(state){
        return state.cities
    },
    city(state){
        return state.city
    }
}
const actions={
    storeCities({commit}){
        return new Promise((resolve, reject) => {
            Axios.get('/api/cities')
            .then(res=>{
                commit('setCities',res.data.cities)
                resolve(res)
            })    
            .catch(error=>{
                reject(error)
            })
        });
    },
    updateCity({commit},data){
        const config = {
            headers: { 'encytype': 'multipart/form-data' }
        }
        return new Promise((resolve, reject) => {
            Axios.post(`/api/cities/${data.id}`,data.form,config)
            .then(res=>{
                commit('updateCity',res.data.city)
                resolve(res)
            })    
            .catch(error=>{
                reject(error)
            })
        });
    },
    createCity({commit},form){
        return new Promise((resolve, reject) => {
            Axios.post('/api/cities',form)
            .then(res=>{
                commit('createCity',res.data.city)
                resolve(res)
            })    
            .catch(error=>{
                reject(error)
            })
        });
    },
    deleteCity({commit},city){
        return new Promise((resolve, reject) => {
            Axios.delete(`/api/cities/${city.id}`)
            .then(res=>{
                commit('deleteCity',city)
                resolve(res)
            })    
            .catch(error=>{
                reject(error)
            })
        });
    },
    getCity({commit},city){
        return new Promise((resolve, reject) => {
            Axios.delete(`/api/cities/${id}`)
            .then(res=>{
                commit('getCity',city)
                resolve(res)
            })    
            .catch(error=>{
                reject(error)
            })
        });
    }
}
const mutations={
    setCities(state,cities){
        state.cities = cities
    },
    createCity(state,city){
        state.cities.unshift(city)
    },
    updateCity(state,city){
        const index = state.cities.findIndex(singlecity=>singlecity.id === city.id)
        Vue.set(state.cities , index, city)
    },
    deleteCity(state,city){
        state.cities = state.cities.filter(data=>data.id != city.id)
    },
    getCity(state,city){
        state.city = city
    }
}

export default {
    state,getters,actions,mutations
}