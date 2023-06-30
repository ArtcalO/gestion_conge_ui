<template>
    <OverlayView title="Ajouter Congé">
      <div class="form-group">
          <label>Id</label>
          <input type="text" v-model="id" autofocus required />
      </div>
      <div class="form-group">
          <label>Nom</label>
          <input type="text" v-model="nom" autofocus required />
      </div>
      <div class="form-group">
          <label>Prenom</label>
          <input type="text" v-model="prenom" autofocus required />
      </div>
      <div class="form-group">
          <label>Age</label>
          <input type="text" v-model="age" autofocus required />
      </div>
      <div class="form-group">
          <label>Genre</label>
          <input type="text" v-model="genre" autofocus required />
      </div>
      <div>
        <input
          class="btn btn-primary"
          @click="enregistrer"
          type="submit"
          value="Ajouter"
        />
      </div>
    </OverlayView>
</template>

<script>
import OverlayView from "./OverlayView.vue"
export default {
  name: 'AddEmploye',
  components:{
    OverlayView,
  },
  data() {
    return {
      id:"",
      nom:"",
      prenom:"",
      age:"",
      genre:"",
      conge_debut:"",
      conge_fin:"",
    };
  },
  methods:{
    sendToServer1(data){
      let req = new XMLHttpRequest();

      req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
          console.log(req.responseText);
        }
      };
        
      req.open("POST", "https://api.jsonbin.io/v3/b", true);
      req.setRequestHeader("Content-Type", "application/json");
      req.setRequestHeader("X-Master-Key", "$2b$10$OptoBQrC/firbspFf9JhYew59nT4SDea3AkMOF/.w4JeipmdEAZPS");
      req.send(data);
    },
    enregistrer(){
      let data = {
        id:this.id,
        nom:this.nom,
        prenom:this.prenom,
        age:this.age,
        genre:this.genre,
        conge_debut:this.conge_debut,
        conge_fin:this.conge_fin,
      }
      this.sendToServer1(data)
      this.$emit("addEmployeEmited", data)
    }
  }
};
</script>

<style lang="css" scoped>
</style>
