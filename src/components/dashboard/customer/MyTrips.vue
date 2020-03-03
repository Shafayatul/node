<template>
    <v-col 
    cols="16"
    sm="12"
    md="10">
    <v-data-table
        :headers="headers"
        :items="trips"
        sort-by="id"
        class="elevation-1"
    >
        <template v-slot:top>
            <v-toolbar flat >
                <v-toolbar-title>My Trips</v-toolbar-title>
                <v-divider
                class="mx-4"
                inset
                vertical
                ></v-divider>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" color="white" max-width="500px">
                    <!-- <template v-slot:activator="{ on }">
                        <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
                    </template> -->
                    <v-card v-model="dialog" max-width="500px">
                        <v-container>
                            <v-card-title
                            class="headline"
                            primary-title
                            >
                            Rate Our Service
                            </v-card-title>
                            <v-card-text>
                            If you enjoy our trip, please take a few seconds to rate your experience. It really helps!

                            <div class="text-center mt-12">
                                <v-rating
                                v-model="form.rating"
                                color="yellow darken-3"
                                background-color="grey darken-1"
                                empty-icon="$ratingFull"
                                half-increments
                                hover
                                ></v-rating>
                                <v-textarea
                                filled
                                name="input-7-4"
                                label="Description"
                                v-model="form.review"
                                ></v-textarea>
                            </div>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions class="justify-space-between">
                            <v-btn text>No Thanks</v-btn>
                            <v-btn
                                color="primary"
                                text
                            >
                                Rate Now
                            </v-btn>
                            </v-card-actions>
                        </v-container>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="dialog2" max-width="500px">
                    <v-card>
                        <v-container>
                            <v-row>
                                <!-- <v-card
                                    class="elevation-16 mx-auto"
                                    width="300"
                                > -->
                                    <v-card-title
                                    class="headline"
                                    primary-title
                                    >
                                    Complain if any
                                    </v-card-title>
                                    <v-card-text>
                                        
                                        <div class="text-center mt-12">
                                            <v-row cols="10" sm="4" md="4">
                                                <v-col>
                                                    <v-text-field v-model="form.title" label="Title"></v-text-field>
                                                </v-col>
                                            </v-row>
                                            <v-textarea
                                            filled
                                            name="input-7-4"
                                            label="Complain"
                                            v-model="form.description"
                                            ></v-textarea>
                                        </div>
                                    </v-card-text>
                                    <v-divider></v-divider>
                                    <v-card-actions class="justify-space-between">
                                    <v-btn text>No Thanks</v-btn>
                                    <v-btn
                                        color="primary"
                                        text
                                        @click="save"
                                    >
                                        Submit
                                    </v-btn>
                                    </v-card-actions>
                                <!-- </v-card> -->
                            </v-row>
                        </v-container>
                    </v-card>
                </v-dialog>
            </v-toolbar>
        </template>
        
        <template v-slot:item.status="{ item }">
            {{item.status | status}}
        </template>
        
        <template v-slot:item.complain="{ item }">
            <v-icon :disabled="flag2" small @click="complain1(item)">
                mdi-message-draw
            </v-icon>
        </template>
        
        <template v-slot:item.review="{ item }">
            <v-icon :disabled="flag" small @click="review(item)">
                mdi-message-draw
            </v-icon>
        </template>
        <template v-slot:no-data>
            <v-alert
                color="#2A3B4D"
                tile
                icon="mdi-firework"
                dense
            >
                No data available to show

            </v-alert>
        </template>
    </v-data-table>
    
    </v-col>
</template>
<script>
import Vue from 'vue';
import {mapGetters,mapState} from 'vuex'
export default {
    data(){
        return{
            list:[],
            flag: false,
            flag2: false,
            trips:[],
            type:[ 'Tour', 'Parcel Delivary'],
            image: null,
            form:{
                trip_booking_id:null,
                from_id:null,  
                to_id: null
                , rating: 0, 
                review: ''
            },
            complain:{trip_id: null, complain_from_id: null, complain_to_id: null, title:null, description:null
            },
            dialog: false,
            dialog2:false,
            headers: [
                { text: 'Title', value: 'title', sortable: false },
                {
                    text: 'Title',value: 'title',sortable: false,width:200
                },
                {
                    text: 'Departure Time', align: 'left',sortable: false,value: 'date'
                },
                { text: 'Number of person', value: 'number_of_passengers', sortable: false },
                { text: 'Total Price', value: 'price', sortable: false },
                { text: 'Status', value: 'status', sortable: false },
                { text: 'Review', value: 'review', sortable: false },
                { text: 'Complain', value: 'complain', sortable: false },
            ],
            desserts: [],
            editedIndex: -1,
            defaultItem: {
                trip_booking_id:null,
                from_id:null,  
                to_id: null
                , rating: 0, 
                review: ''
            },
            // main_url: process.env.MIX_SENTRY_DSN_PUBLIC,
        }
    },
    created(){
        this.getTrips()
    },
    computed: {
        formTitle () {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },
    filters:{
        status(value){
            if(value===1){
                return 'Checked In'
            }
            if(value===2){
                return 'Checked Out'
            }
            if(value===0){
                return 'Not Started Yet'
            }

        }
    },
    methods: {
        review(item){
            this.dialog = true
            Vue.set(this.form,'trip_booking_id',item.id)
            Vue.set(this.form,'from_id',item.from_id)
            Vue.set(this.form,'to_id',item.to_id)

        },
        submitRating(){
            axios.post('/api/reviews',this.form)
            .then((res) => {
                Toast.fire({
                    icon: 'success',
                    title: 'Thanks for giving the review'
                })
                this.flag = true;
            }).catch((err) => {
                
            });
        },
        complain1(item){
            Vue.set(this.complain,'trip_id',item.trip_id)
            Vue.set(this.complain,'complain_from_id',item.from_id)
            Vue.set(this.complain,'complain_to_id',item.to_id)
            this.dialog2 = true
        },
        submitComplain(){
            axios.post('/api/complains',this.complain)
            .then((res) => {
                Toast.fire({
                    icon: 'success',
                    title: 'Thanks for giving the information'
                })
                this.flag2 = true;
            }).catch((err) => {
                
            });
        },
        getTrips(){
            axios.get('/api/trip-bookings')
            .then(res=>{
                this.trips = res.data.data

            })
            .catch(error=>console.log(error))
        },
        onImageChange(e){
            this.form.image = e
            
        },
        editItem (item) {
            this.editedIndex = this.cars.indexOf(item)
            this.form = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem (item) {
            console.log(item.id)
            // const index = this.desserts.indexOf(item)
            confirm('Are you sure you want to delete this item?') &&  this.$store.dispatch('deleteTrip',item.id)
        },

        close () {
            this.dialog = false
            setTimeout(() => {
            this.form = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            }, 500)
        },

      save () {
        axios.post('/api/reviews',this.form)
        .then(res=>{
            Toast.fire({
                icon: 'success',
                title: 'Thanks for the review !!!'
            })
        })
      },
    }
}
</script>