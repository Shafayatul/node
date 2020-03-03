<template>
    <v-col 
    cols="16"
    sm="12"
    md="10">
    <v-data-table
        :headers="headers"
        :items="cities"
        sort-by="id"
        class="elevation-1"
    >
        <template v-slot:top>
            <v-toolbar flat >
                <v-toolbar-title>Cities List</v-toolbar-title>
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
                                    v-model="form.image"
                                    @change="onImageChange"
                                    label="Avatar"
                                ></v-file-input>
                            </v-flex>
                            </v-row>
                            <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field required v-model="form.name" label="City Name"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="form.name_arabic" label="Arabic Name"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="form.name_urdu" label="Urdu Name"></v-text-field>
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
             <!-- <v-carousel cols="12" md="3">
                <v-carousel-item
                v-for="(item,i) in item1.images"
                :key="i"
                :src="getImage(item.url)"
                reverse-transition="fade-transition"
                transition="fade-transition"
                ></v-carousel-item>
            </v-carousel> -->
            <v-img v-if="item.images[0] !== undefined" :src="getImage(item.images[0].url)" aspect-ratio="1" contain></v-img>
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
import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            form:{
                id: null,
                name: '',
                name_arabic:'',
                name_urdu: '',
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
                {text: 'Name', align: 'left',sortable: false,value: 'name',
                },
                { text: 'Arabic Name', value: 'name_arabic', sortable: false },
                { text: 'Urdu Name', value: 'name_urdu', sortable: false },
                { text: 'Actions', value: 'action', sortable: false },
            ],
            editedIndex: -1,
            defaultItem: {
                id: null,
                name: '',
                name_arabic: '',
                name_urdu: '',
                image: null,
            }
        }
    },
    created(){
        this.$store.dispatch('storeCities')
    },
    computed: {
        ...mapGetters({
            cities:'myCities'

        }),
        formTitle () {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },
    methods:{
        getImage(path){
            return this.$root.$data.root+'/storage/'+path
        },
        
        onImageChange(e){
            this.form.image = e
            
        },
        editItem (item) {
            this.editedIndex = this.cities.indexOf(item)
            this.form = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem (item) {
            // const index = this.desserts.indexOf(item)
            confirm('Are you sure you want to delete this item?') &&  this.$store.dispatch('deleteCity',item)
        },
        close () {
            this.dialog = false
            setTimeout(() => {
                this.form = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            }, 500)
        },

        save () {
            // let formData = new FormData();
            // formData.append('image', this.image)
            // this.form.image = formData
            let formData = new FormData()
            // formData.append('image',this.form.image)
            formData.append('name',this.form.name)
            formData.append('name_arabic',this.form.name_arabic)
            formData.append('name_urdu',this.form.name_urdu)
            if(this.form.image !== undefined && this.form.image !== null ){
                for (var i = 0; i< this.form.image.length; i++) {
                        formData.append('image[]', this.form.image[i])
                    }
            }
            if (this.editedIndex > -1) {
                this.$store.dispatch('updateCity',{id:this.form.id,form: formData})
                .then(res=>{
                    Toast.fire({
                        icon: 'success',
                        title: 'Updated successfully'
                    })
                })
            //   Object.assign(this.desserts[this.editedIndex], this.editedItem)
            } else {
                this.$store.dispatch('createCity',formData)
                .then(res=>{
                    Toast.fire({
                        icon: 'success',
                        title: 'Added in successfully'
                    })
                })
            //   this.desserts.push(this.editedItem)
            }
            this.close()
        },
    }
}
</script>
 