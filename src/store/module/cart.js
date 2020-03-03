import Axios from "axios"
import Vue from 'vue'
const state={
    cart:[],
    ordered:[],
    orderList:[]
}
const getters={
    getCart(state){
        return state.cart
    }
}
const actions={
    addToCart({commit},product){
        return new Promise((resolve, reject) => {
            Axios.post('/api/add-to-cart',product)
            .then(res=>{
                commit('addToCart',res.data.cart)
                resolve(res)
            })    
            .catch(error=>{
                reject(error)
            })
        });
    },
    placeOrder({commit},state){
        return new Promise((resolve, reject) => {
            Axios.post('/api/place-order',state.cart)
            .then(res=>{
                commit('setOrder',res.data)
                resolve(res)
            })    
            .catch(error=>{
                reject(error)
            })
        });
    } ,
    getOrderList({commit}){
        return new Promise((resolve, reject) => {
            Axios.get('/api/get-order-history')
            .then(res =>{
                commit('setOrderList',res.data)
                resolve(res)
            })
            .catch(error=>{
                reject(error)
            })
        });
    }
}
const mutations={
    
    addToCart(state,cart){
        state.cart = cart
    },
    removeItem(state,item){
        state.cart = state.cart.filter(obj=>obj.id != item.id)
    },
    setOrder(state,list){
        state.ordered= list
    },
    changeQuantity(state,item,number){
        const update = state.cart.find(obj=>obj.id === item.id)
        Vue.set(update ,'quantity',number)
    },
    setOrderList(state,orderList){
        state.orderList = orderList
    }
}