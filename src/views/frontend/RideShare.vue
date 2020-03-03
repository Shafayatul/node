<template>

       <!--  <div class="inner-form">
            <v-row>
                <v-col cols="12" md="4" sm="6" >
                    <v-autocomplete
                        v-model="form.city_from_id"
                        :items="cities"
                        item-text="name"
                        label="State From" 
                        flat
                        color="white"                       
                        hide-no-data
                        hide-details
                    ></v-autocomplete>
                </v-col>
        
                <v-col  cols="12" md="4" sm="6"  >
                    <v-autocomplete
                        v-model="form.city_to_id"
                        :items="cities"
                        item-text="name"
                        label="Destination" 
                        flat
                        hide-no-data
                        hide-details
                    ></v-autocomplete>
                </v-col>
        
                <v-col  cols="12" md="4" sm="6">
                
                    <v-select
                    v-model="form.number_of_person"
                    :items="person"
                    label="Number Of Person"
                    required
                    ></v-select>
                </v-col>
            </v-row>
            
        
        
            <div id="search" class="form-group">
                <datepicker :format="customFormatter" class="form-control" placeholder="Date"  name="uniquename"  v-model="form.date" >
                    
                </datepicker>
            </div>
               
        <div class="input-field fifth-wrap">
        <button @click="submit" class="btn-search" type="button">SEARCH</button>
        </div>
    </div> -->

      <div class="inner-form">

                       
          <div class="input-field first-wrap">
            <v-autocomplete
                 v-model="form.city_from_id"
                :items="cities"
                :loading="isLoading"
                :search-input.sync="search"
                chips
                clearable
                hide-details
                hide-selected
                item-text="name"
                item-value="symbol"
                label="Search for a coin..."
                solo
    ></v-autocomplete>
          </div>
          <div class="input-field second-wrap">           
             <v-autocomplete
                        v-model="form.city_to_id"
                        :items="cities"
                        item-text="name"
                        chips
                        clearable
                        hide-details
                        hide-selected
                        placeholder="Destination" 
                        flat
                        hide-no-data
                        solo
                    ></v-autocomplete>
          </div>
          <div class="input-field third-wrap">
                <datepicker :format="customFormatter" class="form-control" placeholder="29 Aug 2018"  name="uniquename"  v-model="form.date" >
                    
                </datepicker>
          </div>
          <div class="input-field fouth-wrap">
            <div class="icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
              </svg>
            </div>
             <v-select            
           v-model="form.number_of_person"
           :items="person"
           label="Number Of Person"
           required
          solo
          flat
        ></v-select>
          </div>
          <div class="input-field fifth-wrap">
            <button @click="submit" class="btn-search" type="button">SEARCH</button>
          </div>
        </div>
</template>
<script>
import layout from '../layers/Layout'
import carousel from 'vue-owl-carousel'
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
             states: [
                    { name: 'Florida', abbr: 'FL', id: 1 },
                    { name: 'Georgia', abbr: 'GA', id: 2 },
                    { name: 'Nebraska', abbr: 'NE', id: 3 },
                    { name: 'California', abbr: 'CA', id: 4 },
                    { name: 'New York', abbr: 'NY', id: 5 },
                ],
            person:[1,2,3,4],
            type:['Tour','Percel Delivery'],
        }
    },
    components:{
        Datepicker,carousel
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

}
</script>