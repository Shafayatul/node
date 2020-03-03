<template>
    <div class="search-section pt-5 pb-5">
     <div class="container">   
       
      <div class="row">
        <div class="col-md-3 col-sm-4">
            <div class="srearch-3">
              <form>
              <fieldset>
                <legend>SEARCH</legend>
              </fieldset>
              <div class="inner-form">
                <div class="input-field first-wrap">
                <div class="icon-wrap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                  </svg>
                </div>
                <input id="search" type="text" placeholder="What are you looking for?" />
                </div>
                <div class="input-field second-wrap">
                <div class="icon-wrap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path>
                  </svg>
                </div>
                <input class="datepicker" id="depart" type="text" placeholder="29 Aug 2018" />
                </div>
                <div class="input-field third-wrap">
                <div class="icon-wrap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path>
                  </svg>
                </div>
                <input class="datepicker" id="return" type="text" placeholder="30 Aug 2018" />
                </div>
                <div class="input-field fouth-wrap">
                <div class="icon-wrap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                  </svg>
                </div>
                <select data-trigger="" name="choices-single-defaul">
                  <option placeholder="">2 Adults</option>
                  <option>3 Adults</option>
                  <option>4 Adults</option>
                  <option>5 Adults</option>
                </select>
                </div>
                <div class="form-check mt-2 mb-2">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                  <label class="form-check-label sm-check" for="exampleCheck1">I'm traveling for work </label>
                </div>
                <div class="input-field fifth-wrap">

                <button class="btn btn-light" type="button">SEARCH</button>
                </div>
              </div>
              </form>
            </div>        
            <div class="wrapper center-block hidden-xs">
                <h2 class="filter-by" tabindex="-1"> Filter by: </h2>
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="heading1">
                            <h4 class="panel-title"> <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="false" aria-controls="collapse1">Your Budget  </a> </h4>
                        </div>
                        <div id="collapse1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1">
                            <div class="panel-body">
                                <div class="checkbox"> <label> <input type="checkbox" class="option-input checkbox" name="filter[]" value="12" /> <span class="ml-10">BDT 9,220 - BDT 13,800 per night </span> </label> </div>
                                <div class="checkbox"> <label> <input type="checkbox" class="option-input checkbox" name="filter[]" value="12" /> <span class="ml-10">CORE i7</span> </label> </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="heading2">
                            <h4 class="panel-title"> <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse2" aria-expanded="false" aria-controls="collapse2"> Brand </a> </h4>
                        </div>
                        <div id="collapse2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2">
                            <div class="panel-body">
                                <div class="checkbox "> <label> <input type="checkbox" class="option-input checkbox" name="filter[]" value="12" /> <span class="ml-10">APPLE</span> </label> </div>
                                <div class="checkbox"> <label> <input type="checkbox" class="option-input checkbox" name="filter[]" value="12" /> <span class="ml-10">DELL</span> </label> </div>
                                <div class="checkbox"> <label> <input type="checkbox" class="option-input checkbox" name="filter[]" value="12" /> <span class="ml-10">HP</span> </label> </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="heading3">
                            <h4 class="panel-title"> <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="false" aria-controls="collapse3"> Screen Size </a> </h4>
                        </div>
                        <div id="collapse3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
                            <div class="panel-body">
                                <div class="checkbox"> <label> <input type="checkbox" class="option-input checkbox" name="filter[]" value="12" /> <span class="ml-10">BELOW 12.9 INCH</span> </label> </div>
                                <div class="checkbox"> <label> <input type="checkbox" class="option-input checkbox" name="filter[]" value="12" /> <span class="ml-10">12 INCH - 12.9 INCH</span> </label> </div>
                                <div class="checkbox"> <label> <input type="checkbox" class="option-input checkbox" name="filter[]" value="12" /> <span class="ml-10">13 INCH - 13.9 INCH</span> </label> </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="heading4">
                            <h4 class="panel-title"> <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse4" aria-expanded="false" aria-controls="collapse4"> Operating System </a> </h4>
                        </div>
                        <div id="collapse4" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4">
                            <div class="panel-body">
                                <div class="checkbox"> <label> <input type="checkbox" class="option-input checkbox" name="filter[]" value="12" /> <span class="ml-10">Windows 7</span> </label> </div>
                                <div class="checkbox"> <label> <input type="checkbox" class="option-input checkbox" name="filter[]" value="12" /> <span class="ml-10">windows 8</span> </label> </div>
                                <div class="checkbox"> <label> <input type="checkbox" class="option-input checkbox" name="filter[]" value="12" /> <span class="ml-10">Windows 10</span> </label> </div>
                                <div class="checkbox"> <label> <input type="checkbox" class="option-input checkbox" name="filter[]" value="12" /> <span class="ml-10">MAC OS</span> </label> </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-right refine"> <button class="btn btn-out btn-primary btn-square" id="button-filter">Refine Search</button> </div>
            </div>    
        </div>
        <div class="col-md-9 col-sm-8">
       <nav>
        <h3 class="search-section-title">Frankfurt: 104 properties found – including 18 great value stays!</h3>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Our Top Picks</a>
          <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Show homes first</a>
          <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Price (lowest first) </a>
          <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false"> Review Score & Pric</a>
           <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Stars</a>
           <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Star rating and price</a>
        </div>
       </nav>
         <div class="tab-content  pt-3" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
             <div class="row">
                  <div class="col-lg-12 mx-auto">
                   <div class="list-group ">                       
                      <div class="list-group-item" v-for="item in tripList" :key="item.id" >
                        <!-- list-item -->
                        <div class="media media-a ">
                          <!-- <img :src="image(item.images[0].url)"  alt="Generic placeholder image" width="200" height="200" class="order-1 order-lg-1 search-pro"> -->
                            <div class="order-2 order-lg-2 ml-3">
                              <div class="d-flex">
                                <div class="order-1">
                                    <h5 class="mt-0 mb-1 search-pro-title">
                                      <small class="badge23 mr-2">{{item.city_from}}</small><small class="badge23 mr-2">To</small><small class="badge23 mr-2">{{item.city_to}}</small><a class="link" href="">{{item.title}}</a></h5>
                                    <div class="product-rating mb-2"><a href="" @click="singleTrip(item.id)" class="link"></a>
                                    
                                      <!--    <small>{{item.description}}</small>  -->
                                      </div> 
                                 </div>                                  
                                 <div class="product-rating mb-2 order-3 text-right">
                                 <div class="d-flex"> 
                                     <span class="mr-2">{{ item.status | status }}<br>
                                    </span>                                      
                                  </div>  
                                </div>
                               
                            </div>
                              <div class="roomrow roomrow_flex entire_row_clickable" >
                                <div class="roomName roomName_flex unit-info  --wider">
                                  <div class="roomNameInner">
                                     <span style="color: #000;" >
                                       <strong>{{item.date}} - </strong>   
                                     </span>
                                     <span class="room_info">  
                                     <div class="">
                                       <span >{{item.available_of_person}} <i class="fas fa-user-alt"></i> Seats Available</span>,&nbsp;
                                      </div>
                                     </span> 
                                  </div>
                               </div>
                                 
                               </div>
                                <button @click="tripDetails(item.id)" type="button" class="btn btn-outline-primary text-right see-btn">See Details<i class="ti-angle-right"></i></button>
                             </div>
                           </div>
                      </div>
                      <div class="list-group-item">
                        <div class="media media-a ">
                          <img src="assets/img/prosearch.jpg"  alt="Generic placeholder image" width="200" height="200" class="order-1 order-lg-1 search-pro">
                            <div class="order-2 order-lg-2 ml-3">
                              <div class="d-flex">
                                <div class="order-1">
                                    <!-- <h5 class="mt-0 mb-1 search-pro-title">
                                      <small class="badge23 mr-2">Condo Hotel</small><a class="link" href="">Residence Inn by Marriott Frankfurt City Center</a>
                                    </h5> -->
                                    <div class="product-rating mb-2"><a href="" class="link">Frankfurt City Center (Old Town), Frankfurt Show on map</a>  <small>250 m from center 200 m from subway station</small> </div> 
                                 </div>                                  
                                 <div class="product-rating mb-2 order-3 text-right">
                                 <div class="d-flex"> 
                                    <span class="badget order-2"> 4.9</span>
                                     <span class="mr-2">Excellent<br>
                                      <span class="rating-review mb-1">1,125 reviews</span>
                                    </span>                                      
                                  </div>  
                                </div>
                               
                            </div>
                              <div class="roomrow roomrow_flex entire_row_clickable" >
                                <div class="roomName roomName_flex unit-info  --wider">
                                  <div class="roomNameInner">
                                     <span style="color: #000;" >
                                       <strong>Comfort Studio with Sofa - <i class="fas fa-user-alt"></i></strong>   
                                     </span>
                                     <span class="room_info">  
                                     <div class="">
                                       2 beds
                                       (<span >1 king</span>,&nbsp;<span >1 sofa bed</span>)
                                      </div>
                                     </span>                                 
                                     <a class="" style="font-weight: bold;">
                                        <span > Only 5 like this left on our site </span>
                                      </a>
                                  </div>
                               </div>
                                 <div class="roomPrice_flex text-right " colspan="2">
                                      <div class="font-price">
                                         <div> 20 nights, 2 adults </div>
                                         <div class=""> BDT&nbsp;265,444 </div>
                                       </div>                                          
                                      <div > +BDT&nbsp;7,384 taxes and charges  </div>
                                      <a href="" class="link"> Breakfast included </a>

                                  </div>
                                 
                               </div>
                                <button type="button" class="btn btn-outline-primary text-right see-btn">See availability<i class="ti-angle-right"></i></button>
                             </div>
                           </div>
                      </div>                       
                    </div>
                  </div>
              </div>           
          </div>
          <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
          <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
          <nav aria-label="Page navigation example " class="mt-3 ">
            <ul class="pagination justify-content-end">
              <li class="page-item"><a class="page-link" href="#">Previous</a></li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">Next</a></li>

            </ul>
          
          </nav>
        </div>              
        </div>
    </div>

  </div>
  </div>
</template>
<script>
import layout from '../layers/Layout'
export default {
    data(){
      return{
        tripList:[],
        error:null
      }
    },
    filters:{
      status(value){
        if(value===1){
          return 'available'
        }
        if(value===2){
          return 'On going'
        }
        if(value===3){
          return 'Booked'
        }
      }
    },
    methods:{
      image(path){
        return this.$root.$data.serve+'/storage/'+path
      },
      search(form){
        console.log(form)
        axios.get('/api/search-trip',form)
        .then(res=>{
          this.tripList =res.data.data
        })
        .catch(error=>{
          this.flag= true
        })
      },
      tripDetails(id){
        console.log(id)
        // axios.get(`/api/trip-detail/${id}`)
        this.$router.push({name:'tripDetails',params:{
          id: id,
          personNumber: this.$route.params.number_of_person
        }})
      }
    },
    mounted() {
        this.$Progress.finish()
    },
    created(){
        this.$emit(`update:layout`,layout)
        this.$Progress.start()
        this.search(this.$route.params)
    }
    ,
}
</script>
<style scoped>

</style>