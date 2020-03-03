const state={
    tripReviews:[]
}
const getters={
    getReviews(state){
        return state.tripReviews
    }
}
const actions={
    storeReviews({commit},id){
        return new Promise((resolve, reject) => {
            axios.get(`/api/reviews/${id}`)
            .then(res=>{
                commit('storeReview',res.data)
                resolve(res)
            })
            .catch(error=>{
                reject(error)
            })
        });
    }
}
const mutations={
    storeReview(state , reviews){
        state.tripReviews = reviews
    }
}

export default {
    state,getters,actions,mutations
}