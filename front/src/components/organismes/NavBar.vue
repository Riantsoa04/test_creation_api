<script>
import BaseButton from '@/components/atomes/BaseButton.vue'

export default {
  name: 'NavBar',
  components: {
    BaseButton
  },
  data() {
    return {
      search: '',
      links: [
        { text: 'Entity', to: '/' },
        { text: 'User', to: '/user' },
        { text: 'UserEntity', to: '/userEntity' },
      ],
    }
  }
}
</script>


<template>
    <nav class="navbar">
      <div class="navbar-left">
        <h2>Test création API</h2>
      </div>
  
      <div class="navbar-center">
        <ul class="nav-links">
          <li v-for="link in links" :key="link.text">
            <RouterLink :to="link.to">{{ link.text }}</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
</template>
  

  
  <style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  border-radius: 8px;
  z-index: 1000;
  height: 74px;
  position: fixed;
  left: 128px;
  right: 128px;
  top: 0;
}

.navbar-left,
.navbar-center,
.navbar-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Lien nav */
.nav-links {
  display: flex;
  gap: 8rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links a {
  text-decoration: none;
  color: var(--color-secondary);
  font-weight: bold;
}

.nav-links a:hover {
  color: var(--color-primary);
  text-decoration: underline;
}

  </style>
  