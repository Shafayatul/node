<template>
    
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
                <v-toolbar-title>Change Password</v-toolbar-title>
                <v-spacer />
                </v-toolbar>
                <v-card-text>
                <v-form>

                    <v-text-field
                    id="password"
                    label="Old Password"
                    name="password"
                    type="password"
                    v-model="form.old_password"
                    />
                    <v-text-field :rules="[ v => !!v || 'Password is required']" v-model="form.password" label="New Password" type="password"></v-text-field>
                    <!-- <v-alert
                        v-if="errors.password"
                        outlined
                        type="warning"
                        prominent
                        border="left"
                        >
                        {{errors.password[0]}}
                    </v-alert> -->
                    <v-text-field :rules="[ v => !!v || 'Password confirmation is required',v => form.new_password === form.confirm_password || 'Password should match' ]" v-model="form.password_confirmation" label="Confirm Password" type="password" ></v-text-field>
                
                </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn @click="changePassword" color="primary">Submit</v-btn>
                </v-card-actions>
            </v-card>
            </v-col>
</template>
<script>
export default {
    data(){
        return{
            form:{
                old_password:null,
                new_password:null,
                confirm_password:null
            },
            default:{
                old_password:null,
                new_password:null,
                confirm_password:null
            }
        }
    },
    methods: {
        changePassword(){
            axios.post('/api/change-password',this.form)
            .then(res=>{
                this.form=Object.assign({},this.default)
                Toast.fire({
                    icon: 'success',
                    title: 'Password Changed Successfully'
                })
            })
            .catch(error=>{
                
            })
        }
    },  
}
</script>