import Vue from 'vue'


const state={
    passengerList = []
}
const getters = {
    getPassengerList(state){
        return state.passengerList
    }
}
const actions={
    setPassengerList({commit},id,page = 1){
        return new Promise((resolve, reject) => {
            axios.get(`/api/trip-customers/${id}?page=`+ page)
            .then(res=>{
                commit('setPassengerList',res.data)
                resolve(res)
            })
            .catch(error=>{
                reject(error)
            })
        });
    }
}
const mutations={
    setPassengerList(state,data){
        state.passengerList = data
    }
}
export  default{
    state,getters,actions,mutations

}