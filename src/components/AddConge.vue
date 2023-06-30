<template>
    <OverlayView title="Ajouter Congé">
      <div class="form-group">
          <label>Date debut</label>
          <input type="date" v-model="conge_debut" autofocus required />
      </div>
      <div class="form-group">
          <label>Date fin</label>
          <input type="date" v-model="conge_fin" autofocus required />
      </div>
      <div>
        <input
          class="btn btn-primary"
          @click="ajouterConge"
          type="submit"
          value="Ajouter Congé"
        />
      </div>
    </OverlayView>
</template>

<script>
import OverlayView from "./OverlayView.vue"
export default {
  name: 'AddCongé',
  components:{
    OverlayView,
  },
  props:["idEmployeProps"],
  data() {
    return {
      conge_debut:"",
      conge_fin:"",
    };
  },
  methods:{
/*    sendToServer1(data){
      console.log(data)
      let req = new XMLHttpRequest();

      req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
          console.log(req.responseText);
        }
      };
        
      req.open("POST", "https://api.jsonbin.io/v3/b", true);
      req.setRequestHeader("Content-Type", "application/json");
      req.setRequestHeader("X-Master-Key", "$2b$10$OptoBQrC/firbspFf9JhYew59nT4SDea3AkMOF/.w4JeipmdEAZPS");
      let dataParsed = JSON.parse(data)
      console.log(dataParsed)
      req.send(dataParsed);
    },*/
    ajouterConge(){
      let data = {
        "idEmploye":this.idEmployeProps,
        "conge_debut":this.conge_debut,
        "conge_fin":this.conge_fin
      }
      /*this.sendToServer1(data)*/
      this.$emit("addCongeEmited", data)
    }
  }
};
</script>

<style lang="css" scoped>
</style>
