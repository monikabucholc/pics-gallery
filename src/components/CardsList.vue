<script setup>
    import { computed, ref } from 'vue';
    import { useStore } from 'vuex';
    //Handling API call
    import { useApi } from '../utils/useApi';
    //Components
    import Card from './Card.vue';
    //Const 
    //*placed in separate file because Footer also uses this value
    import { imagesPerPage } from '../const/const.js';

    const store = useStore();
    const url = computed(() => `https://picsum.photos/v2/list?page=1&limit=${store.state.imageCount}`);
    
    //Fetch data
    let { data, isLoading, dataError } = useApi(url);

    //Sort all images by author
    //*It would be more effective to use ?page=* and load less photos at the time but they would be sorted only within the page
    const sotrtedData = computed(() => {
        if (data) { 
            return data.value.sort((a,b) => {
                return a.author.localeCompare(b.author);
            })
        } 
        return [];
    })

    //Make pagination
    const imagesSorted = computed(() => {
        const start = (store.state.currentPage - 1) * imagesPerPage;
        const end = start + imagesPerPage;
        return sotrtedData.value.slice(start, end)
    });
</script>

<template>
    <v-main v-if="dataError">
        <v-container class="d-flex flex-column mt-14 fill-height">
            <v-row align="center" justify="center">
                <v-col cols="12">
                    <div>Ooops! Something went wrong... We couldn't load pictures this time. Please try refreshing the page or come back later!</div>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
    <v-main v-else class="w-100" >
        <v-container v-if="isLoading" class="d-flex flex-column mt-14 fill-height" >
            <v-row align="center" justify="center">
                <v-col cols="12">
                    <h3 class="mb-4">Loading</h3>
                    <v-progress-circular
                        indeterminate
                        color="amber"
                        size="70"
                    ></v-progress-circular>
                </v-col>
            </v-row>
        </v-container>
        <v-container v-else class="mt-14">
            <v-row v-if="data.length">
                <v-col 
                    v-for="image in imagesSorted" 
                    :key="`Col-${image.id}`" 
                    cols="12" sm="6" lg="3"
                >
                    <Card 
                        :key="`Card-${image.id}`" 
                        :url="image.download_url" 
                        :author="image.author" 
                    />
                </v-col>
            </v-row>
            <v-row v-else>
                <v-col cols="12">
                    <div class="d-flex flex-column mt-14 fill-height">Ooops! Something went wrong... We couldn't load pictures this time. Please try refreshing the page or come back later!</div>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>


