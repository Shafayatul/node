<template>
    <component  :is="layout" >
        <router-view :layout.sync="layout"></router-view>
        
        <vue-progress-bar></vue-progress-bar>
    </component>
</template> 
//df gsdfg sdf
// Featre 1 9th row
<script>
// import car from './components/dashboard/crud/Car'
  export default {
    data(){
      return{
        layout: 'div'

      }
    }
  }
</script>
<style lang="scss">

/* ... */
</style>