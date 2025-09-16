<script>
export default {
    props: [
        'modelValue',
        'type',
        'placeholder',
        'label',
        'width'
    ],
  
}
</script>

<template>
  <div class="input-container">
    <label class="label-input">{{ label }}</label>
    <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      class="base-input"
      :style="{ width }"
    />
  </div>
</template>

<style scoped>
.input-container{
  padding-top: 10px;
  /* padding-bottom: 5px; */

}

.base-input {
  padding: 0.5rem;
  border-radius: 8px;
  font-size: 1rem;
  box-shadow: inset 1px 0px 4px 1px rgba(0, 0, 0, 0.25);
  border: 3px solid transparent;
  transition: border-color 0.3s;
  width: 100%;
}

.base-input:focus {
    border-color: var(--color-border);
    outline: none;
    box-shadow:none;
}

.label-input{
    font-weight: bold;
    font-size: 1rem;
    padding-left: 0.2rem;
    /* margin-top: 2rem; */
}
</style>

