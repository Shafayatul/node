<template>
<v-app>
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
            sm="8"
            md="4"
            >
            <v-card class="elevation-12">
                <v-toolbar
                color="primary"
                dark
                flat
                >

                <v-toolbar-title >Login form</v-toolbar-title>
                <v-spacer />
                <v-toolbar-title ><img src="@/assets/img/logo.png" alt="logo"></v-toolbar-title>
                
                </v-toolbar>
                <v-card-text>
                <v-form>
                    <v-text-field
                    label="Email"
                    name="login"
                    prepend-icon="person"
                    type="text"
                    v-model="form.email"
                    />

                    <v-text-field
                    id="password"
                     prepend-icon="lock"
                    label="Password"
                    name="password"
                    type="password"
                    v-model="form.password"
                    />
                </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn @click="login" color="primary">Login</v-btn>
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
             form: new Form({
                email: null,
                password:null,
                remember_me:true,

            })
        }
    },
    components:{
    },
    methods:{
        
        login () {
            // Submit the form via a POST request
            this.form.post('/api/login')
                .then(( res ) => {  User.responseAfterLogin(res) })
        }
    }
  }
</script>