<template>
  <div>
    <h1>Bai 2</h1>
    <v-combobox class="body"
      v-model="city"
      label="Email"
      :items="['quynh@gmail', 'uvuveveve@gmail.com']"
    ></v-combobox>
    <h3>email: {{ city }}</h3>
  </div>
</template>

<script setup>
import { ref } from "vue";

const city = ref("");
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .body{
        width: 400px;
        margin-left: 47pc;
    }
</style>
