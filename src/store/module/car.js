import Axios from "axios"
import Vue from 'vue'
import form from 'vform'
const state={
    cars:[],
    car:{}
}
const getters={
    myCars(state){
        return state.cars.reverse()
    },
    car(state){
        return state.car
    }
}
const actions={
    storeCars({commit}){
        return new Promise((resolve, reject) => {
            Axios.get('/api/cars')
            .then(res=>{
                commit('setCars',res.data)
                resolve(res)
            })    
            .catch(error=>{
                reject(error)
            })
        });
    },
    updateCar({commit},data){
        const config = {
            headers: { 'encytype': 'multipart/form-data' }
        }
        return new Promise((resolve, reject) => {
            Axios.post(`/api/cars/${data.id}`,data.form,config)
            .then(res=>{
                commit('updateCar',res.data.car)
                resolve(res)
            })    
            .catch(error=>{
                reject(error)
            })
        });
    },
    createCar({commit},form){
        const config = {
            headers: { 'encytype': 'multipart/form-data' }
        }
        return new Promise((resolve, reject) => {
            Axios.post('/api/cars',form,config)
            .then(res=>{
                commit('createCar',res.data.car)
                resolve(res)
            })    
            .catch(error=>{
                reject(error)
            })
        });
    },
    deleteCar({commit},car){
        return new Promise((resolve, reject) => {
            Axios.delete(`/api/cars/${car.id}`)
            .then(res=>{
                commit('deleteCar',car)
                resolve(res)
            })    
            .catch(error=>{
                reject(error)
            })
        });
    },
    getCar({commit},car){
        return new Promise((resolve, reject) => {
            Axios.delete(`/api/cars/${id}`)
            .then(res=>{
                commit('getCar',car)
                resolve(res)
            })    
            .catch(error=>{
                reject(error)
            })
        });
    }
}
const mutations={
    setCars(state,cars){
        state.cars = cars
    },
    createCar(state,data){
        console.log(data)
        state.cars.unshift(data)
    },
    updateCar(state,car){
        const index = state.cars.findIndex(singleCar=>singleCar.id === car.id)
        Vue.set(state.cars , index, car)
    },
    deleteCar(state,car){
        state.cars = state.cars.filter(data=>data.id !== car.id)
    },
    getCar(state,car){
        state.car = car
    }
}

export default {
    state,getters,actions,mutations
}