<template>
<v-app  > <!-- :style="{ backgroundImage: 'url(' + image + ')' } " -->
<v-content >
      <v-container
        class="fill-height fill-width"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
            <v-col
            cols="12"
            sm="10"
            md="8"
            >
            <v-card class="elevation-12">
                <v-toolbar
                color="primary"
                dark
                flat
                >
                <v-toolbar-title>Register form</v-toolbar-title>
                <v-spacer />
                </v-toolbar>
                <v-card-text>
                <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                >
                    <v-container>
                        <v-row>
                            <v-flex>
                                <v-file-input
                                    accept="image/png, image/jpeg, image/bmp"
                                    placeholder="Image"
                                    prepend-icon="mdi-camera"
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
                                <v-text-field :rules="[ v => !!v || 'Name is required']" v-model="form.name" label="Name" ></v-text-field>
                                <v-alert
                                    v-if="errors.image"
                                    outlined
                                    type="warning"
                                    prominent
                                    border="left"
                                    >
                                    {{errors.name[0]}}
                                </v-alert>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field :rules="emailRules" type="email" v-model="form.email" label="Email"></v-text-field>
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
                                <v-text-field :rules="[ v => !!v || 'Password is required']" v-model="form.password" label="Password" type="password"></v-text-field>
                                <v-alert
                                    v-if="errors.password"
                                    outlined
                                    type="warning"
                                    prominent
                                    border="left"
                                    >
                                    {{errors.password[0]}}
                                </v-alert>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field :rules="[ v => !!v || 'Password confirmation is required',v => form.password === form.password_confirmation || 'Password should match' ]" v-model="form.password_confirmation" label="Confirm Password" type="password" ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field :rules="[ v => !!v ||  'Number is required']" v-model="form.mobile" label="Mobile"></v-text-field>
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
                            :rules="[v => !!v || 'Identity is required']"
                            v-model="form.identity_type"
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
                            v-model="form.title"
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
                            <v-text-field :rules="[v => !!v || 'Identity number is required']" v-model="form.identity_number" label="Identity Number"></v-text-field>
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

                        <v-row v-show="path" cols="12" sm="6" md="4">
                            <v-text-field :rules="[v => !!v || 'Licence number is required']" v-model="form.licence" label="Identity Number"></v-text-field>
                            <v-alert
                                v-if="errors.licence"
                                outlined
                                type="warning"
                                prominent
                                border="left"
                                >
                                {{errors.licence[0]}}
                            </v-alert>
                        </v-row>
                    </v-container>
                </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />

                    <v-btn
                    color="error"
                    class="mr-4"
                    @click="reset"
                    >
                    Reset Form
                    </v-btn>
                    <v-btn
                    :disabled="!valid"
                    v-if="!path"
                    color="success"
                    class="mr-4"
                    @click="register">Register</v-btn>
                    <v-btn
                    v-show="path"
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="driverRegister">Register</v-btn>
                </v-card-actions>
            </v-card>
            </v-col>
        </v-row>
      </v-container>
</v-content>
</v-app>
</template>

<script>
import {Form} from 'vform'
export default {
    data() {
        return {
            	// image: "https://image.shutterstock.com/image-photo/ride-share-customer-passenger-sitting-260nw-1158247042.jpg",
            flag:1,
            valid:true,
            form: {
                image:null,
                email: '',
                password:'',
                status:'',
                identity_type:'',
                identity_number:'',
                mobile:'',
                password_confirmation:'',
                licence:''
            },
            emailRules:[
                v=>!!v || 'E-mail is required',
                v=> /.+@.+\..+/.test(v) || 'E-mail must be valid'
            ],
            list:['Passport Number','National Id'],
            listTitle:['Mr','Mrs','Unmarried'],
            errors:{}
        }
    },
    components:{
        passwordConfirmation(){
            return () => (this.form.password === this.form.password_confirmation)
        }
    },
    computed: {
        path(){
            console.log(this.$route.path.includes("driver-register"))
            return    this.$route.path.includes("driver-register")
        }
    },
    methods:{
        reset () {
            this.$refs.form.reset()
        },
        onImageChange(e){
            this.form.image = e

        },
        register() {
            if (this.$refs.form.validate()) {
                this.snackbar = true
            }
            this.form.title = this.listTitle.indexOf(this.form.title)+1
            this.form.identity_type = this.listTitle.indexOf(this.form.identity_type) +1

            let formData = new FormData()
            if(this.form.image !== undefined){
                for (var i = 0; i< this.form.image.length; i++) {
                        formData.append('image[]', this.form.image[i])
                    }
            }
            formData.append('name',this.form.name)
            formData.append('password',this.form.password)
            formData.append('password_confirmation',this.form.password_confirmation)
            formData.append('email',this.form.email)
            formData.append('title',this.form.title)
            formData.append('identity_type',this.form.identity_type)
            formData.append('identity_number',this.form.identity_number)
            formData.append('mobile',this.form.mobile)

            // Submit the form via a POST request
            axios.get('/api/register',formData)
                .then(res => {
                    this.$router.push({
                        name: 'login'
                    })
                 })
                 .catch(error=>{
                     this.errors = error.response.data.errors
                 })
        },
        driverRegister() {
            if (this.$refs.form.validate()) {
                this.snackbar = true
            }
            this.form.title = this.listTitle.indexOf(this.form.title)+1
            this.form.identity_type = this.listTitle.indexOf(this.form.identity_type) +1

            let formData = new FormData()
            if(this.form.image !== undefined){
                for (var i = 0; i< this.form.image.length; i++) {
                        formData.append('image[]', this.form.image[i])
                    }
            }
            formData.append('name',this.form.name)
            formData.append('password',this.form.password)
            formData.append('password_confirmation',this.form.password_confirmation)
            formData.append('email',this.form.email)
            formData.append('title',this.form.title)
            formData.append('identity_type',this.form.identity_type)
            formData.append('identity_number',this.form.identity_number)
            formData.append('mobile',this.form.mobile)
            formData.append('licence',this.form.licence)

            // Submit the form via a POST request
            axios.get('/api/partner-register',formData)
                .then(res => {
                    this.$router.push({
                        name: 'login'
                    })
                 })
                 .catch(error=>{
                     this.errors = error.response.data.errors
                 })
        },
        created() {

        },
    }
  }
</script>
