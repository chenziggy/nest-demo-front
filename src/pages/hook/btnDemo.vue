<script setup name="BtnDemo12" lang="ts">
import { useAutoRequest } from "./hook";
import { Button } from "ant-design-vue";
import { submitApi } from "./api";
type ApiRet = {
  status: string;
  text: string;
};

const [loading, submit] = useAutoRequest<ApiRet, [string]>(submitApi, {
  onSuccess: (res: ApiRet) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("onSuccess");
        resolve(null);
      }, 1000);
    });
  },
});

function onSubmit() {
  submit("aaa").then((res) => {
    console.log("res", res);
  });
}
</script>

<template>
  <div class="col">
    <Button :loading="loading" @click="onSubmit">提交</Button>
  </div>
</template>
