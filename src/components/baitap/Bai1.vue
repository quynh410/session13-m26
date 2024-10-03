<template>
  <div>
    <h1>Bai 1</h1>
    <v-btn @click="handleclick">click me </v-btn>
    <v-sheet class="mx-auto" width="300">
      <v-form @submit.prevent>
        <v-text-field
          v-model="firstName"
          :rules="rules"
          label="First name"
        ></v-text-field>
        <v-btn class="mt-2" type="submit" block>Submit</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const firstName = ref("");
const rules = reactive([
  (value) => {
    if (value) return true;

    return "You must enter a first name.";
  },
]);
const city = ref("");
const handleclick = () => {
  console.log("clicked");
};
</script>

<style></style>
