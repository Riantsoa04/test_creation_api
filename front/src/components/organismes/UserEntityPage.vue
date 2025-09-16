<script>
  import BaseTable from "@/components/atomes/BaseTable.vue";
  import Fiche from "@/components/molecules/Fiche.vue";
  import { getAll,getUSerEntityById,addUserEntity,deleteUserEntity,editUserEntity  } from "@/services/userEntityService.js";
  import BaseButton from '@/components/atomes/BaseButton.vue';
  import BaseInput from "@/components/atomes/BaseInput.vue";
  import BaseSelect from "@/components/atomes/BaseSelect.vue";
  import { getAllUsers} from "@/services/userService.js";
  import { getAllEntity  } from "@/services/entityService.js";


  export default {
    name: "EntityPage",
    components: { 
      BaseTable,
      Fiche,
      BaseButton,
      BaseInput,
      BaseSelect
    },
    data() {
      return {
        columns: [
          { key: "idUserEntity", label: "ID" },
          { key: "userName", label: "Nom de l'utilisateur" },
          { key: "email", label: "email" },
          { key: "entityName", label: "Entite" },
          { key: "actions", label: "Actions" }
        ],
        ent: [],
        select: null,
        selectedUser: "",
        selectedEntite: "",
        usersOptions: [],
        entiteOptions: []
      };
    },
    async created() {
      try {
        this.ent = await getAll();
        const users = await getAllUsers();
        this.usersOptions = users.map(e => ({
          label: e.userName,
          value: e.idUser
        }));
        const entites = await getAllEntity();
        this.entiteOptions = entites.map(e => ({
          label: e.name,
          value: e.idEntity
        }));
      } catch (error) {
        console.error("Erreur lors de la récupération des entite :", error);
      }
    },
    methods: {
      async edit(ent) {
        const data = await getUSerEntityById(ent.idUserEntity)
        this.select = { ...data };
      },
      async del(ent) {
        const data = await deleteUserEntity(ent.idUserEntity)
        console.log("user entite suprime");
        this.ent = await getAll();
      },
      async handleSubmit() {
        const payload = {
          idEntity: this.selectedEntite,
          idUser: this.selectedUser
        };
        console.log(payload)
        const newEntite = await addUserEntity(payload);
        console.log("Entite ajoute :", newEntite);

        this.name = "";

        this.ent = await getAll();
      },
      async update(updatedData) {
        try {
          const payload = {
            idEntity: updatedData.idEntity,
            idUser: updatedData.idUser
          };
          await editUserEntity(updatedData.idUserEntity, payload);
          console.log("UserEntity mise à jour :", updatedData);

          this.select = null;

          this.ent = await getAll();
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
      <BaseSelect
        label="utilisateur"
        v-model="selectedUser"
        :options="usersOptions"
      />
      <BaseSelect
        label="entite"
        v-model="selectedEntite"
        :options="entiteOptions"
      />
      <div class="form-buttons">
        <BaseButton type="submit" variant="primary">Ajouter</BaseButton>
        <BaseButton type="button" variant="secondary" @click="handleCancel">Annuler</BaseButton>
      </div>
    </form>
  </div>

    <div>
      <BaseTable 
        entityName="User - Entite"
        :columns="columns" 
        :data="ent"
        @edit="edit"
        @delete="del"
      />
    </div>

    <div v-if="select" class="modal-overlay">
      <div class="modal-content">
        <Fiche
          entityName="UserEntity"
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
  background-color: white;
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