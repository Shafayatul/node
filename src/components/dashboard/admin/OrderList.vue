<template>
  <v-data-table
    :headers="headers"
    :items="orders"
    :single-expand="singleExpand"
    :expanded.sync="expanded"
    item-key="name"
    show-expand
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Expandable Table</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-switch v-model="singleExpand" label="Single expand" class="mt-2"></v-switch>
      </v-toolbar>
    </template>
    <template v-slot:expanded-item="{ headers }">
      <td :colspan="headers.length">Peek-a-boo!</td>
    </template>
  </v-data-table>
</template>
<script>
import {mapGetters,mapState} from 'vuex'
export default {
    data(){
        return{
            orders:[],
            dialog: false,
            headers: [
                { text: 'Serial no', value: 'index', sortable: false },
                { text: 'Name', value: 'name', sortable: false },
                {
                    text: 'Email',value: 'email',sortable: false
                },
                {
                    text: 'Phone No', align: 'mobile',sortable: false,value: 'title'
                },
                { text: 'Payment Method', value: 'identity_type', sortable: false },
                { text: 'Identity Number', value: 'identity_number', sortable: false },
            ],
            headers2:[
                {text:'Product Name',value:'name',sortable:false},
                {text:'Price',value:'price',sortable:false},
                {text:'Quantity',value:'quantity',sortable:false},
                {text:'Total',value:'total',sortable:false},
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

    },
    computed: {
    },
    filters:{
    },
    methods: {
        getOrderList(){
            axios.get('/api/get-order-history')
            .then(res => {
                let flag = []
                this.orders=res.data.orders
                flag = this.orders
                this.users= flag.map(e=>e.user)
                consol.log()
            }).catch((err) => {
                
            });
        }
    }
}
</script>