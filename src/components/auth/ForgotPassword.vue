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
            outlined
            type="warning"
            prominent
            border="left"
            >
                This Email has no account
            </v-alert>
            <v-alert
            v-if="flag"
            outlined
            type="success"
            text
            >
                An Email has been sent to your e-mail address 
             </v-alert>
            <!-- -->
            <v-card class="elevation-12">
                <v-toolbar
                color="primary"
                dark
                flat
                >
                <v-toolbar-title>Enter Your Email</v-toolbar-title>
                <v-spacer />
                </v-toolbar>
                <v-card-text>
                <v-form>
                    <v-text-field
                    label="Email"
                    name="login"
                    type="text"
                    v-model="form.email"
                    />

                    <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    v-model="form.password"
                    />
                </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn @click="login" color="primary">Submit</v-btn>
                </v-card-actions>
            </v-card>
            </v-col>
        </v-row>
      </v-container>
</v-content>
</v-app> 
</template>
<script>
import AuthLayout from '../layers/AuthLayout'
export default {
    data(){
        return{
            form:{
                email: null
            },
            errors:{},
            flag: null
        }
    },
    computed:{
    },
    components:{
        AuthLayout
    },
    methods:{
        login(){
            // User.login(this.form)
            axios.post('/api/password/create',this.form)
            .then(res=>{
                this.flag = true,
                console.log(res)
            })
            .catch(error=>{
                this.flag1=true
            })
        }
        
    },
    created(){
        this.$emit(`update:layout`,AuthLayout)
    }
}
</script>