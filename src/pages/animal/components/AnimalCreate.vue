<template>
  <div>
    <a-form
      :model="formState"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      :rules="formRules"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item label="Name" name="name">
        <a-input v-model:value="formState.name"></a-input>
      </a-form-item>
      <a-form-item label="Type" name="type">
        <a-select v-model:value="formState.type">
          <template :key="item" v-for="item in animalTypes">
            <a-select-option :value="item"></a-select-option>
          </template>
        </a-select>
      </a-form-item>
      <a-form-item label="Color" name="color">
        <a-input v-model:value="formState.color"></a-input>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 16, offset: 8 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { type AnimalDto } from "@/types/animal";
import { createAnimal } from "@/api/animal";

const formState = reactive({
  name: "",
  color: "",
  type: "",
});

const formRules = {
  name: [
    {
      required: true,
      type: "string",
      trigger: "blur",
      message: "must input name",
    },
  ],
  color: [
    {
      required: true,
      type: "string",
      trigger: "blur",
      message: "must input color",
    },
  ],
  type: [
    {
      required: true,
      type: "string",
      trigger: "blur",
      message: "must select type",
    },
  ],
};

const emit = defineEmits(["created"]);

async function onFinish(values: AnimalDto) {
  const res = await createAnimal(values);
  if (res) {
    emit("created");
  }
}

function onFinishFailed(error: { values: AnimalDto; errorFields: string[] }) {}

const animalTypes = new Set(["dog", "cat"]);
</script>

<style scoped></style>
