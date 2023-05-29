<script setup>
  const props = defineProps({
    url: String,
    author: String
  })
</script>

<template>
  <v-card class="mx-0 text-center text-blue-grey-darken-4" elevation="4">
    <v-img
      :src="props.url"
      height="200px"
      cover
    ></v-img>
    <v-card-title class="pb-0">
      {{props.author}}
    </v-card-title>
    <v-card-subtitle class="pb-3">
      Author
    </v-card-subtitle>
  </v-card>
</template>