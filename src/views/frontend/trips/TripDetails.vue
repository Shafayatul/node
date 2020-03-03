<template>
        <!-- banner part start-->
<div>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
                 <img src="@/assets/img/car.jpg">
              <section class="single-banar">
                    
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                   
                         <div class="banner_text_iner mt-4">
                            <button class="btn btn-info">JEDDAH</button>
                            <button class="btn btn-info">29/2/2019</button>
                            <button class="btn btn-info"><i class="fas fa-filter"></i></button>                          
                         </div>
                    </div>
                </div>
               </section>
            </div>
            <div class="carousel-item">
                  <img src="@/assets/img/car.jpg"> 
              <section class="single-banar">
                
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                      
                         <div class="banner_text_iner mt-4">
                            <button class="btn btn-info">JEDDAH</button>
                            <button class="btn btn-info">29/2/2019</button>
                            <button class="btn btn-info"><i class="fas fa-filter"></i></button>                          
                         </div>
                    </div>
                </div>
               </section>
            </div>
            <div class="carousel-item">
                 <img src="@/assets/img/car.jpg"> 
              <section class="single-banar">                  
                        <div class="container">
                            <div class="row align-items-center justify-content-center banner-text">
                              
                                 <div class="banner_text_iner ">
                                    <button class="btn btn-info">JEDDAH</button>
                                    <button class="btn btn-info">29/2/2019</button>
                                    <button class="btn btn-info"><i class="fas fa-filter"></i></button>                          
                                 </div>
                            </div>
                        </div>
               </section>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
   
    <!-- banner part start-->

    <!-- booking part start-->

    <!-- Header part end-->

    <section class="section_padding ">
        <div class="page-content page-container container" id="page-content">
            <div class="card-widgets">
                <!-- card Row -->                            
                    
                    <div class=" content-body">
                        <div class="content-header ">
                                <h3 class="font-medium">{{data.title}}</h3>
                        </div>
                        <div class="content-text mb-3">
                            <p>{{data.description}}</p>
                        </div>
                        <br>
                        <span class="m-b-15 d-block"><i class="fas fa-map-marker-alt"></i> {{data.city_from}} to {{data.city_to}}</span>
                        <br>
                        <span class="m-b-15 d-flex"><h6>Partner         :</h6> {{data.owner}}</span>
                        <span class="m-b-15 d-flex"><h6>Pickup Point    :</h6> {{data.pickup_location}}</span>
                        <span class="m-b-15 d-flex"><h6>Departure Time  :</h6> {{data.date}}</span>
                        <div class="content-footer mt-3">  
                            <div class="row">                         
                                <button type="button" class="btn  btn-sm" :class="getClass(data.is_food)"><i class="fas fa-utensils"></i></button>
                                <button type="button" class="btn  btn-sm" :class="getClass(data.is_wify)"><i class="fas fa-wifi"></i></button>
                                <button type="button" class="btn  btn-sm" :class="getClass(data.is_drinks)" ><i class="fas fa-trash"></i></button>
                                <button type="button" class="btn  btn-sm" :class="getClass(data.is_baby)"><i class="fas fa-chair"></i></button>
                                <button type="button" class="btn  btn-sm" :class="getClass(data.is_smoking)"><i class="fas fa-joint"></i></button>
                                <button class="btn btn-light float-right">
                                120<small>SR</small>
                                </button>
                            </div>
                            <div class="roe text-center">
                                <button @click="bookTrip()" class="btn btn-success">Book</button>
                            </div>
                        </div>
                        
                    </div>
            </div> <!-- Card -->              
        </div>
    </section>

 

    <!--top place start-->
   <section class="product-section client_review section_padding">
        <div class="container">
            <div class="row ">
                <div class="col-xl-6">
                    <div class="section_tittle">
                        <h2>What they said</h2>
                    </div>
                </div>
            </div>
            <!-- -->
            <div class="row">
                <div class="col-lg-12">
                    <carousel class="client_review_slider" :items="3"   :responsive="{ 0:{items:1,nav:false},5:{items:3,nav:true}}" >
                        <div v-for="item in reviews" :key="item.id" class="single_review_slider">
                            <div class="place_review">
                                <a href="#" v-for="star in parseFloat(item.rating)" :key="star" ><i class="fas fa-star"></i></a>
                            </div>
                            <p>{{item.review}}</p>
                            <h5> - {{item.from}}</h5>
                        </div>
                        <!-- <div class="single_review_slider">
                            <div class="place_review">
                                <a href="#"><i class="fas fa-star"></i></a>
                                <a href="#"><i class="fas fa-star"></i></a>
                                <a href="#"><i class="fas fa-star"></i></a>
                                <a href="#"><i class="fas fa-star"></i></a>
                                <a href="#"><i class="fas fa-star"></i></a>
                            </div>
                            <p>Waters make fish every without firmament saw had. Morning air subdue. Our Air very one whales grass is fish whales winged night yielding land creeping that seed </p>
                            <h5> - Allen Miller</h5>
                        </div>
                        <div class="single_review_slider">
                            <div class="place_review">
                                <a href="#"><i class="fas fa-star"></i></a>
                                <a href="#"><i class="fas fa-star"></i></a>
                                <a href="#"><i class="fas fa-star"></i></a>
                                <a href="#"><i class="fas fa-star"></i></a>
                                <a href="#"><i class="fas fa-star"></i></a>
                            </div>
                            <p>Waters make fish every without firmament saw had. Morning air subdue. Our Air very one whales grass is fish whales winged night yielding land creeping that seed </p>
                            <h5> - Allen Miller</h5>
                        </div>
                        <div class="single_review_slider">
                            <div class="place_review">
                                <a href="#"><i class="fas fa-star"></i></a>
                                <a href="#"><i class="fas fa-star"></i></a>
                                <a href="#"><i class="fas fa-star"></i></a>
                                <a href="#"><i class="fas fa-star"></i></a>
                                <a href="#"><i class="fas fa-star"></i></a>
                            </div>
                            <p>Waters make fish every without firmament saw had. Morning air subdue. Our Air very one whales grass is fish whales winged night yielding land creeping that seed </p>
                            <h5> - Allen Miller</h5>
                        </div> -->
                        <template slot="prev"><span class="prev home-prev"><svg class="bk-icon -iconset-navarrow_left bui-carousel__prev" focusable="false" height="128" width="128" viewBox="0 0 128 128" role="presentation" aria-hidden="true"><path d="M73.7 96a4 4 0 0 1-2.9-1.2L40 64l30.8-30.8a4 4 0 0 1 5.7 5.6L51.3 64l25.2 25.2a4 4 0 0 1-2.8 6.8z"></path></svg></span></template>
                        <template slot="next"><span class="next home-next"> <svg class="bk-icon -iconset-navarrow_right bui-carousel__next" focusable="false" height="128" width="128" viewBox="0 0 128 128" role="presentation" aria-hidden="true"><path d="M54.3 96a4 4 0 0 1-2.8-6.8L76.7 64 51.5 38.8a4 4 0 0 1 5.7-5.6L88 64 57.2 94.8a4 4 0 0 1-2.9 1.2z"></path></svg></span></template>
                    </carousel>
                
                    <div class="customNav">
                                              
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--top place end-->
</div>
</template>
<script>
import layout from '../../layers/Layout'
import carousel from 'vue-owl-carousel'
import {mapGetters,mapState} from 'vuex'

export default {
    data(){
        return{
            number: null,
            details:[],
            reviews:[]
        }
    },
    components:{
        carousel
    },
    methods:{
        getClass(value){
            if(value===1){
                return 'btn-success'
            }
            if(value===0){
                return 'btn-light'
            }            
        },
        bookTrip(){
            if(!User.loggedIn()){

                this.$router.push({
                    name:'login'
                })
            }
            if(User.admin() || User.partner()){
                this.$router.push({
                    name:'register'
                })
            }
            this.$router.push({
                name:'bookTrip',
                params:{
                    id: this.$route.params.id
                }
            })
        },
        tripDetails(){
            axios.get
        },
        partnerReviews(data){
            console.log(data.user_id)
            axios.get(`/api/reviews/user/${this.data.user_id}`)
            .then(res=>{
                this.reviews=res.data.data
            })
        }
    },
    created(){
        if(this.$route.params.success){
            Swal.fire(
                'Successfully Booked!',
                'Payment has been done!',
                'success'
            )
        }
        this.$store.dispatch('getTripDetails',this.$route.params.id)
        .then(res=>{
           
            this.partnerReviews(res.data.data)
        })
        this.$emit('update:layout',layout)        
    },
    computed:{
        ...mapGetters({data:'trip'})
    }
}
</script>
<style scoped>

</style>