<template>
    <v-col 
    cols="16"
    sm="12"
    md="10">
    <v-data-table
        :headers="headers"
        :items="products"
        sort-by="id"
        class="elevation-1"
    >
        <template v-slot:top>
            <v-toolbar flat >
                <v-toolbar-title>Products List</v-toolbar-title>
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
                                    <v-text-field required v-model="form.name" label="Name"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="form.name_arabic" label="Arabic Name"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="form.name_urdu" label="Urdu Name"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="form.price" label="Price"></v-text-field>
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
        <template  v-slot:item.images="{ item }">
            <v-img v-if="item.images[0] !== undefined" :src="getImage(item.images[0].url)" aspect-ratio="1" contain></v-img>
        </template>
        
        <template v-slot:item.status="{ item }">
            {{ item.status | status }}
        </template>
        
        <template v-slot:item.action="{ item }">
            <v-icon
                v-if="item.status===1"
                small
                @click="deactivate(item.id)"
            >
                mdi-eye-off-outline
            </v-icon>
            
            <v-icon
                class="mx-2"
                v-if="item.status===0"
                small
                @click="activate(item.id)"
            >
               mdi-eye-outline
            </v-icon>
            <v-icon
                class="mx-2"
                small
                @click="editItem(item)"
            >
                mdi-grease-pencil
            </v-icon>
            <v-icon
                class="mx-2"
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
            form:{
                id: null,
                name: '',
                name_arabic:'',
                name_urdu:'',
                description:'',
                description_arabic:'',
                description_urdu:'',
                price:0,
                image:[]
            },
            dialog: false,
            headers: [
                {text: 'Product Name',value: 'name',sortable: false},
                {text: 'Arabic Name', align: 'left',sortable: false,value: 'name_arabic'},
                { text: 'Urdu Name', value: 'name_urdu', sortable: false },
                { text: 'Description', value: 'description', sortable: false },
                { text: 'Arabic(Description)', value: 'description_arabic', sortable: false },
                { text: 'Urdu(Description)', value: 'description_urdu' , sortable: false},
                { text: 'Price', value: 'price' , sortable: false },
                { text: 'Status', value: 'status' , sortable: false },
                { text: 'Actions', value: 'action', sortable: false,width: 150}
            ],
            desserts: [],
            editedIndex: -1,
            defaultItem: {
                id: null,
                name: '',
                name_arabic:'',
                name_urdu:'',
                description:'',
                description_arabic:'',
                description_urdu:'' ,
                price:0 ,
            },
            // main_url: process.env.MIX_SENTRY_DSN_PUBLIC,
        }
    },
    filters:{
        status(value){
            if(value===1){
                return 'Active';
            }else{
                return 'Deactive';
            }
        }
    },
    created(){
        this.$store.dispatch('storeProducts')
    },
    computed: {
        ...mapGetters({
            products:'myProducts'

        }),
        formTitle () {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },
    methods: {

        deactivate(id) {
            confirm('Are you sure you want to deactivate ?') &&  this.$store.dispatch('deactivateProduct',id)
        },

        activate (id) {
            confirm('Are you sure you want to activate this product ?') &&  this.$store.dispatch('activateProduct',id)
        },
        getImage(path){
            return this.$root.$data.root+'/storage/'+path
        },
        onImageChange(e){
            this.form.image = e
        },
        editItem (item) {
            this.editedIndex = this.products.indexOf(item)
            this.form = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem (item) {
            console.log(item.id)
            // const index = this.desserts.indexOf(item)
            confirm('Are you sure you want to delete this item?') &&  this.$store.dispatch('deleteProduct',item.id)
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
            formData.append('description',this.form.description)
            formData.append('description_arabic',this.form.description_arabic)
            formData.append('description_urdu',this.form.description_urdu)
            formData.append('price',this.form.price)
            formData.append('image', this.form.image)
            // if(this.form.image !== undefined && this.form.image !== null ){
            //     for (var i = 0; i< this.form.image.length; i++) {
            //             formData.append('image[]', this.form.image[i])
            //         }
            // }
            if (this.editedIndex > -1) {
                this.$store.dispatch('updateProduct',{id:this.form.id,form: formData})
                .then(res=>{
                    Toast.fire({
                        icon: 'success',
                        title: 'Updated successfully'
                    })
                })
            //   Object.assign(this.desserts[this.editedIndex], this.editedItem)
            } else {
                this.$store.dispatch('createProduct',formData)
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