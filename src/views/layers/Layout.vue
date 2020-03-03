<template>
    <div>
        <navbar></navbar>
        <slot></slot>
        <footer class="footer-area">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-sm-6 col-md-5">
                        <div class="single-footer-widget">
                            <h4>Discover Destination</h4>
                            <ul>
                                <li><a href="#">Miami, USA</a></li>
                                <li><a href="#">California, USA</a></li>
                                <li><a href="#">London, UK</a></li>
                                <li><a href="#">Saintmartine, Bangladesh</a></li>
                                <li><a href="#">Mount Everast, India</a></li>
                                <li><a href="#">Sidney, Australia</a></li>
                                <li><a href="#">Miami, USA</a></li>
                                <li><a href="#">California, USA</a></li>
                                <li><a href="#">London, UK</a></li>
                                <li><a href="#">Saintmartine, Bangladesh</a></li>
                                <li><a href="#">Mount Everast, India</a></li>
                                <li><a href="#">Sidney, Australia</a></li>
                            </ul>

                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="single-footer-widget">
                            <h4>Subscribe Newsletter</h4>
                            <div class="form-wrap" id="mc_embed_signup">
                                <form target="_blank"
                                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                    method="get" class="form-inline">
                                    <input class="form-control" name="EMAIL" placeholder="Your Email Address"
                                        onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email Address '"
                                        required="" type="email">
                                    <button class="click-btn btn btn-default text-uppercase"> <i class="far fa-paper-plane"></i>
                                    </button>
                                    <div style="position: absolute; left: -5000px;">
                                        <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value=""
                                            type="text">
                                    </div>

                                    <div class="info"></div>
                                </form>
                            </div>
                            <p>Subscribe our newsletter to get update news and offers</p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="single-footer-widget footer_icon">
                            <h4>Contact Us</h4>
                            <p>4156, New garden, New York, USA
                                    +880 362 352 783</p>
                            <span>contact@rideshere.com</span>
                            <div class="social-icons">
                                <a href="#"><i class="ti-facebook"></i></a>
                                <a href="#"><i class="ti-twitter-alt"></i></a>
                                <a href="#"><i class="ti-pinterest"></i></a>
                                <a href="#"><i class="ti-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="copyright_part_text text-center">
                            <!-- <p class="footer-text m-0">Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.
                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved |  <i class="ti-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Ride Share</a>
                            Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.
                            </p> -->
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
import navbar from './toolbar/Navbar'
export default {
    components:{
        navbar
    }
}
</script>
<style scoped>
@media (max-width: 991px) {
  /* line 2,   */
  .footer-area {
    padding: 70 0px 0px;
  }
}

/* line 9,   */
.footer-area .col-lg-12 {
  padding-left: 0px;
  padding-right: 0px;
  overflow: hidden;
}

@media (max-width: 991px) {
  /* line 15,   */
  .footer-area .single-footer-widget {
    margin-bottom: 30px;
  }
}

/* line 20,   */
.footer-area .single-footer-widget p {
  color: #fff;
  line-height: 1.8;
}

/* line 25,   */
.footer-area .single-footer-widget h4 {
  margin-bottom: 50px;
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  text-transform: uppercase;
}

@media (max-width: 1024px) {
  /* line 25,   */
  .footer-area .single-footer-widget h4 {
    font-size: 18px;
  }
}

@media (max-width: 991px) {
  /* line 25,   */
  .footer-area .single-footer-widget h4 {
    margin-bottom: 25px;
  }
}

/* line 38,   */
.footer-area .single-footer-widget ul {
  columns: 2;
}

/* line 40,   */
.footer-area .single-footer-widget ul li {
  margin-bottom: 10px;
}

/* line 42,   */
.footer-area .single-footer-widget ul li a {
  color: #fff;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  font-size: 15px;
}

/* line 46,   */
.footer-area .single-footer-widget ul li a:hover {
  color: #fe5c24;
}

/* line 52,   */
.footer-area .single-footer-widget .form-wrap {
  margin-bottom: 25px;
}

/* line 55,   */
.footer-area .single-footer-widget input {
  height: 50px;
  border: none;
  width: 67% !important;
  font-weight: 400;
  padding-left: 20px;
  border-radius: 0;
  font-size: 13px;
  color: #999999;
  background-color: #092742;
  border: 0px solid transparent;
}

/* line 66,   */
.footer-area .single-footer-widget input:focus {
  outline: none;
  box-shadow: none;
}

/* line 71,   */
.footer-area .single-footer-widget .click-btn {
  background-color: #fe5c24;
  color: #fff;
  border-radius: 0;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  padding: 8px 20px;
  border: 0;
  font-size: 12px;
  font-weight: 400;
  position: relative;
  left: 0;
}

/* line 83,   */
.footer-area .single-footer-widget .click-btn:focus {
  outline: none;
  box-shadow: none;
}

/* line 91,   */
.footer-area .footer_1 img {
  margin-bottom: 35px;
}

@media (max-width: 575px) {
  /* line 91,   */
  .footer-area .footer_1 img {
    margin-bottom: 20px;
  }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
  /* line 91,   */
  .footer-area .footer_1 img {
    margin-bottom: 20px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  /* line 91,   */
  .footer-area .footer_1 img {
    margin-bottom: 20px;
  }
}

/* line 106,   */
.footer-area .footer_1 p {
  margin-bottom: 15px;
}

/* line 110,   */
.footer-area .social_icon {
  margin-top: 27px;
}

/* line 112,   */
.footer-area .social_icon a {
  color: #cccccc;
  font-size: 14px;
  margin-right: 20px;
}

/* line 116,   */
.footer-area .social_icon a:hover {
  color: #fe5c24;
}

/* line 125,   */
.footer-area .footer_3 .footer_img .single_footer_img {
  width: 31.33%;
  float: left;
  margin: 1%;
  position: relative;
  z-index: 2;
}

@media (max-width: 575px) {
  /* line 125,   */
  .footer-area .footer_3 .footer_img .single_footer_img {
    width: 20%;
  }
  /* line 133,   */
  .footer-area .footer_3 .footer_img .single_footer_img img {
    width: 100%;
  }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
  /* line 125,   */
  .footer-area .footer_3 .footer_img .single_footer_img {
    width: 20%;
  }
  /* line 139,   */
  .footer-area .footer_3 .footer_img .single_footer_img img {
    width: 100%;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  /* line 125,   */
  .footer-area .footer_3 .footer_img .single_footer_img {
    width: 31%;
  }
  /* line 145,   */
  .footer-area .footer_3 .footer_img .single_footer_img img {
    width: 100%;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1200px) {
  /* line 125,   */
  .footer-area .footer_3 .footer_img .single_footer_img {
    width: 31%;
  }
  /* line 151,   */
  .footer-area .footer_3 .footer_img .single_footer_img img {
    width: 100%;
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1440px) {
  /* line 125,   */
  .footer-area .footer_3 .footer_img .single_footer_img {
    width: 20%;
  }
  /* line 157,   */
  .footer-area .footer_3 .footer_img .single_footer_img img {
    width: 100%;
  }
}

/* line 161,   */
.footer-area .footer_3 .footer_img .single_footer_img:after {
  position: absolute;
  left: 0;
  top: 0;
  content: "";
  background-color: #000;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

/* line 172,   */
.footer-area .footer_3 .footer_img .single_footer_img i {
  text-align: center;
  position: absolute;
  top: 41%;
  margin: 0 auto;
  left: 0;
  right: 0;
  color: #fff;
  z-index: 2;
  opacity: 0;
}

/* line 184,   */
.footer-area .footer_3 .footer_img .single_footer_img:hover:after {
  opacity: 0.5;
}

/* line 187,   */
.footer-area .footer_3 .footer_img .single_footer_img:hover i {
  opacity: 1;
}

/* line 195,   */
.footer-area .contact_info {
  position: relative;
  margin-bottom: 20px;
}

/* line 198,   */
.footer-area .contact_info:last-child {
  margin-bottom: 0px;
}

/* line 201,   */
.footer-area .contact_info p {
  margin-bottom: 10px;
}

/* line 203,   */
.footer-area .contact_info p span {
  color: #2c3033;
  font-size: 16px;
}

/* line 209,   */
.footer-area .btn {
  background-color: #fe5c24;
  color: #fff;
  width: 49px;
  border-radius: 0px;
  height: 50px;
}

/* line 216,   */
.footer-area span.ti-heart {
  font-size: 12px;
  margin: 0px 2px;
}

/* line 220,   */
.footer-area .copyright_part_text {
  background-color: #08223a;
  padding: 32px 15px;
  margin-top: 95px;
}

/* line 224,   */
.footer-area .copyright_part_text p {
  color: #777777;
}

@media (max-width: 575px) {
  /* line 220,   */
  .footer-area .copyright_part_text {
    margin-top: 20px;
    text-align: center;
  }
  /* line 231,   */
  .footer-area .copyright_part_text p {
    font-size: 13px;
  }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
  /* line 220,   */
  .footer-area .copyright_part_text {
    text-align: center;
    margin-top: 20px;
    padding: 32px 15px;
  }
  /* line 239,   */
  .footer-area .copyright_part_text p {
    font-size: 13px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  /* line 220,   */
  .footer-area .copyright_part_text {
    text-align: center;
  }
}

/* line 249,   */
.footer-area .copyright_part_text a {
  color: #fe5c24;
}

/* line 253,   */
.footer-area .input-group {
  border: 1px solid #45556a;
  padding: 5px;
}

/* line 258,   */
.footer-area .footer_icon p {
  margin-bottom: 22px;
  font-size: 16px;
}

/* line 262,   */
.footer-area .footer_icon span {
  color: #fe5c24;
}

/* line 266,   */
.footer-area .footer_icon ul li {
  margin-bottom: 20px;
}

/* line 268,   */
.footer-area .footer_icon ul li i {
  margin-right: 15px;
}

/* line 273,   */
.footer-area .footer_icon .social-icons {
  margin-top: 30px;
}

/* line 275,   */
.footer-area .footer_icon .social-icons a {
  color: #fff;
  margin-right: 15px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

/* line 279,   */
.footer-area .footer_icon .social-icons a:hover {
  color: #fe5c24;
}

@media (max-width: 991px) {
  /* line 287,   */
  .footer_icon {
    margin-top: 20px;
  }
}

/* line 292,   */
.footer_menu {
  float: right;
}

@media (max-width: 575px) {
  /* line 292,   */
  .footer_menu {
    float: none;
    text-align: center;
    margin-top: 15px;
  }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
  /* line 292,   */
  .footer_menu {
    float: none;
    text-align: center;
    margin-top: 15px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  /* line 292,   */
  .footer_menu {
    float: none;
    text-align: center;
    margin-top: 15px;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1200px) {
  /* line 292,   */
  .footer_menu {
    float: none;
    text-align: center;
    margin-top: 15px;
  }
}

/* line 315,   */
.footer_menu ul li {
  display: inline-block;
}

/* line 317,   */
.footer_menu ul li a {
  color: #777 !important;
  padding: 0px 22px;
}

/* line 320,   */
.footer_menu ul li a:hover {
  color: #fe5c24 !important;
}

@media (max-width: 575px) {
  /* line 317,   */
  .footer_menu ul li a {
    padding: 0px 15px;
  }
}

</style>