<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
         <!-- <v-list-group
          
          :key="item.title"
          > -->
<!--         
        <template  v-slot:activator> -->
          <!-- <div v-show="item.show">
            <v-list-item-action> -->
              <!-- <v-icon >mdi-account-edit-outline</v-icon> -->
            <!-- </v-list-item-action>
            <v-list-item-content >
              <v-list-item-title :to="item.to"  v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </div> -->
        <!-- </template> -->

        <!-- <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
        >
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
      <!-- </v-list-group> -->
        <v-list-item v-for="item in items" :key="item.title" v-show="item.show" link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <router-link :to="item.to">
              <v-list-item-title  v-text="item.title"></v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
        <!-- <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height fill-width"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <router-view></router-view>
        </v-row>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>
<script>
  import car from './crud/Car'
  export default {
    props: {
      source: String,
    }
    ,data () {
      return {
        items:[
                {title: 'Profile',to:'/profile/user',show: true},
                {title: 'Change Password',to:'/profile/credentials',show: true},
                {title: 'My Cars',to:'/profile/my-cars',show: (User.partner() )},
                {title: 'Trip List',to:'/project/trip-list',show: User.partner()},
                {title: 'My Trips',to:'/profile/my-trips',show:  User.user()},
                {title: 'My Products',to:'/profile/products-list',show: User.admin() },
                {title: 'Scanner',to:'/profile/scanner',show: User.partner() },
                {title: 'Drivers List',to:'/profile/drivers',show: User.admin()},
        ],
        items1: [
          {
            action: 'local_activity',
            title: 'Attractions',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'school',
            title: 'Education',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'directions_run',
            title: 'Family',
            items: [
              { title: 'List Item' },
            ],
          }
        ],
        drawer: null,
        dialog: false,
        desserts: [],
        editedIndex: -1,
        editedItem: {
          name: '',
          calories: 0,
          fat: 0,
          carbs: 0,
          protein: 0,
        },
        defaultItem: {
          name: '',
          calories: 0,
          fat: 0,
          carbs: 0,
          protein: 0,
        },
      }
    },
    components:{
      car
    },
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },
    methods: {
      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
    created () { 
      // this.$emit('update:layout','v-app')
      // this.$vuetify.theme.white = true
    },
  }
</script>