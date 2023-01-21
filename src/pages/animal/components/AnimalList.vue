<template>
  <div>
    <a-table :dataSource="dataSource" :columns="columns"></a-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ColumnsType } from "ant-design-vue/es/table/interface";
import { queryAnimalList } from "@/api/animal";
import { AnimalEntity } from "@/types/animal";
const dataSource = ref<AnimalEntity[]>([]);
const columns = ref<ColumnsType>([
  {
    title: "name",
    dataIndex: "name",
  },
  {
    title: "type",
    dataIndex: "type",
  },
  {
    title: "color",
    dataIndex: "color",
  },
]);

async function getAnimals() {
  const res = await queryAnimalList();
  if (res && res.data) {
    dataSource.value = res.data;
  }
}
getAnimals();

defineExpose({
  getAnimals,
});
</script>

<style scoped></style>
