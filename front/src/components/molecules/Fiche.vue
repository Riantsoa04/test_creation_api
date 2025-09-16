<script>
import BaseButton from '@/components/atomes/BaseButton.vue';
import BaseInput from '@/components/atomes/BaseInput.vue';


  export default {
    name: "Fiche",
    components:{
      BaseButton,
      BaseInput
    },
    props: {
      entityName: {
        type: String,
        required: true
      },
      rowData: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        formData: { ...this.rowData }
      };
    },
    methods: {
      save() {
          this.$emit("update-row", this.formData);
      }
    },
    watch: {
     rowData: {
        handler(newVal) {
        this.formData = { ...newVal };
        },
        deep: true
      }
    }
  };
</script>


<template>
    <div class="form-container">
      <h3>Modifier {{ entityName }}</h3>
      <form @submit.prevent="submitForm">
        <div v-for="(value, key) in formData" :key="key" class="form-group">
          <label :for="key">{{ key }}</label>
          <BaseInput
            v-model="formData[key]"
            :id="key"
            type="text"
          />
        </div>
        <BaseButton type="submit" variant="primary" @click="save">Enregistrer</BaseButton>
      </form>
    </div>
  </template>
  
  
  <style>
  .form-container {
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    max-width: 400px;
    background: #fafafa;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    font-weight: bold;
    display: block;
  }
  
  
  .btn {
    background: #42b983;
    color: white;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  