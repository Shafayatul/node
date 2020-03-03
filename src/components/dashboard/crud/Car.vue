<template>
    <v-col 
    cols="16"
    sm="12"
    md="10">
    <v-data-table
        :headers="headers"
        :items="cars"
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
                            <v-flex>
                                <v-file-input
                                    multiple="multiple"
                                    accept="image/png, image/jpeg, image/bmp"
                                    placeholder="Image"
                                    prepend-icon="mdi-camera"
                                    @change="onImageChange"
                                    label="Avatar"
                                ></v-file-input>
                            </v-flex>
                            </v-row>
                            <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field required v-model="form.name" label="Name"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="form.name_arabic" label="In Arabic"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="form.name_urdu" label="In Urdu"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="form.capacity_of_person" label="Person Capacity"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="form.capacity_of_bag" label="Bag Capacity"></v-text-field>
                            </v-col>
                            </v-row>
                            <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <p>Smoking Zone</p>
                                <v-overflow-btn
                                v-model="form.is_smoking"
                                class="my-2"
                                :items="list"
                                target="#dropdown-example"
                                ></v-overflow-btn>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <p>Drinks</p>
                                <v-overflow-btn
                                v-model="form.is_drinks"
                                class="my-2"
                                :items="list"
                                label="Drinks"
                                target="#dropdown-example"
                                ></v-overflow-btn>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <p>Food</p>
                                <v-overflow-btn
                                v-model="form.is_food"
                                class="my-2"
                                :items="list"
                                label="Food"
                                target="#dropdown-example"
                                ></v-overflow-btn>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <p>Baby Seat</p>
                                <v-overflow-btn
                                v-model="form.is_baby"
                                class="my-2"
                                :items="list"
                                label="Baby Seat"
                                target="#dropdown-example"
                                ></v-overflow-btn>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <p>Wi-Fi</p>
                                <v-overflow-btn
                                v-model="form.is_wify"
                                class="my-2"
                                :items="list"
                                label="Wi-fi"
                                target="#dropdown-example"
                                ></v-overflow-btn>
                            </v-col>
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
        <template  v-slot:item.images="{ item }">
            <v-img v-if="item.images[0] !== undefined" :src="getImage(item.images[0].url)" aspect-ratio="1" contain></v-img>
        </template>
        <template v-slot:item.is_baby="{ item }">
            {{ item.is_baby | filter}}
        </template>
        <template v-slot:item.is_drinks="{ item }">
            {{ item.is_drinks | filter}}
        </template>
        <template v-slot:item.is_food="{ item }">
            {{ item.is_food | filter}}
        </template>
        <template v-slot:item.is_wify="{ item }">
            {{ item.is_wify | filter}}
        </template>
        <template v-slot:item.is_smoking="{ item }">
            {{ item.is_smoking | filter}}
        </template>
        <template v-slot:item.action="{ item }">
            <v-icon
                small
                class="mr-2"
                @click="editItem(item)"
            >
                mdi-grease-pencil
            </v-icon>
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
            image:new FormData,
            rules: [
                value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
            ],
            list:[
                {text: 'Available',value: 1},
                {text: 'Not Available',value: 0}
            ],
            image: null,
            form:{
                id: null,
                name: '',
                name_arabic:'',
                name_urdu: '',
                capacity_of_person:0,
                capacity_of_bag:0,
                is_smoking:0,
                is_baby:0,
                is_wify:0 ,
                is_food:0 ,
                is_drinks:0,
                image: []
            },
            dialog: false,
            headers: [
                {
                    text: 'Image',
                    value: 'images',
                    width: 200,
                    sortable: false
                },
                {
                    text: 'Name', align: 'left',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Arabic Name', value: 'name_arabic', sortable: false },
                { text: 'Urdu Name', value: 'name_urdu', sortable: false },
                { text: 'Capacity (person)', value: 'capacity_of_person', sortable: false },
                { text: 'Capacity (bag)', value: 'capacity_of_bag' , sortable: false},
                { text: 'Baby Seat', value: 'is_baby' , sortable: false },
                { text: 'Smoking', value: 'is_smoking' , sortable: false},
                { text: 'Food', value: 'is_food' , sortable: false},
                { text: 'Wi-Fi', value: 'is_wify' , sortable: false},
                { text: 'Actions', value: 'action', sortable: false },
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
                name: '',
                name_arabic: '',
                name_urdu: '',
                capacity_of_person: 0,
                capacity_of_bag: 0,
                is_baby: 0,
                is_drinks: 0,
                is_smoking: 0,
                is_wify: 0,
                is_food: 0,
                image: [],
            },
            // main_url: process.env.MIX_SENTRY_DSN_PUBLIC,
        }
    },
    created(){
        this.$store.dispatch('storeCars')
    },
    computed: {
        ...mapGetters({
            cars:'myCars'

        }),
        formTitle () {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },
    filters:{
        filter(value){
            if(value ===1){
                return 'Available'
            }else{
                return 'Not Available'
            }
        }
    },
    methods: {
        getImage(path){
            return this.$root.$data.root+'/storage/'+path
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
        // const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') &&  this.$store.dispatch('deleteCar',item)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.form = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        // let formData = new FormData();
        // formData.append('image', this.image)
        // this.form.image = formData
        let formData = new FormData()
        formData.append('image',this.form.image)
        formData.append('name',this.form.name)
        formData.append('name_arabic',this.form.name_arabic)
        formData.append('name_urdu',this.form.name_urdu)
        formData.append('capacity_of_person',this.form.capacity_of_person)
        formData.append('capacity_of_bag',this.form.capacity_of_bag)
        formData.append('is_baby',this.form.is_baby)
        formData.append('is_drinks',this.form.is_drinks)
        formData.append('is_food',this.form.is_food)
        formData.append('is_wify',this.form.is_wify)
        formData.append('is_smoking',this.form.is_smoking)
        if(this.form.image !== undefined){
            for (var i = 0; i< this.form.image.length; i++) {
                    formData.append('image[]', this.form.image[i])
                }
        }
        if (this.editedIndex > -1) {
            this.$store.dispatch('updateCar',{id:this.form.id,form: formData})
        //   Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
            this.$store.dispatch('createCar',formData)
        //   this.desserts.push(this.editedItem)
        }
        this.close()
      },
    }
}
</script>