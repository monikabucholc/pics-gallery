
import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      imageCount: 20,
      currentPage: 1
    }
  },
  mutations: {
    updateImagesNumber (state, number) {
        state.imageCount = number;
    },
    updateCurrentPage (state, number) {
      state.currentPage = number;
    }
  }
})

export default store;