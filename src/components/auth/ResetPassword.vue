<template>
<v-app>
<v-content>
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
            <v-alert
            v-if="flag"
            outlined
            type="success"
            text
            >
                An Email has been sent to your mail address 
             </v-alert>
            <!-- -->
            <v-card class="elevation-12">
                <v-toolbar
                color="primary"
                dark
                flat
                >
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer />
                </v-toolbar>
                <v-card-text>
                <v-form>
                    <v-text-field
                    label="Email"
                    name="login"
                    type="text"
                    prepend-icon="mdi-account"
                    v-model="form.email"
                    />
                    <v-text-field prepend-icon="mdi-lock-question" :rules="[ v => !!v || 'Password is required']" v-model="form.password" label="Password" type="password"></v-text-field>
                    
                    <v-text-field prepend-icon="mdi-lock-question" :rules="[ v => !!v || 'Password confirmation is required',v => form.password === form.password_confirmation || 'Password should match' ]" v-model="form.password_confirmation" label="Confirm Password" type="password" ></v-text-field>
                
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
            flag:null,
            form: {
                token: null,
                email: null,
                password:null,
                password_confirmation:null
            },
            errors:{}
        }
    },
    components:{
    },
    methods:{
        
        login () {
            // Submit the form via a POST request
            axios.post('/api/password/reset',this.form)
            .then( res  => {
                window.location = '/login'
            })
        }
    },
    created() {
        this.form.token = this.$route.params.token
    },
  }
</script>