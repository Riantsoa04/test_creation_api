<script>
  import BaseTable from "@/components/atomes/BaseTable.vue";
  import Fiche from "@/components/molecules/Fiche.vue";
  import { getAllEntity,getEntitysById,addEntity,deleteEntity,updateEntity  } from "@/services/entityService.js";
  import BaseButton from '@/components/atomes/BaseButton.vue';
  import BaseInput from "@/components/atomes/BaseInput.vue";
  
  export default {
    name: "EntityPage",
    components: { 
      BaseTable,
      Fiche,
      BaseButton,
      BaseInput
    },
    data() {
      return {
        columns: [
          { key: "idEntity", label: "ID" },
          { key: "name", label: "Nom de l'entite" },
          { key: "actions", label: "Actions" }
        ],
        ent: [],
        select: null
      };
    },
    async created() {
      try {
        this.ent = await getAllEntity();
      } catch (error) {
        console.error("Erreur lors de la récupération des entite :", error);
      }
    },
    methods: {
      async edit(ent) {
        const data = await getEntitysById(ent.idEntity)
        this.select = { ...data };
      },
      async del(ent) {
        const data = await deleteEntity(ent.idEntity)
        console.log("entite suprime");
        this.ent = await getAllEntity();
      },
      async handleSubmit() {
        const payload = {
          name: this.name
        };
        const newEntite = await addEntity(payload);
        console.log("Entite ajoute :", newEntite);

        this.name = "";

        this.ent = await getAllEntity();
      },
      async update(updatedData) {
        try {
          await updateEntity(updatedData.idEntity, updatedData);
          console.log("Entite mise à jour :", updatedData);

          this.select = null;

          this.ent = await getAllEntity();
        } catch (error) {
          console.error("Erreur lors de l'update :", error);
        }
      }
    }
  };
</script>
  
<template>
    <div class="div-formulaire">
    <h2>Formulaire d'insertion</h2>
    <form @submit.prevent="handleSubmit" class="formulaire">
      <BaseInput 
        v-model="name"
        type="text"
        placeholder="Nom entite"
        label="Entite"
      />
      <div class="form-buttons">
        <BaseButton type="submit" variant="primary">Ajouter</BaseButton>
        <BaseButton type="button" variant="secondary" @click="handleCancel">Annuler</BaseButton>
      </div>
    </form>
  </div>

    <div>
      <BaseTable
        entityName="Entite" 
        :columns="columns" 
        :data="ent"
        @edit="edit"
        @delete="del"
      />
    </div>

    <div v-if="select" class="modal-overlay">
      <div class="modal-content">
        <Fiche
          entityName="Entite"
          :rowData="select"
          @update-row="update"
        />
        <div class="modal-actions">
          <BaseButton variant="secondary" @click="select = null">Fermer</BaseButton>
        </div>
      </div>
    </div>

</template>
  
<style scoped>
.formulaire {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-end;
}

.div-formulaire{
  background-color: white;
  padding: 10px 10px 10px 10px;
  margin-bottom: 20px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  border-radius: 8px;
  padding-left: 20px;
  padding-right: 20px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 400px;
  max-width: 600px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  animation: fadeIn 0.3s ease-in-out;
}

.modal-actions {
  margin-top: 15px;
  text-align: right;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
</style>