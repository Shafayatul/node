<template>
    <v-app >
        <div class="s002">
            <div class="container">
                <form>
                <div class="inner-form-header">
                        <h3>Find deals on hotels, homes, and much more... </h3>
                        <p>From cozy country homes to funky city apartments </p>
                    </div>
                        
                <keep-alive>
                    <component :cities=cities :is="component"></component>
                </keep-alive>
                </form>
                <div class="checkbox mt-4">
                <label><input type="checkbox" value=""> I'm traveling for work </label>
                </div>
            </div>
        </div>

        <div class="section_padding">
            <div class="container">
            <div class="col-md-12 mb-3">
                <h3>RideShare.com has everything for your trip</h3>

                <div class="row">
                    <div class="col-md-6">
                    <div class="card-body d-flex promo-section">
                        <div class="card-img">
                            <img class="" alt="" src="https://q-cf.bstatic.com/static/img/deals/index_banner_early20/d9154686dc1d8ce971487c5cd2f67073d1230167.jpg">
                        </div>
                        <div class="promo-section-title">
                        <h4 class="">Early 2020 Deals </h4>
                        <p>New Year's resolution to travel more? Start now with 20% off Jan. 1–Mar. 31 </p>
                        <button type="button" class="btn btn-outline-primary mt-2">View deals</button>
                        </div>
                    </div>
                    </div>

                    <div class="col-md-6">
                        <div class="card-body d-flex promo-section">
                        <div class="card-img">
                            <img class="" alt="" src="https://q-cf.bstatic.com/static/img/deals/index_banner_early20/d9154686dc1d8ce971487c5cd2f67073d1230167.jpg">
                        </div>
                        <div class="promo-section-title">
                        <h4 class="">Early 2020 Deals </h4>
                        <p>New Year's resolution to travel more? Start now with 20% off Jan. 1–Mar. 31 </p>
                        <button type="button" class="btn btn-outline-primary mt-2">View deals</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            <div class="row">
                <div class="col-12 col-sm-8 col-md-6 col-lg-6">
                <div class="card">
                    <img class="card-img" src="https://q-cf.bstatic.com/xdata/images/city/540x270/957800.webp?k=6e50f4c36265ab07bf1c6498c298d8a9de40400f606365b83266a3e7ffe67877&o=" alt="Bologna">
                    <div class="card-img-overlay ">
                    <h4 class="card-title">
                        <a href="#" class="card-title-img">
                            Dublin
                            <img src="https://r-cf.bstatic.com/static/img/flags/24/us/e39c170c852301a1817b3d0833be23f677a2f922.png">
                        </a>
                    </h4>
                        <a href="#" class="card-link ">23 properties</a>
                    </div>
                    <button class="btn btn-dark btn-price"><small>Average price </small><br> BDT 8,414</button>
                </div>
                </div>
                <div class="col-12 col-sm-8 col-md-6 col-lg-6">
                <div class="card">
                    <img class="card-img" src="https://q-cf.bstatic.com/xdata/images/city/540x270/957800.webp?k=6e50f4c36265ab07bf1c6498c298d8a9de40400f606365b83266a3e7ffe67877&o=" alt="Bologna">
                    <div class="card-img-overlay ">
                    <h4 class="card-title">
                        <a href="#" class="card-title-img">
                            Dublin
                            <img src="https://r-cf.bstatic.com/static/img/flags/24/us/e39c170c852301a1817b3d0833be23f677a2f922.png">
                        </a>
                    </h4>
                        <a href="#" class="card-link ">23 properties</a>
                    </div>
                    <button class="btn btn-dark btn-price"><small>Average price </small><br> BDT 8,414</button>
                </div>
                </div>
            </div>
                <div class="row mt-3">
                    <div class="col-12 col-sm-8 col-md-4 col-lg-4">
                    <div class="card">
                        <img class="card-img" src="https://q-cf.bstatic.com/xdata/images/city/540x270/957800.webp?k=6e50f4c36265ab07bf1c6498c298d8a9de40400f606365b83266a3e7ffe67877&o=" alt="Bologna">
                        <div class="card-img-overlay ">
                        <h4 class="card-title">
                            <a href="#" class="card-title-img">
                                Dublin
                                <img src="https://r-cf.bstatic.com/static/img/flags/24/us/e39c170c852301a1817b3d0833be23f677a2f922.png">
                            </a>
                        </h4>
                            <a href="#" class="card-link ">23 properties</a>
                        </div>
                        <button class="btn btn-dark btn-price"><small>Average price </small><br> BDT 8,414</button>
                    </div>
                    </div>
                    <div class="col-12 col-sm-8 col-md-4 col-lg-4">
                    <div class="card">
                        <img class="card-img" src="https://q-cf.bstatic.com/xdata/images/city/540x270/957800.webp?k=6e50f4c36265ab07bf1c6498c298d8a9de40400f606365b83266a3e7ffe67877&o=" alt="Bologna">
                        <div class="card-img-overlay ">
                        <h4 class="card-title">
                            <a href="#" class="card-title-img">
                                Dublin
                                <img src="https://r-cf.bstatic.com/static/img/flags/24/us/e39c170c852301a1817b3d0833be23f677a2f922.png">
                            </a>
                        </h4>
                            <a href="#" class="card-link ">23 properties</a>
                        </div>
                        <button class="btn btn-dark btn-price"><small>Average price </small><br> BDT 8,414</button>
                    </div>
                    </div>
                    <div class="col-12 col-sm-8 col-md-4 col-lg-4">
                    <div class="card">
                        <img class="card-img" src="https://q-cf.bstatic.com/xdata/images/city/540x270/957800.webp?k=6e50f4c36265ab07bf1c6498c298d8a9de40400f606365b83266a3e7ffe67877&o=" alt="Bologna">
                        <div class="card-img-overlay ">
                        <h4 class="card-title">
                            <a href="#" class="card-title-img">
                                Dublin
                                <img src="https://r-cf.bstatic.com/static/img/flags/24/us/e39c170c852301a1817b3d0833be23f677a2f922.png">
                            </a>
                        </h4>
                            <a href="#" class="card-link ">23 properties</a>
                        </div>
                        <button class="btn btn-dark btn-price"><small>Average price </small><br> BDT 8,414</button>
                    </div>
                    </div>
            </div>
            <div class="img-section mt-3">
                <h2 class="dis-title">Discover the best ski resorts</h2>
                <p>Enjoy your next ski vacation in one of these countries.</p>
                <div class="row mt-3">
                    <div class="col-md-3 col-lg-3">
                    <div class="card">
                        <img class="card-img" src="https://q-cf.bstatic.com/xdata/images/xphoto/320x240/78983084.webp?k=e96fd146dc2d07ef8599fee8281ba6036367fd9d22210fe3fbd70f832e7c30d6&o=" alt="Bologna"/>
                        <div class="card-img-overlay ">
                            <a href="#" class="disc-img">
                                <img src="https://r-cf.bstatic.com/static/img/flags/24/us/e39c170c852301a1817b3d0833be23f677a2f922.png">
                            </a>
                        </div>
                        <div class="card-bottom">
                        <h3 class="card-bottom-title">Austria</h3>
                        <h4 class="card-bottom-title-se">
                            3 ski resort destinations
                        </h4>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-3 col-lg-3">
                    <div class="card">
                        <img class="card-img" src="https://q-cf.bstatic.com/xdata/images/xphoto/320x240/78983084.webp?k=e96fd146dc2d07ef8599fee8281ba6036367fd9d22210fe3fbd70f832e7c30d6&o=" alt="Bologna"/>
                        <div class="card-img-overlay ">
                            <a href="#" class="disc-img">
                                <img src="https://r-cf.bstatic.com/static/img/flags/24/us/e39c170c852301a1817b3d0833be23f677a2f922.png">
                            </a>
                        </div>
                        <div class="card-bottom">
                        <h3 class="card-bottom-title">Austria</h3>
                        <h4 class="card-bottom-title-se">
                            3 ski resort destinations
                        </h4>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-3 col-lg-3">
                    <div class="card">
                        <img class="card-img" src="https://q-cf.bstatic.com/xdata/images/xphoto/320x240/78983084.webp?k=e96fd146dc2d07ef8599fee8281ba6036367fd9d22210fe3fbd70f832e7c30d6&o=" alt="Bologna"/>
                        <div class="card-img-overlay ">
                            <a href="#" class="disc-img">
                                <img src="https://r-cf.bstatic.com/static/img/flags/24/us/e39c170c852301a1817b3d0833be23f677a2f922.png">
                            </a>
                        </div>
                        <div class="card-bottom">
                        <h3 class="card-bottom-title">Austria</h3>
                        <h4 class="card-bottom-title-se">
                            3 ski resort destinations
                        </h4>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-3 col-lg-3">
                    <div class="card">
                        <img class="card-img" src="https://q-cf.bstatic.com/xdata/images/xphoto/320x240/78983084.webp?k=e96fd146dc2d07ef8599fee8281ba6036367fd9d22210fe3fbd70f832e7c30d6&o=" alt="Bologna"/>
                        <div class="card-img-overlay ">
                            <a href="#" class="disc-img">
                                <img src="https://r-cf.bstatic.com/static/img/flags/24/us/e39c170c852301a1817b3d0833be23f677a2f922.png">
                            </a>
                        </div>
                        <div class="card-bottom">
                        <h3 class="card-bottom-title">Austria</h3>
                        <h4 class="card-bottom-title-se">
                            3 ski resort destinations
                        </h4>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
            </div>
        </div>
        <!--top place start-->
        <section class="product-section  pb-2">
            <div class="container">
                <div class="row ">
                <div class="col-lg-12 pt-2 pb-1">
                    <h3 class="property-title">Browse by property type</h3>
                </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                         <carousel :items="4"  :responsive="{}" :nav="false">
                            <div class="product_slider">
                                <div class="product-img mb-2">
                                    <img src="https://q-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_holidaypark/891162048c0a9c104752ed3c4462f2c230e2fabc.jpg">
                                </div>
                                <div class="product-bottom">
                                <h5> Resort Villages</h5>
                                <p>6,804 resort villages</p>
                                </div>
                            </div>
                            <div class="product_slider">
                                <div class="product-img mb-2">
                                    <img src="https://q-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_holidaypark/891162048c0a9c104752ed3c4462f2c230e2fabc.jpg">
                                </div>
                                <div class="product-bottom">
                                <h5> Resort Villages</h5>
                                <p>6,804 resort villages</p>
                                </div>
                            </div>
                            <div class="product_slider">
                                <div class="product-img mb-2">
                                    <img src="https://q-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_holidaypark/891162048c0a9c104752ed3c4462f2c230e2fabc.jpg">
                                </div>
                                <div class="product-bottom">
                                <h5> Resort Villages</h5>
                                <p>6,804 resort villages</p>
                                </div>
                            </div>
                            <div class="product_slider">
                                <div class="product-img mb-2">
                                    <img src="https://q-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_holidaypark/891162048c0a9c104752ed3c4462f2c230e2fabc.jpg">
                                </div>
                                <div class="product-bottom">
                                <h5> Resort Villages</h5>
                                <p>6,804 resort villages</p>
                                </div>
                            </div>
                            <div class="product_slider">
                                <div class="product-img mb-2">
                                    <img src="https://q-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_holidaypark/891162048c0a9c104752ed3c4462f2c230e2fabc.jpg">
                                </div>
                                <div class="product-bottom">
                                <h5> Resort Villages</h5>
                                <p>6,804 resort villages</p>
                                </div>
                            </div>
                            <div class="product_slider">
                                <div class="product-img mb-2">
                                    <img src="https://q-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_holidaypark/891162048c0a9c104752ed3c4462f2c230e2fabc.jpg">
                                </div>
                                <div class="product-bottom">
                                <h5> Resort Villages</h5>
                                <p>6,804 resort villages</p>
                                </div>
                            </div>
                            <div class="product_slider">
                                <div class="product-img mb-2">
                                    <img src="https://q-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_holidaypark/891162048c0a9c104752ed3c4462f2c230e2fabc.jpg">
                                </div>
                                <div class="product-bottom">
                                <h5> Resort Villages</h5>
                                <p>6,804 resort villages</p>
                                </div>
                            </div>
                            <div class="product_slider">
                                <div class="product-img mb-2">
                                    <img src="https://q-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_holidaypark/891162048c0a9c104752ed3c4462f2c230e2fabc.jpg">
                                </div>
                                <div class="product-bottom">
                                <h5> Resort Villages</h5>
                                <p>6,804 resort villages</p>
                                </div>
                            </div>
                            <div class="product_slider">
                                <div class="product-img mb-2">
                                    <img src="https://q-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_holidaypark/891162048c0a9c104752ed3c4462f2c230e2fabc.jpg">
                                </div>
                                <div class="product-bottom">
                                <h5> Resort Villages</h5>
                                <p>6,804 resort villages</p>
                                </div>
                            </div>
                               <template slot="prev"><span class="prev home-prev"><svg class="bk-icon -iconset-navarrow_left bui-carousel__prev" focusable="false" height="128" width="128" viewBox="0 0 128 128" role="presentation" aria-hidden="true"><path d="M73.7 96a4 4 0 0 1-2.9-1.2L40 64l30.8-30.8a4 4 0 0 1 5.7 5.6L51.3 64l25.2 25.2a4 4 0 0 1-2.8 6.8z"></path></svg></span></template>
                               <template slot="next"><span class="next home-next"> <svg class="bk-icon -iconset-navarrow_right bui-carousel__next" focusable="false" height="128" width="128" viewBox="0 0 128 128" role="presentation" aria-hidden="true"><path d="M54.3 96a4 4 0 0 1-2.8-6.8L76.7 64 51.5 38.8a4 4 0 0 1 5.7-5.6L88 64 57.2 94.8a4 4 0 0 1-2.9 1.2z"></path></svg></span></template>
                         </carousel>

                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 pt-2 pb-1">
                            <h3 class="property-title">Homes guests love</h3>
                    </div>
                    <div class="col-lg-12">
                        <carousel class="home-guest-slider" :items="4"  :responsive="{}" :nav="false">
                            <div class="product_slider">
                                <div class="product-img-home mb-2">
                                </div>
                                <div class="product-bottom">
                                <a class="link" href=""><h5>The Patio Barcelona</h5></a>
                                <small>Barcelona</small>
                                <p class="start-price">Starting from BDT 33,078</p>
                                </div>
                                <div class="product-bottom-sec ">
                                <div class="d-flex">
                                    <div class="home-review-score__badge" aria-label="Scored  9.2 ">  9.2 </div>
                                    <div class="home-review-score">
                                        <div class="home-review-score__title"> Wonderful </div>
                                        <div class="home-review-score__text">  629 reviews </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="product_slider">
                                <div class="product-img-home mb-2">
                                </div>
                                <div class="product-bottom">
                                <a class="link" href=""><h5>The Patio Barcelona</h5></a>
                                <small>Barcelona</small>
                                <p class="start-price">Starting from BDT 33,078</p>
                                </div>
                                <div class="product-bottom-sec ">
                                <div class="d-flex">
                                    <div class="home-review-score__badge" aria-label="Scored  9.2 ">  9.2 </div>
                                    <div class="home-review-score">
                                        <div class="home-review-score__title"> Wonderful </div>
                                        <div class="home-review-score__text">  629 reviews </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="product_slider">
                                <div class="product-img-home mb-2">
                                </div>
                                <div class="product-bottom">
                                <a class="link" href=""><h5>The Patio Barcelona</h5></a>
                                <small>Barcelona</small>
                                <p class="start-price">Starting from BDT 33,078</p>
                                </div>
                                <div class="product-bottom-sec ">
                                <div class="d-flex">
                                    <div class="home-review-score__badge" aria-label="Scored  9.2 ">  9.2 </div>
                                    <div class="home-review-score">
                                        <div class="home-review-score__title"> Wonderful </div>
                                        <div class="home-review-score__text">  629 reviews </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="product_slider">
                                <div class="product-img-home mb-2">
                                </div>
                                <div class="product-bottom">
                                <a class="link" href=""><h5>The Patio Barcelona</h5></a>
                                <small>Barcelona</small>
                                <p class="start-price">Starting from BDT 33,078</p>
                                </div>
                                <div class="product-bottom-sec ">
                                <div class="d-flex">
                                    <div class="home-review-score__badge" aria-label="Scored  9.2 ">  9.2 </div>
                                    <div class="home-review-score">
                                        <div class="home-review-score__title"> Wonderful </div>
                                        <div class="home-review-score__text">  629 reviews </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="product_slider">
                                <div class="product-img-home mb-2">
                                </div>
                                <div class="product-bottom">
                                <a class="link" href=""><h5>The Patio Barcelona</h5></a>
                                <small>Barcelona</small>
                                <p class="start-price">Starting from BDT 33,078</p>
                                </div>
                                <div class="product-bottom-sec ">
                                <div class="d-flex">
                                    <div class="home-review-score__badge" aria-label="Scored  9.2 ">  9.2 </div>
                                    <div class="home-review-score">
                                        <div class="home-review-score__title"> Wonderful </div>
                                        <div class="home-review-score__text">  629 reviews </div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                              <template slot="prev"><span class="prev home-prev"><svg class="bk-icon -iconset-navarrow_left bui-carousel__prev" focusable="false" height="128" width="128" viewBox="0 0 128 128" role="presentation" aria-hidden="true"><path d="M73.7 96a4 4 0 0 1-2.9-1.2L40 64l30.8-30.8a4 4 0 0 1 5.7 5.6L51.3 64l25.2 25.2a4 4 0 0 1-2.8 6.8z"></path></svg></span></template>
                               <template slot="next"><span class="next home-next"> <svg class="bk-icon -iconset-navarrow_right bui-carousel__next" focusable="false" height="128" width="128" viewBox="0 0 128 128" role="presentation" aria-hidden="true"><path d="M54.3 96a4 4 0 0 1-2.8-6.8L76.7 64 51.5 38.8a4 4 0 0 1 5.7-5.6L88 64 57.2 94.8a4 4 0 0 1-2.9 1.2z"></path></svg></span></template>
                        </carousel>

                    </div>
                </div>
            </div>
        </section>
        <!--top place end-->
        <section class=" text-center p-5 mt-4">
            <div class="container p-3">
            <div class="col-lg-12">
                <div class="subscribe">
                    <div class="bui-banner__image-container emk-banner__image">
                        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 32 32" style="margin: -1px;">
                        <path d="M15.967-.072C7.158-.072-.008 7.106-.008 15.929c0 8.822 7.166 15.999 15.975 15.999 8.837 0 16.025-7.177 16.025-15.999S24.803-.072 15.967-.072zm7.602 26.823l.034-.134c.054-.216.104-.431.157-.647a.936.936 0 0 0-1.147-1.077c-.404.117-.461-.135-.462-.144a.933.933 0 0 0-.77-.936.933.933 0 0 0-.543.062c-.246.03-.315-.106-.332-.155a.938.938 0 0 0-.772-.91 1.011 1.011 0 0 0-.486.038s-.437.01-.335-.588a.592.592 0 0 0 .009-.186l.698-5.066c.071-.654-.053-1.048-.554-1.132-.543-.09-.822.29-.914.799 0 0-1.602 7.001-1.859 9.367-.079.717-.143 1.843-.196 3.091l-.103.002c-4.35 0-8.208-2.112-10.61-5.368.19-.455.524-.986 1.105-1.529 1.589-1.488 3.391-.193 3.972.058.582.25 3.469 1.043 3.934-.464 0 0 .155-.522.116-1.565 0 0 .039-.483.775-.347.736.134 1.162-.812.406-1.605 0 0 .737-.56 1.124-1.198.388-.637-.135-.676-.251-.772-.116-.097-.426-.812.174-1.024s2.481-.541 1.609-1.933c-.872-1.391-1.512-2.145-1.802-3.265-.291-1.121-.251-1.372.136-1.874s.33-1.237.33-2.01c0-.294.035-.928-.023-1.699l-.068.119c-.556.965-1.855 1.774-2.72 2.413-1.728 1.274-3.82 1.951-5.627 3.09-1.999 1.261-3.188 3.21-3.852 5.441a19.076 19.076 0 0 0-.717 4.099c-.036.528-.031 1.09.008 1.653-2.351-4.849-1.522-10.844 2.512-14.867 2.781-2.773 6.502-4.012 10.14-3.758l-.002-.009c6.993.349 12.566 6.126 12.566 13.199 0 4.483-2.241 8.442-5.66 10.831zM13.473 9.329c.685-.495 1.112-.479 1.112-.479a.785.785 0 1 1 0 1.57.78.78 0 0 1-.578-.261c-.374-.322-.534-.83-.534-.83z" fill="#FEBA02"></path>
                        </svg>
                        </div>

                        <div class="col-md-8 text-left">
                        <h4 class="subscribe-title">Subscribe to see Secret Deals </h4>
                        <p class="subscribe-title-bottom">Prices drop the moment you sign up! </p>
                            <form class="search-from">
                            <input class="search-input mr-sm-2 " type="search" placeholder="Enter email" aria-label="Search">
                            <button class="btn btn-outline-success sr-btn my-sm-0" type="submit">Search</button>
                        </form>
                        </div>
                        <button type="button " class="close close-btn" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>

                </div>
                </div>
            </div>
        </section>
        <section id="tabs" class="project-tab p-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <nav>
                            <h3>Destinations we love</h3>

                            <div class="nav nav-tabs" id="nav-tab" role="tablist">

                                <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Regions</a>
                                <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Cities</a>
                                <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Places of interest</a>
                            </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <div class="row">
                                    <div class="col-md-3">
                                        <ul>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-md-3">
                                        <ul>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                        </ul>
                                    </div>
                                        <div class="col-md-3">
                                        <ul>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                        </ul>
                                    </div>
                                        <div class="col-md-3">
                                        <ul>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                            </div>
                            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <div class="row">
                                    <div class="col-md-3">
                                        <ul>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-md-3">
                                        <ul>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                        </ul>
                                    </div>
                                        <div class="col-md-3">
                                        <ul>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                        </ul>
                                    </div>
                                        <div class="col-md-3">
                                        <ul>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                            </div>
                            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                    <div class="row">
                                    <div class="col-md-3">
                                        <ul>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-md-3">
                                        <ul>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                        </ul>
                                    </div>
                                        <div class="col-md-3">
                                        <ul>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                        </ul>
                                    </div>
                                        <div class="col-md-3">
                                        <ul>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                            <li>
                                                <a class="nav-link text-left pl-0" href="#">Miami, USA</a>
                                                <span>1,679 properties</span>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                <div class="row">
                    <div class="col-lg-12">
                       <carousel class="client_review_slider" :items="3"  :responsive="{}" :nav="false">

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
                              <template slot="prev"><span class="prev home-prev"><svg class="bk-icon -iconset-navarrow_left bui-carousel__prev" focusable="false" height="128" width="128" viewBox="0 0 128 128" role="presentation" aria-hidden="true"><path d="M73.7 96a4 4 0 0 1-2.9-1.2L40 64l30.8-30.8a4 4 0 0 1 5.7 5.6L51.3 64l25.2 25.2a4 4 0 0 1-2.8 6.8z"></path></svg></span></template>
                               <template slot="next"><span class="next home-next"> <svg class="bk-icon -iconset-navarrow_right bui-carousel__next" focusable="false" height="128" width="128" viewBox="0 0 128 128" role="presentation" aria-hidden="true"><path d="M54.3 96a4 4 0 0 1-2.8-6.8L76.7 64 51.5 38.8a4 4 0 0 1 5.7-5.6L88 64 57.2 94.8a4 4 0 0 1-2.9 1.2z"></path></svg></span></template>
                      </carousel>


                    </div>
                </div>
            </div>
        </section>
    </v-app>
</template>
<script>
import layout from '../layers/Layout'
import carousel from 'vue-owl-carousel'
import Datepicker from 'vuejs-datepicker';
import RideShare from './RideShare'
import Shipment from './Shipment'
import moment from 'moment'
// import { mapGetters,mapState } from "vuex";
export default {
    data(){
        return{
            form:{
                city_from_id: null,
                city_to_id: null,
                type:null,
                number_of_person: 0,
                date: null,
                
            },
             states: [
                    { name: 'Florida', abbr: 'FL', id: 1 },
                    { name: 'Georgia', abbr: 'GA', id: 2 },
                    { name: 'Nebraska', abbr: 'NE', id: 3 },
                    { name: 'California', abbr: 'CA', id: 4 },
                    { name: 'New York', abbr: 'NY', id: 5 },
                ],
            person:[1,2,3,4],
            type:['Tour','Percel Delivery'],
            cities:[],
            component: 'RideShare'
        }
    },
    components:{
        Datepicker,carousel,RideShare,Shipment
    },
    computed:{
    },
    methods:{
        customFilter (item, queryText, itemText) {
            const textOne = item.name.toLowerCase()
            const textTwo = item.abbr.toLowerCase()
            const searchText = queryText.toLowerCase()

            return textOne.indexOf(searchText) > -1 ||
            textTwo.indexOf(searchText) > -1
        },
        customFormatter(date) {
            return moment(date).format('DD/MM/YYYY');
        },
        getCities(){
            axios.get('/api/cities')
            .then(res=>{
                this.cities=res.data.cities
                
            })
            .catch(error=>{
                console.log(error)
            })
        },
        submit(){
            this.$root.$data.number = this.form.number_of_person
            this.form.city_from_id = this.cities.find(item=>{return item.name===this.form.city_from_id}).id
            

            this.form.city_to_id = this.cities.find(item=>{return item.name===this.form.city_to_id}).id
            this.form.type = this.type.indexOf(this.form.type)+1
           console.log(this.form)
           this.$router.push({
               name:'tripList',
               params:{
                   city_from_id:this.form.city_from_id,
                   city_to_id:this.form.city_to_id,
                   type:this.form.type,
                   number_of_person:this.form.number_of_person,
                   date:this.form.date,
               }
           })
        }
    },
    created(){
        this.$emit(`update:layout`,layout)
        this.getCities()
    },
    mounted() {
        EventBus.$on('rideshare',()=>{
            this.component = RideShare
        })
        EventBus.$on('shipment',()=>{
            this.component = Shipment
        })
    },
}
</script>
<style scoped>
.client_review .single_review_slider {
    margin-right: 30px;
}
.product_slider {
    margin-right: 40px;
}
.home-guest-slider .carousel_next_rb8zlwtni0i{
    position: absolute;
    right: 0%;

}
</style>
