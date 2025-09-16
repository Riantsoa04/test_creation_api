<script>
import NavBar from '@/components/organismes/NavBar.vue';

export default {
  components: {
    NavBar
  },
}

</script>

<template>
  <main>
    <NavBar/>
    <router-view></router-view>
  </main>
</template>

<style scoped>

main{
  padding-top: 100px;
  margin-left: 128px;
}

</style>
