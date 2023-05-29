import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      //Number of images to display - user input
      imageCount: 20,
      //For pagination
      currentPage: 1
    }
  },
  mutations: {
    updateImageCount (state, number) {
        state.imageCount = number;
    },
    updateCurrentPage (state, number) {
      state.currentPage = number;
    }
  }
})

export default store;