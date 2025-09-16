<script>
export default {
  name: 'BaseSelect',
  props: {
    modelValue: {
      type: [String, Number, null],
      required: true,
    },
    label:{
        type: String,
    },
    options: {
      type: Array,
      required: true,
    },
  },
}
</script>

<template>
    <label class="label-input">{{ label }} : </label>
    <select
      class="base-select"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
    <option disabled value="">--- Choisir ---</option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </template>
  
 
  
  <style scoped>
  .base-select {
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 1rem;
    box-shadow: inset 1px 0px 4px 1px rgba(0, 0, 0, 0.25);
    border: 3px solid transparent;
    transition: border-color 0.3s;
  }
  
  .base-select:focus {
    border-color: var(--color-border);
    outline: none;
    box-shadow:none;
  }

  .label-input{
    font-weight: bold;
    font-size: 1rem;
  }
  </style>
  