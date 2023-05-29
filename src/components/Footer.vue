<script setup>
  import { computed, watch, ref } from 'vue';
  import { useStore } from 'vuex';
  //Const - placed in separate file because CardsList also uses this value
  import { imagesPerPage } from '../const/const.js';

  const store = useStore();
  let currentPage = ref(1);

  //Count number of pages needed
  const pages = computed(() => {
    return Math.ceil(store.state.imageCount / imagesPerPage)
  })

  //Pass current page to the store
  const handlePageChange = () => {
    store.commit('updateCurrentPage', currentPage.value)
  }
  watch(currentPage, (newPage) => {
    currentPage.value = newPage;
    handlePageChange();
  })

</script>
<template>
  <v-footer class="bg-blue-grey-lighten-5">
    <v-container class="text-center">
      <v-row justify="center">
        <v-col cols="12">
          <v-container class="max-width">
            <v-pagination
              class="my-1"
              :length="pages"
              :total-visible="5"
              prev-icon="mdi-chevron-left"
              next-icon="mdi-chevron-right"
              v-model="currentPage"
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
      <v-row class="ma-0">
        <v-col class="pa-0">
          <div class="text-caption">Pictures provided by https://picsum.photos/</div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>