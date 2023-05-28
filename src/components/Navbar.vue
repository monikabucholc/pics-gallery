<script setup>
import { useStore } from 'vuex';
import { ref } from 'vue';

const store = useStore()
let imgNumber = ref(null);

//Validation rules for input
const checkIfValid = (val) => {
  const numberValue = parseInt(val);
  if (
    !isNaN(numberValue) && 
    numberValue % 1 === 0 &&
    numberValue >= 1 && 
    numberValue <= 100) {
      return true
    } else {
      return false
    }
}
const rules = [
  value => {
    if (value) {
      if (checkIfValid(value)) {
        return true
      } else {
        return 'Input a number between 1 and 100'
      }
    } else {
      return 'Input a number'
    }
  }
];

//Submit
const handleImagesNumber = () => {
  if (imgNumber.value && checkIfValid(imgNumber.value)) {
    store.commit('updateImagesNumber', imgNumber.value);
    imgNumber.value = null;
  } else return
}

</script>

<template>
  <v-app-bar color="white" class="pa-4" elevation="4">
    <v-app-bar-title class="font-weight-bold">Random Frame</v-app-bar-title>
    <template v-slot:append>
      <v-form @submit.prevent="handleImagesNumber" method="post" class="d-flex align-center mt-0">
        <span class="text-body-1 mr-2">Input number of images:</span>
        <v-text-field
          v-model="imgNumber"
          :rules="rules"
          type="number"
          variant="underlined"
          label="1 - 100"
          class="mt-2"
        ></v-text-field>
        <v-btn 
          type="submit" 
          variant="outlined" 
          class="mr-4 ml-8"
          :disabled="imgNumber === null ? true : false" 
        >LOAD</v-btn>
      </v-form>
    </template>
  </v-app-bar>
</template>


