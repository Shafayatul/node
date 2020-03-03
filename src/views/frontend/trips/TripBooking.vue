<template>
    
<section class="section_padding">
     <div class="card shadow mb-5 bg-white rounded">
    <!--Card-Body-->
    <div class="card-body">
        <!--Card-Title-->
        <p class="card-title text-left shadow mb-5 rounded">Passenger Information</p> 
        <form> 
        <div v-for="(item,index) in this.$root.$data.number" :key="index">      
            <p class="text-center passenger p-2"><strong>Passenger {{index +1}}</strong></p>
            <!--First Row-->
            <div class="row">
                <div class="col-sm-4 form_colum">
                    <select v-model="form[index].title" class="form-control nc_select mb-4" id="select">
                           <option v-for="item in title" :key="item.id" :value="item.id" >{{item.name}}</option>    
                    </select>
                </div>
                <div class="col-sm-8">
                    <input v-model="form[index].name" class="form-control  mb-4" type="text" name="" placeholder="Full Name">
                </div>
            </div>
            <!--Second Row-->         
            <div class="row">
                <div class="col-sm-4 form_colum">
                    <select v-model="form[index].identity_type" class="form-control nc_select mb-4" id="select">
                        <option v-for="item in identity" :key="item.id" :value="item.id" >{{item.name}}</option>                  
                    </select>
                </div>
                <div class="col-sm-8">
                    <input v-model="form[index].identity_number" class="form-control  mb-4" type="text" name="" placeholder="ID Number">
                </div>
            </div>
            <!--Third Row-->
        
            <div class="row mt-4">
                <div class="col-sm-6">
                    <input v-model="form[index].mobile" class="form-control  mb-4" type="text" name="" placeholder="Mobile">
                </div>
                <div class="col-sm-6">
                    <input v-model="form[index].email" type="email" class="form-control  mb-4"  name="" placeholder="Email">
                </div>
            </div>
        </div>
        
          <!-- <div class="form-group">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1">
                  <label class="form-check-label" for="inlineRadio1">
                    Agree to terms and conditions
                  </label>
                  <div class="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>

         </div> -->
         <div class="form-group">
             <div class="col-sm-4 offset-4" >
               <a  @click="submit" class="btn btn-book text-center">Book Now</a>
             </div>
         </div>
         </form>
    </div>
</div>

</section>

</template>
<script>
export default {
    data(){
        return{
            form:[],
            identity:[{id:0,name: 'Id Type'},{id:1,name: 'Passport'},{id:2,name:'National Id'}],
            title:[{id:0,name: 'Title'},{id:1,name: 'Mr'},{id:2,name:'Mrs'},{id:3,name:'Unmarried'}]
        }
    },
    methods:{
        createForm(){
            console.log(this.$root.$data.number)
            for(let i=0;i<this.$root.$data.number;i++){
                this.form.push({
                    trip_id:this.$route.params.id,
                    title:0,
                    name: null,
                    identity_type:0,
                    identity_number:null,
                    mobile:null,
                    email:null
                })
            }
        },
        submit(){
            axios.get('/api/passengers',this.form)
            .then(res=>{
                this.router.push({
                    name:'tripDetails',
                    params:{
                        id:this.$route.params.id,
                        success: true
                    }
                })
            })
            .catch(error=>{
                console.log(error)
            })
        }
    },
    created(){
        this.createForm()

    },
}
</script>