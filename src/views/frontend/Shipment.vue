<template>

        <div class="inner-form">
            <v-row>
                <v-col cols="12" md="4" sm="6">
                    <v-autocomplete
                        v-model="form.city_from_id"
                        :items="cities"
                        item-text="name"
                        placeholder="What state are you from?" 
                        :loading="loading"
                        :search-input.sync="search"
                        cache-items
                                    
                        class="mx-4"                        
                    ></v-autocomplete>
                </v-col>
                <v-col  cols="12" md="4" sm="6">
                    <v-autocomplete
                        v-model="form.city_to_id"
                        :items="cities"
                        item-text="name"
                        label="Destination" 
                    ></v-autocomplete>
                </v-col>
        
                <v-col  cols="12" md="4" sm="6">
                    <v-select
                    v-model="form.number_of_bag"
                    :items="person"
                    label="Number Of Bag"
                    required
                    ></v-select>
                </v-col>
            </v-row>
            
        
        
            <div id="search" class="form-group">
                <datepicker :format="customFormatter" class="form-control" placeholder="Date"  name="uniquename"  v-model="form.date" >
                    
                </datepicker>
            </div>
                    <!-- <input class="datepicker" id="datepicker_2" type="text" placeholder="30 Aug 2018" /> -->
                    <!-- </div> -->
                    <!-- <div class="input-field fouth-wrap"> -->
                    <!-- <div class="icon-wrap">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                        </svg>
                    </div>
                        <div id="search" class="form-group">
                        </div> -->
                    <!-- </div> -->
        <div class="input-field fifth-wrap">
        <button @click="submit" class="btn-search" type="button">SEARCH</button>
        </div>
    </div>

</template>
<script>
import layout from '../layers/Layout'
import Datepicker from 'vuejs-datepicker';
import moment from 'moment'
export default {
    props:['cities'],
    data(){
        return{
            form:{
                city_from_id: null,
                city_to_id: null,
                type:null,
                number_of_person: 0,
                date: null,
            },
            type:['Tour','Percel Delivery'],
            
            person:[1,2,3,4],
        }
    },
    components:{
        Datepicker
    },
    methods: {
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
            this.$root.$data.number = this.form.number_of_bag
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

}
</script>