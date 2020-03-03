<template>
  <header class="main_menu">
        <div class="sub_menu">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="sub_menu_right_content">
                            <span> <img src="@/assets/img/logo.png" alt="logo"></span>

                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12 col-md-6">
                        <div class="sub_menu_social_icon">
                            <a class="lang" href="#">BDT</a>
                            <a data-toggle="tooltip" data-placement="bottom" title="Select your language" class="lang" href="#"><img src="@/assets/img/lenbd.png" alt=""></a>
                            <a class="list-pro" ><span>List your property</span></a>
                            <a data-toggle="tooltip" v-show="flag===false" v-for="(item,index) in items" :key="index" :href="item.to"  data-placement="bottom" title="Become a member for exclusive Secret Deals"  class="btn reg-btn"  >{{item.title}}</a>
                            
                            <a data-toggle="tooltip" href="" v-show="flag"  @click="logout" data-placement="bottom" title="Become a member for exclusive Secret Deals"  class="btn reg-btn"  >Log-out</a>
                            <!-- <a data-toggle="tooltip" href="/login" data-placement="bottom" title="Get a more personalized search" class="btn reg-btn" href="#" >Login</a> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main_menu_iner">
            <div class="container">
                <div class="row align-items-center ">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
                            <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse main-menu-item "
                                id="navbarSupportedContent">
                                <ul class="navbar-nav nav-tabs" id="myTab" role="tablist">
                                    <li   @click="rideshare()" class="nav-item" :class="activeRide">
                                        <a class="nav-link"><i class="fas fa-car mr-2"></i>Ride-Share</a>
                                    </li>
                                    <li   @click="shipment()" class="nav-item " :class="activeShip">
                                        <a class="nav-link"><i class="fas fa-briefcase mr-2"></i>Shipment</a>
                                    </li>
                                    <!--  -->
                                    <!--  -->
                                </ul>
                            </div>

                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
  data(){
    return{
      flag:false,
      items:[
          {title:'Login',to:'/login'},
          {title:'Register',to:'/register'}
      ],
      items1:[
          {title:'Ride Share',to:'/ride-share',icon: '',click:'rideshare()'},
          {title:'Shipment',to:'/shipment',icon: '',click:'shipment()'}
      ],
      activeRide: 'active',
      activeShip: ''
    }
  },
  methods: {
    logout(){
      User.logout()
      this.flag=false
      window.location = '/'
    },
    rideshare(){
      this.activeShip = ''
      this.activeRide = 'active'
      EventBus.$emit('rideshare')
    } ,
    shipment(){
      this.activeShip = 'active'
      this.activeRide = ''
      EventBus.$emit('shipment')
    }  
  },
  created(){
    if(User.loggedIn()){
      this.flag = true
    }

  }
}
</script>
<style scoped>

.main_menu{
	background: #4C0E58;
    padding-top: 10px;

}
.main_menu_iner .navbar-brand,.m-btn{
 display:none;
}
.sub_menu {
  background: transparent !important;
}
.sub_menu {
  min-height: 50px !important;
height: auto !important;
position: relative;
margin: 0 auto;

}

/* line 5,  html/sass/_sub_menu.scss */
.sub_menu .sub_menu_right_content a {
  color: #fff;
  margin: 15px;
}

@media (max-width: 575px) {
  /* line 5,  html/sass/_sub_menu.scss */
  .sub_menu .sub_menu_right_content a {
    margin: 3px;
  }
}

/* line 12,  html/sass/_sub_menu.scss */
.sub_menu .sub_menu_right_content i {
  color: #fe5c24;
  margin-right: 13px;
}

/* line 16,  html/sass/_sub_menu.scss */
.sub_menu .sub_menu_right_content span {
  color: #fe5c24;
  margin-right: 20px;
}

@media (max-width: 575px) {
  /* line 4,  html/sass/_sub_menu.scss */
  .sub_menu .sub_menu_right_content {
    text-align: center;
  }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
  /* line 4,  html/sass/_sub_menu.scss */
  .sub_menu .sub_menu_right_content {
    text-align: center;
  }
}

/* line 27,  html/sass/_sub_menu.scss */
.sub_menu .sub_menu_social_icon {
  float: right;
  text-align: right;
}

@media (max-width: 575px) {
  /* line 27,  html/sass/_sub_menu.scss */
  .sub_menu .sub_menu_social_icon {
    text-align: center;
    float: none;
    margin-top: 15px;
  }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
  /* line 27,  html/sass/_sub_menu.scss */
  .sub_menu .sub_menu_social_icon {
    text-align: center;
    float: none;
    margin-top: 15px;
  }
}

/* line 40,  html/sass/_sub_menu.scss */
.sub_menu .sub_menu_social_icon span {

 color: #fff;
}

/* line 43,  html/sass/_sub_menu.scss */
.sub_menu .sub_menu_social_icon span i {
  color: #fe5c24;
  margin-right: 8px;
}

/* line 49,  html/sass/_sub_menu.scss */
.sub_menu .sub_menu_social_icon a {
  color: #fff;
  margin-right: 15px;
}

@media (max-width: 575px) {
  /* line 49,  html/sass/_sub_menu.scss */
  .sub_menu .sub_menu_social_icon a {
    margin-right: 10px;
  }
}

/* line 55,  html/sass/_sub_menu.scss */
.sub_menu .sub_menu_social_icon a:hover {
  color: #fe5c24;
}

/**************menu part start*****************/
/* line 4,  html/sass/_menu.scss */
.main_menu .navbar-brand {
  padding-top: 0rem;
}

@media (max-width: 575px) {
  /* line 7,  html/sass/_menu.scss */
  .main_menu .navbar-brand img {
    max-width: 150px;
  }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
  /* line 7,  html/sass/_menu.scss */
  .main_menu .navbar-brand img {
    max-width: 200px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  /* line 7,  html/sass/_menu.scss */
  .main_menu .navbar-brand img {
    max-width: 200px;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1200px) {
  /* line 7,  html/sass/_menu.scss */
  .main_menu .navbar-brand img {
    max-width: 200px;
  }
}

/* line 26,  html/sass/_menu.scss */
.main_menu .navbar {
  padding: 0px;
}
.list-pro{
    border: 1px solid #fff;
    background-color: transparent;
    color: #fff;
    font-size: 12px;
    line-height: 18px;
   font-weight: bold;
    padding: 7px 10px;
    display: inline;
    border-radius: 3px;
}
.reg-btn{
  color: #383838 !important;
  background-color: #fff;
  padding: 7px 10px;
 font-size: 12px;
}
/* line 33,  html/sass/_menu.scss */
.main_menu .main-menu-item ul li .nav-link {
    color:#fff;
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
    text-transform: capitalize;
    margin: 0 16px;
    line-height: 19px;
    font-weight: 400;
   margin-bottom: 2px;
    font-weight: normal;
}
.main_menu .main-menu-item ul li .nav-link:first-child{
  margin-left: 0px;
}
.lang{
  font-size: 12px;
    padding: 17px;
    color: #f1f1f1;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    white-space: nowrap;
    padding: 10px 12px 10px 0px;
}
.lang img{
  width: 18px;
}
.main_menu .main-menu-item ul li .nav-link i{
    fill: #fff;
    height: 24px;
    width: 24px;
    margin-right: 12px !important;
    font-size: 20px;
}

/* line 39,  html/sass/_menu.scss */
.nav-tabs .nav-link{
  border: none;
}
.main_menu .main-menu-item ul li .nav-link:hover {
  background: none;
 border: none;
  color: #fff;
}
.main_menu .main-menu-item ul li .nav-link.active {
 border-bottom: 2px solid #fff !important;
 color: #fff;
 background: none;
 border: none;
}

@media only screen and (min-width: 992px) and (max-width: 1200px) {
  /* line 33,  html/sass/_menu.scss */
  .main_menu .main-menu-item ul li .nav-link {
    padding: 35px 16px;
  }
}
.nav-tabs {
    border-bottom: none !important;
}
.nav-tabs  .active {
    border-bottom: 3px solid #fff !important;
}
.nav-tabs li {
    cursor:pointer;
}
</style>
