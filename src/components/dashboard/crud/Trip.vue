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
                <v-toolbar-title>My Cars</v-toolbar-title>
                <v-divider
                class="mx-4"
                inset
                vertical
                ></v-divider>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on }">
                        <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                        <v-container>
                            <v-row >
                                <v-datetime-picker label="Select Date" v-model="form.date"> </v-datetime-picker>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field required v-model="form.title" label="Title"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="form.title_arabic" label="Arabic Title"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="form.title_urdu" label="Urdu Title"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="form.number_of_person" label="Number Of Person"></v-text-field>

                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="form.price_per_person" label="Price"></v-text-field>
                                </v-col>
                                
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <p>Origin</p>
                                    <v-overflow-btn
                                    v-model="form.city_from_id"
                                    placeholder="City"
                                    class="my-2"
                                    :items="list"
                                    label="City"
                                    target="#dropdown-example"
                                    >
                                       
                                    </v-overflow-btn>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <p>Destination</p>
                                    <v-overflow-btn
                                    v-model="form.city_to_id"
                                    class="my-2"
                                    :items="list"
                                    label="City"
                                    target="#dropdown-example"
                                    ></v-overflow-btn>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <p>Destination</p>
                                    <v-overflow-btn
                                    v-model="form.type"
                                    class="my-2"
                                    :items="type"
                                    label="City"
                                    target="#dropdown-example"
                                    ></v-overflow-btn>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="form.pickup_location" label="Pickup Location"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-textarea
                                filled
                                name="input-7-4"
                                label="Description"
                                v-model="form.description"
                                ></v-textarea>
                            </v-row>
                            <v-row>
                                <v-textarea
                                filled
                                name="input-7-4"
                                v-model="form.description_arabic"
                                label="Description In Arabic"
                               
                                ></v-textarea>
                            </v-row>
                            <v-row>
                                <v-textarea
                                filled
                                name="input-7-4"
                                label="Description In Urdu"
                                v-model="form.description_urdu"
                                
                                ></v-textarea>
                            </v-row>
                        </v-container>
                        </v-card-text>

                        <v-card-actions>
                        <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                            <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
        </template>
        
        <template v-slot:item.action="{ item }">
            
            <v-icon
                small
                @click="deleteItem(item)"
            >
                mdi-delete
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
import {mapGetters,mapState} from 'vuex'
export default {
    data(){
        return{
            list:[],
            cities:[],
            type:[ 'Tour', 'Parcel Delivary'],
            image: null,
            form:{
                id: null,
                city_from_id:null ,
                city_to_id:null,
                title: '',
                title_arabic:'',
                title_urdu:'',
                description:'',
                description_arabic:'',
                description_urdu:'' ,
                date: null,
                price_per_person:0 ,
                number_of_person:0,
                pickup_location:'',
            },
            dialog: false,
            headers: [
                { text: 'Origin', value: 'title_urdu', sortable: false },
                { text: 'Destination', value: 'title_urdu', sortable: false },
                {
                    text: 'Title',value: 'title',sortable: false
                },
                {
                    text: 'Arabic Title', align: 'left',sortable: false,value: 'title_arabic'
                },
                { text: 'Urdu Title', value: 'title_urdu', sortable: false },
                { text: 'Description', value: 'description', sortable: false },
                { text: 'Arabic Description', value: 'description_arabic', sortable: false },
                { text: 'Urdu Description', value: 'description_urdu' , sortable: false},
                { text: 'Ticket Price', value: 'price_per_person' , sortable: false },
                { text: 'Person Capacity', value: 'number_of_person' , sortable: false},
                { text: 'Pickup Location', value: 'pickup_location' , sortable: false},
                {
                    text: 'Date', align: 'left',sortable: false,value: 'date'
                },
                { text: 'Actions', value: 'action', sortable: false }
            ],
            desserts: [],
            editedIndex: -1,
            editedItem: {
                name: '',
                name_arabic: 0,
                name_urdu: 0,
                carbs: 0,
                protein: 0,
            },
            defaultItem: {
                id: null,
                city_from_id:null ,
                city_to_id:null,
                title: '',
                title_arabic:'',
                title_urdu:'',
                description:'',
                description_arabic:'',
                description_urdu:'' ,
                price_per_person:0 ,
                number_of_person:0,
                pickup_location:'',
            },
            // main_url: process.env.MIX_SENTRY_DSN_PUBLIC,
        }
    },
    created(){
        this.cityList()
        this.$store.dispatch('setTripList')
    },
    computed: {
        ...mapGetters({
            trips:'getTripList'

        }),
        formTitle () {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },
    filters:{
        cityName(value,cities){
            console.log(cities)
            let name = cities.find(item => item.id ===value ).name
            return name
        }
    },
    methods: {
        cityList(){
            axios.get('/api/front-cities')
            .then(res=>{
                this.cities = res.data[0]
                let column = res.data[0];
                console.log(column)
                if(res.data !== null){
                    this.list = column.map(a => a.name)
                    console.log(this.list)
                }

            })
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
        this.form.city_from_id = this.cities.find(e=>e.name ===this.form.city_from_id).id
        this.form.city_to_id = this.cities.find(e=>e.name ===this.form.city_to_id).id
        if(this.form.type ==='Tour'){
            this.form.type = 1
        }
        if(this.form.type ==='Parcel Delivary'){
            this.form.type = 2
        }
        console.log(this.form.city_from_id)
        this.$store.dispatch('addTrip',this.form)
        //   this.desserts.push(this.editedItem)
        
        this.close()
      },
    }
}
</script>