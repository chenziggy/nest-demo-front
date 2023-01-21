<template>
  <div>
    <a-table :dataSource="dataSource" :columns="columns"></a-table>
  </div>
</template>

<script setup lang="ts">
import { Table } from "ant-design-vue";
import { ref } from "vue";
import type { ColumnsType } from "ant-design-vue/es/table/interface";
import { getAnimalList } from "@/api/animal";
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
  const res = await getAnimalList();
  if (res && res.data) {
    dataSource.value = res.data;
  }
}
getAnimals();
</script>

<style scoped></style>
