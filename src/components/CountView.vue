<template>
    <button class="btn btn-add" @click="diminuerDepuisEnfant">-</button>
    <p>{{countEnfant}}</p>
</template>

<script>
export default {

  name: 'CountVie',
  props:["countEnfant"],
  data() {
    return {
    };
  },
  methods:{
    diminuerDepuisEnfant(){
        this.$emit("envoyeDepuisEnfant")
    }
  },
};
</script>

<style lang="css" scoped>
p{
        margin:0 20px 0 20px;
    }
</style>
