<script setup>
import { computed, watch, ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

let currentPage = ref(1);
const handlePageChange = () => {
  store.commit('updateCurrentPage', currentPage.value)
}
const imagesPerPage = 20;
const pages = computed(() => {
  return Math.ceil(store.state.imageCount / imagesPerPage)
})

watch(currentPage, (newPage) => {
  currentPage.value = newPage;
  handlePageChange();
})

</script>
<template>
  <v-footer>
      <div class="text-center">
          <v-container>
            <v-row justify="center">
              <v-col cols="12">
                <v-container class="max-width">
                  <v-pagination
                    class="my-1"
                    :length="pages"
                    :total-visible="5"
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
        </div>
  </v-footer>
</template>