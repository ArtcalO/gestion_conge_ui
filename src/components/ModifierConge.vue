<template>
    <OverlayView title="Modifier Congé">
      <div class="form-group">
          <label>Nom</label>
          <input type="text" v-model="employe.nom" autofocus required />
      </div>
      <div class="form-group">
          <label>Prenom</label>
          <input type="text" v-model="employe.prenom" autofocus required />
      </div>
      <div class="form-group">
          <label>Age</label>
          <input type="text" v-model="employe.age" autofocus required />
      </div>
      <div class="form-group">
          <label>Genre</label>
          <input type="text" v-model="employe.genre" autofocus required />
      </div>
      <div>
        <input
          class="btn btn-primary"
          @click="enregistrer"
          type="submit"
          :value="btn"
        />
        <button class="btn btn-danger">Close</button>
      </div>
    </OverlayView>
</template>

<script>
import OverlayView from "./OverlayView.vue"
export default {
  props:["employeProps"],
  name: 'ModifierConge',
  components:{
    OverlayView,
  },
  data() {
    return {
      employe:this.employeProps
    };
  },
};
</script>

<style lang="css" scoped>
</style>
