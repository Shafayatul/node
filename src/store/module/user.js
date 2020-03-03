import Vue from 'vue'
import Axios from 'axios'

const state={
    userDetails:[],
    driverList:[]
}
const getters={
    getUserDetails(state){
        return state.userDetails
    },
    retDriverList(state){
        return state.driverList
    }
}
const actions={ 
    setUser({commit}){
        return new Promise((resolve, reject) => {
           
            Axios.get('/api/current-user-detail')
            .then(res=>{
                commit('setUser',res.data)
                resolve(res)
            })
            .catch(eror=>{
                reject(error)
            }) 
        });
    },
    updateUser({commit},form){
        return new Promise((resolve, reject) => {
            form.post('/api/update-user-detail',form)
            .then(res=>{
                commit('setUser',res.data)
                resolve(res)
            })
            .catch(eror=>{
                reject(error)
            }) 
        });
    },
    getDriverList({commit}){
        return new Promise((resolve, reject) => {
            Axios.get('/api/driver-list')
            .then(res=>{
                commit('setDriverList',res.data.partners)
                resolve(res)
            })
            .catch(eror=>{
                reject(error)
            }) 
        });
    },
    inApprove({commit},id){
        return new Promise((resolve, reject) => {
            Axios.get(`/api/user-deactive/${id}`)
            .then(res=>{
                commit('inApprove',id)
                resolve(res)
            })
            .catch(error=>{
                reject(error)
            })
        });

    },
    approve({commit},id){
        return new Promise((resolve, reject) => {
            Axios.get(`/api/user-active/${id}`)
            .then(res=>{
                commit('approve',id)
                resolve(res)
            })
            .catch(error=>{
                reject(error)
            })
        });

    }
}
const mutations={
    setUser(state,data){
        state.userDetails = data
    },
    setDriverList(state,data){
        state.driverList = data
    }
    ,
    inApprove(state,id){
       let  driver= state.driverList.find(data=>data.id===id)
       Vue.set(driver,'status',0)
    },
    approve(state,id){
       let driver= state.driverList.find(data=>data.id===id)
       Vue.set(driver,'status',1)
    }
}

export default {
    state,getters,actions,mutations
}