<script>
  import BaseButton from '@/components/atomes/BaseButton.vue';
  import BaseInput from "@/components/atomes/BaseInput.vue";

export default {
  name: "BaseTable",
  components: {
      BaseButton,
      BaseInput
    },
  props: {
    columns: {
      type: Array,
      required: true
    },
    entityName: {
        type: String,
        required: true
      },
    data: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  emits: ["edit", "delete"]
};
</script>

<template>
  <div class="div-table">
    <h2>Liste des {{ entityName }}</h2>
    <table class="base-table">
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key">{{ col.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in data" :key="rowIndex">
          <td v-for="col in columns" :key="col.key">
            <template v-if="col.key === 'actions'">
              <BaseButton type="submit" variant="primary" @click="$emit('edit', row)">Modifier</BaseButton>
              <BaseButton type="button" variant="secondary" @click="$emit('delete', row)">Supprimer</BaseButton>
            </template>
            <template v-else>
              {{ row[col.key] }}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.div-table{
  background-color: white;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  border-radius: 8px;
  padding-left: 20px;
  padding-right: 20px;
}

.base-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  font-family: Arial, sans-serif;
  border-radius: 10px;
  overflow: hidden;  
}

.base-table th {
  background-color: #3498db;
  color: white;
  padding: 10px;
  text-align: left;
}

.base-table td {
  padding: 8px;
  border: 1px solid #ddd;
}

.base-table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

.base-table tbody tr:hover {
  background-color: #e0e0e0;
}

.btn-edit, .btn-delete {
  padding: 5px 10px;
  margin-right: 5px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 0.9rem;
}
</style>
