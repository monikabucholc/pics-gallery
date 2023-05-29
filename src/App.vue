<script setup>
import Navbar from './components/Navbar.vue';
import CardsList from './components/CardsList.vue';
import Footer from './components/Footer.vue'
</script>

<template>
  <v-app class="mx-auto my-0 pa-0 bg-blue-grey-lighten-5" id="pics-gallery">
    <v-layout class="d-flex flex-column align-center">
      <Navbar />
      <CardsList />
      <Footer />
    </v-layout>
  </v-app>
</template>

