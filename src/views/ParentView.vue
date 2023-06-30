<template>
    <center>
       <div>
            
            <CountView :countEnfant="countParent" @envoyeDepuisEnfant="diminuer"></CountView>
            <!-- <p>{{count}}</p> -->
        <button class="btn btn-add" @click="augmenter">+</button>
        </div> 
    </center>
    
</template>

<script>
import CountView from "../components/CountView.vue"
export default {

  name: 'ParentView',
  components:{
    CountView,
  },
  data() {
    return {
        countParent:5,
    };
  },
  methods: {
    diminuer() {
      this.countParent-=1
    },
    augmenter() {
      this.countParent+=1
    },
  },
};
</script>

<style lang="css" scoped>
    div{
        width:100px;
        margin-top:150px;
        display:flex;
        flex-direction:row;
    }
    p{
        margin:0 20px 0 20px;
    }
</style>
