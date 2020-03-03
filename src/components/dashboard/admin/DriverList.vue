<template>
    <v-col 
    cols="16"
    sm="12"
    md="10">
    <v-data-table
        :headers="headers"
        :items="drivers"
        sort-by="id"
        class="elevation-1"
    >
        <template v-slot:top>
            <v-toolbar flat >
                <v-toolbar-title>Partners</v-toolbar-title>
                <v-divider
                class="mx-4"
                inset
                vertical
                ></v-divider>
                <v-spacer></v-spacer>
            </v-toolbar>
        </template>
        <template v-slot:item.status="{ item }">
            {{item.status| status}}
        </template>
        <template v-slot:item.identity_type="{ item }">
            {{item.identity_type| identity}}
        </template>
        <template v-slot:item.title="{ item }">
            {{item.title| title}}
        </template>
        <template v-slot:item.action="{ item }">
            
            <v-icon
                v-if="item.status===1"
                small
                @click="inApprove(item.id)"
            >
                mdi-account-cancel
            </v-icon>
            
            <v-icon
                v-if="item.status===0"
                small
                @click="approve(item.id)"
            >
               mdi-account-check
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
            dialog: false,
            headers: [
                { text: 'Name', value: 'name', sortable: false },
                { text: 'Email', value: 'email', sortable: false },
                {
                    text: 'Language',value: 'language',sortable: false
                },
                {
                    text: 'Title', align: 'left',sortable: false,value: 'title'
                },
                { text: 'Identity Type', value: 'identity_type', sortable: false },
                { text: 'Identity Number', value: 'identity_number', sortable: false },
                { text: 'Mobile', value: 'mobile', sortable: false },
                { text: 'License', value: 'partner_metas' , sortable: false },
                { text: 'Status', value: 'status' , sortable: false},
                ,
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
            }
            // main_url: process.env.MIX_SENTRY_DSN_PUBLIC,
        }
    },
    created(){
        this.$store.dispatch('getDriverList')
    },
    computed: {
        ...mapGetters({
            drivers:'retDriverList'

        })
    },
    filters:{
        status(status){
            if(status==1){
                return 'Active'
            }else{
                return 'Deactive'
            }
        },
        title(status){
            if(status==1){
                return 'Mr'
            }
            if(status==2){
                return 'Mrs'
            }
            if(status==3){
                return 'Unmarried'
            }
        },
        identity(status){
            if(status==1){
                return 'Passport'
            }
            if(status==2){
                return 'National Id'
            }
        }
    },
    methods: {

        inApprove (item) {
            confirm('Are you sure you want to dismiss ?') &&  this.$store.dispatch('inApprove',item)
        },

        approve (item) {
            confirm('Are you sure you want to approve this driver ?') &&  this.$store.dispatch('approve',item)
        }
    }
}
</script>