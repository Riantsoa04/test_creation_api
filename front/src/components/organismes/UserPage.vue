<script>
  import BaseTable from "@/components/atomes/BaseTable.vue";
  import Fiche from "@/components/molecules/Fiche.vue";
  import BaseButton from '@/components/atomes/BaseButton.vue';
  import BaseInput from "@/components/atomes/BaseInput.vue";
  import { getAllUsers,getUsersById,addUser,deleteUser,updateUser } from "@/services/userService.js";

  export default {
    name: "UserPage",
    components: { 
      BaseTable,
      Fiche,
      BaseButton,
      BaseInput
    },
    data() {
      return {
        columns: [
          { key: "idUser", label: "ID" },
          { key: "userName", label: "Nom" },
          { key: "email", label: "Email" },
          { key: "actions", label: "Actions" }
        ],
        users: [],
        select: null
      };
    },
    async created() {
      try {
        this.users = await getAllUsers();
      } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
      }
    },
    methods: {
      async edit(user) {
        const data = await getUsersById(user.idUser);
        this.select = { ...data };
      },
      async del(user) {
        const data = await deleteUser(user.idUser)
        console.log("entite suprime");
        this.users = await getAllUsers();
      },
      async handleSubmit() {
        const payload = {
          name: this.userName,
          email: this.email,
          password: this.pwd
        };
        const newUser = await addUser(payload);
        console.log("Utilisateur ajouté :", newUser);

        this.userName = "";
        this.email = "";
        this.pwd = "";

      this.users = await getAllUsers();
      },
      async update(updatedData) {
        try {
          const payload = {
            name: updatedData.userName,
            email: updatedData.email,
            password: updatedData.pwd
          };
          await updateUser(updatedData.idUser, payload);
          console.log("User mise à jour :", updatedData);

          this.select = null;

          this.users = await getAllUsers();
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
        v-model="userName"
        type="text"
        placeholder="Nom user"
        label="User"
      />
      <BaseInput 
        v-model="email"
        type="text"
        placeholder="ex:user@gmail.com"
        label="email"
      />
      <BaseInput 
        v-model="pwd"
        type="text"
        placeholder="Mot de passe"
        label="Mot de passe"
      />
      <div class="form-buttons">
        <BaseButton type="submit" variant="primary">Ajouter</BaseButton>
        <BaseButton type="button" variant="secondary" @click="handleCancel">Annuler</BaseButton>
      </div>
    </form>
  </div>
  
  <div>
    <BaseTable 
      entityName="User"
      :columns="columns" 
      :data="users" 
      @edit="edit"
      @delete="del"
    />
  </div>

  <div v-if="select" class="modal-overlay">
      <div class="modal-content">
        <Fiche
          entityName="User"
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