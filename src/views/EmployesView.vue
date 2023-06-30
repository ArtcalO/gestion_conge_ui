<template>
    <section class="wrapper">
        <div class="separator">
            <!-- <div></div> -->
            <strong>Liste des utilisateur</strong>

            <div class="interaction">
                <div class="search-filter">
                    <div class="search-items">
                        <input
                            type="search"
                            placeholder="Chercher..."
                            v-model="keyword"
                            @keypress.enter="search"
                        />
                    </div>
                </div>
                <div>
                    <button class="btn btn-add" @click="modal_shown=true" >
                        <i class="mdi mdi-plus"></i>
                        Ajouter Employé
                    </button>
                </div>
            </div>
        </div>

        <div class="table-container">
            <div class="table-wrap-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Age</th>
                            <th>Genre</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="employe in listeEmployes"
                            :key="employe.id"
                            :class="{en_conge:enConge(employe)}"

                            >
                            <td>{{employe.nom}}</td>
                            <td>{{employe.prenom}}</td>
                            <td>{{employe.age}}</td>
                            <td>{{employe.genre}}</td>
                            <td>{{enConge(employe)?'En congé':'Pas en congé'}}</td>
                            <td class="act">
                                <button
                                    v-if="checkConge(employe)"
                                    @click="addCongeEmploye(employe.id)"
                                    class="btn-sm btn-primary"
                                >
                                    <i class="mdi mdi-pencil"></i>
                                    Ajouter Congé
                                </button>
                                <button
                                    @click="modifierEmploye(employe)"
                                    class="btn-sm btn-primary"
                                >
                                    <i class="mdi mdi-pencil"></i>
                                    Modifier
                                </button>
                                <button
                                    class="btn-sm btn-danger"
                                >
                                    <i class="mdi mdi-delete"></i>
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <AddEmploye v-if="modal_shown" @addEmployeEmited="handlerAddEmploye"  @close="modal_shown=false" />
        <AddConge
            v-if="modal_add_conge"
            @close="modal_add_conge=false"
            :idEmployeProps="idEmployeObj"
            @addCongeEmited="handlerAddConge"
        />
        <ModifierConge v-if="modal_modifier_conge" :employeProps="employeObj" @close="modal_modifier_conge=false" />
    </section>
</template>
<script>
import AddEmploye from "../components/AddEmploye.vue"
import AddConge from "../components/AddConge.vue"
import ModifierConge from "../components/ModifierConge.vue"
export default {
    data(){
        return{
            modal_shown:false,
            modal_add_conge:false,
            modal_modifier_conge:false,
            employeObj:{},
            idEmployeObj:{},
            listeEmployes:[
                {
                    id:1,
                    nom:"Artcal'O",
                    prenom:"Lone Wolf",
                    age:45,
                    genre:"F",
                    conge_debut:null,
                    conge_fin:null
                },
                {
                    id:2,
                    nom:"TLW",
                    prenom:"Wolverine",
                    age:45,
                    genre:"F",
                    conge_debut:null,
                    conge_fin:null
                },
            ]
        }
    },
    components:{
        AddEmploye,
        AddConge,
        ModifierConge,
    },
    methods: {
      modifierEmploye(o) {
        this.employeObj=o
        this.modal_modifier_conge=true
      },
      handlerAddEmploye(e){
        this.listeEmployes.push(e)
        this.modal_shown=false

      },
      addCongeEmploye(employeId){
        this.modal_add_conge=true
        this.idEmployeObj=employeId
      },
      handlerAddConge(data){
        //recuperer l'indice de l'objet dans la liste d'objet
        console.log(data.idEmploye)
        let idx = this.listeEmployes.findIndex(x=>x.id==data.idEmploye)
        console.log(idx)
        this.listeEmployes[idx].conge_debut=data.conge_debut
        this.listeEmployes[idx].conge_fin=data.conge_fin

        console.log(this.listeEmployes)

      },
      checkConge(employe){
        return !employe.conge_debut && !employe.conge_fin
      },
      enConge(employe){
        let today = new Date()
        return today >= new Date(employe.conge_debut) && today < new Date(employe.conge_fin)
      }
    },
}
</script>

<style scoped>
.en_conge{
    background-color:red;
}
</style>
