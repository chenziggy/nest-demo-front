<template>
  <div class="home">
    <AnimalPage></AnimalPage>
    <BtnDemo></BtnDemo>
  </div>
</template>

<script setup lang="ts">
import AnimalPage from "./animal/AnimalPage.vue";
import BtnDemo from '@/pages/hook/btnDemo.vue'
</script>

<style scoped>
.home {
  color: #fff;
}
</style>
