<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button', // 'submit', 'reset' aussi possibles
    },
    variant: {
      type: String,
      default: 'primary', // 'primary' ou 'secondary'
    },
    width:String
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    },
  },
}
</script>

<template>
  <button
    :type="type"
    :class="['base-button', variant]"
    :style="{ width }"
    >
    <!-- @click="handleClick" -->
    <slot />
  </button>
</template>


<style scoped>
.base-button {
  padding: 0.5rem 1.2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
  height: 36px;
  align-content: center;
  margin-right: 12px;
}

.primary {
  background-color: rgba(10, 172, 166);
  color: white;
}

.primary:hover {
  background-color: #086476;
}

.secondary {
  background-color: transparent;
  border: 2px solid #ef233c;;
  color: #ef233c;;
}

.secondary:hover {
  background-color: #cfcfcf;
}

.base-button:active {
  transform: scale(0.97);
}
</style>
