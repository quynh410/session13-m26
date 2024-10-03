<template>
  <h1>Bai 5</h1>
  <div>
    <v-alert
      class="body"
      v-if="show"
      text="Bạn có chắc chăn muốn xóa tài khoản này không?"
      title="Xác nhận"
    ></v-alert>
  </div>
</template>

<script setup>
import { ref } from "vue";

const show = ref(true);
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.body {
  width: 400px;
  margin-left: 47pc;
}
</style>
