<template>
  <div>
    <AnimalList ref="animalListRef"></AnimalList>
    <AnimalCreate @created="refreshList"></AnimalCreate>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AnimalList from "./components/AnimalList.vue";
import AnimalCreate from "./components/AnimalCreate.vue";

const animalListRef = ref();

function refreshList() {
  console.log(animalListRef.value);
  animalListRef.value && animalListRef.value.getAnimals();
}
</script>

<style scoped></style>
