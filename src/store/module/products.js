import Axios from "axios"
import Vue from 'vue'
const state={
    products:[],
    product:{}
}
const getters={
    myProducts(state){
        return state.products
    },
    product(state){
        return state.product
    }
}
const actions={
    storeProducts({commit}){
        return new Promise((resolve, reject) => {
            Axios.get('/api/products')
            .then(res=>{
                commit('setProducts',res.data.products)
                resolve(res)
            })    
            .catch(error=>{
                reject(error)
            })
        });
    },
    updateProduct({commit},data){
        return new Promise((resolve, reject) => {
            Axios.post(`/api/products/${data.id}`,data.form)
            .then(res=>{
                commit('updateProduct',res.data.product)
                resolve(res)
            })    
            .catch(error=>{
                reject(error)
            })
        });
    },
    createProduct({commit},form){
        return new Promise((resolve, reject) => {
            Axios.post('/api/products',form)
            .then(res=>{
                commit('createProduct',res.data.product)
                resolve(res)
            })    
            .catch(error=>{
                reject(error)
            })
        });
    },
    deleteProduct({commit},id){
        return new Promise((resolve, reject) => {
            Axios.delete(`/api/products/${id}`)
            .then(res=>{
                commit('deleteProduct',id)
                resolve(res)
            })    
            .catch(error=>{
                reject(error)
            })
        });
    },
    getProduct({commit},product){
        return new Promise((resolve, reject) => {
            Axios.delete(`/api/products/${product.id}`)
            .then(res=>{
                commit('getProduct',product)
                resolve(res)
            })    
            .catch(error=>{
                reject(error)
            })
        });
    },
    activateProduct({commit},id){
        return new Promise((resolve, reject) => {
            Axios.get(`/api/product-active/${id}`)
            .then(res=>{
                commit('activateProduct',id)
                resolve(res)
            })    
            .catch(error=>{
                reject(error)
            })
        });
    },
    deactivateProduct({commit},id){
        return new Promise((resolve, reject) => {
            Axios.get(`/api/product-deactive/${id}`)
            .then(res=>{
                commit('deactivateProduct',id)
                resolve(res)
            })    
            .catch(error=>{
                reject(error)
            })
        });
    }
}
const mutations={
    setProducts(state,products){
        state.products = products
    },
    createProduct(state,product){
        state.products.unshift(product)
    },
    updateProduct(state,product){
        const index = state.products.findIndex(singleproduct=>singleproduct.id === product.id)
        Vue.set(state.products , index, product)
    },
    deleteProduct(state,id){
        state.products = state.products.filter(data=>data.id != id)
    },
    getProduct(state,product){
        state.product = product
    },
    activateProduct(state,id){
        const activate = state.products.find(singleproduct=>singleproduct.id === id)
        Vue.set(activate , 'status' , 1)
    },
    deactivateProduct(state,id){
        const deactiveProduct = state.products.find(singleproduct=>singleproduct.id === id)
        Vue.set(deactiveProduct , 'status' , 0)
    }
}

export default {
    state,getters,actions,mutations
}