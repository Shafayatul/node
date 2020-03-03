<template>
    <v-row>
    <v-col
    cols="12"
    sm="6"
    md="8"
    >
        <v-card class="elevation-12">
            <v-toolbar
            flat
            color="primary"
            dark
            >
            <v-icon>mdi-account</v-icon>
            <v-toolbar-title class="font-weight-light">User Profile</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
                color="purple darken-3"
                fab
                small
                @click="isEditing = !isEditing"
            >
                <v-icon v-if="isEditing">mdi-close</v-icon>
                <v-icon v-else>mdi-pencil</v-icon>
            </v-btn>
            </v-toolbar>
            <v-card-text>
            <v-form
                ref="form"
                
                lazy-validation
            >
                <v-container>
                    <v-row>
                        <v-flex>
                            <v-file-input
                                :disabled="!isEditing"
                                accept="image/png, image/jpeg, image/bmp"
                                placeholder="Image"
                                prepend-icon="mdi-camera"
                                v-model="form.image"
                                @change="onImageChange"
                                label="Image"
                            ></v-file-input>
                            <v-alert
                                v-if="errors.image"
                                outlined
                                type="warning"
                                prominent
                                border="left"
                                >
                                {{errors.image[0]}}
                            </v-alert>
                        </v-flex>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field :disabled="!isEditing" :rules="[ v => !!v || 'Name is required']" v-model="form.name" label="Name" ></v-text-field>
                            <v-alert
                                v-if="errors.image"
                                outlined
                                type="warning"
                                prominent
                                border="left"
                                >
                                {{errors.image[0]}}
                            </v-alert>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field :disabled="!isEditing" :rules="emailRules" type="email" v-model="form.email" label="Email"></v-text-field>
                            <v-alert
                                v-if="errors.email"
                                outlined
                                type="warning"
                                prominent
                                border="left"
                                >
                                {{errors.email[0]}}
                            </v-alert>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field :disabled="!isEditing" :rules="[ v => !!v ||  'Number is required']" v-model="form.mobile" label="Mobile"></v-text-field>
                            <v-alert
                                v-if="errors.mobile"
                                outlined
                                type="warning"
                                prominent
                                border="left"
                                >
                                {{errors.mobile[0]}}
                            </v-alert>
                        </v-col>
                    </v-row>
                    <v-row>
                    <v-col cols="12" sm="6" md="4">
                        
                        <v-select
                        :disabled="!isEditing"
                        :rules="[v => !!v || 'Identity is required']"
                        v-model="form.title"
                        :items="listTitle"
                        label="Title"
                        required
                        ></v-select>
                        
                        <!-- <v-overflow-btn
                        :rules="[ v => !!v || 'Identity is required']"
                        v-model="form.identity_type"
                        class="my-2"
                        :items="list"
                        target="#dropdown-example"
                        ></v-overflow-btn> -->
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-select
                        :disabled="!isEditing"
                        v-model="form.identity_type"
                        :items="list"
                        :rules="[v => !!v || 'Identity is required']"
                        label="Identity Type"
                        required
                        ></v-select>
                        <!-- <v-overflow-btn
                        v-model="form.title"
                        class="my-2"
                        :items="listTitle"
                        target="#dropdown-example"
                        ></v-overflow-btn> -->
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field :disabled="!isEditing" :rules="[v => !!v || 'Identity number is required']" v-model="form.identity_number" label="Identity Number"></v-text-field>
                            <v-alert
                                v-if="errors.identity_number"
                                outlined
                                type="warning"
                                prominent
                                border="left"
                                >
                                {{errors.identity_number[0]}}
                            </v-alert>
                    
                    </v-col>
                    </v-row>
                </v-container>
            </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer />

                <v-btn
                color="success"
                class="mr-4"
                @click="update">Update</v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
    <v-col
        cols="12"
        sm="6"
        md="4"
    >
        <v-card
        class="mx-auto"
        max-width="434"
        tile
        >
            <v-img
            height="100%"
            src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
            >
                <v-row
                    align="end"
                    class="fill-height"
                >
                    <v-col
                    cols="12"
                    >
                    <v-avatar
                        class="profile"
                        color="grey"
                        size="100"
                    >
                        <v-img v-if="form.image"  :src="getImage(form.image[0].url)"></v-img>
                    </v-avatar>
                    </v-col>
                    <v-col class="py-0">
                    <v-list-item
                        color="rgba(0, 0, 0, .4)"
                        dark
                    >
                        <v-list-item-content>
                        <v-list-item-title class="title">{{form.name}}</v-list-item-title>
                        <v-list-item-subtitle>{{form.email}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    </v-col>
                </v-row>
            </v-img>
        </v-card>
    </v-col>
    </v-row>
</template>
<script>
import Vue from 'vue'
export default {
    data(){
        return{
            isEditing: null,
            form:{},
            errors:{},
            emailRules:[
                v=>!!v || 'E-mail is required',
                v=> /.+@.+\..+/.test(v) || 'E-mail must be valid'
            ],
            list:['Passport Number','National Id'],
            listTitle:['Mr','Mrs','Unmarried'],
        }
    },
    methods:{
        onImageChange(e){
            this.form.image = e
        },
        getImage(path){
            return this.$root.$data.root+'/storage/'+path
        },
        getUser(){
            axios.get('/api/current-user-detail')
            .then((res) => {
                this.form = res.data.user
                Vue.set(this.form,'image', null)
            }).catch((error) => {
                console.log(error)
                this.errors=error.response.data.errors
            });
        },
        update(){
            
            let formData = new FormData()
            if(this.form.image !== undefined && this.form.image!== null){
                for (var i = 0; i< this.form.image.length; i++) {
                        formData.append('image[]', this.form.image[i])
                    }
            }
            formData.append('name',this.form.name)
            formData.append('email',this.form.email)
            formData.append('title',this.form.title)
            formData.append('identity_type',this.form.identity_type)
            formData.append('identity_number',this.form.identity_number)
            formData.append('mobile',this.form.mobile)
            axios.post('/api/update-user-detail',formData)
            .then(res=>{
                 Toast.fire({
                    icon: 'success',
                    title: 'Updated Successfully'
                })
            })
        }
    },
    created(){
        
        this.$Progress.start()
        this.getUser()
    },
    mounted() {
        this.$Progress.finish()
    },

}
</script>