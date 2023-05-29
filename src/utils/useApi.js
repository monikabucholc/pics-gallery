import { ref, unref, watchEffect } from 'vue'
import axios from 'axios';

export function useApi(url) {
  const data = ref(null);
  const dataError = ref(null);
  const isLoading = ref(true);

  function getApi() {
    data.value = null;
    dataError.value = null;
    isLoading.value = true;

    axios
        .get(unref(url))
        .then(response => (data.value = response.data))
        .catch(error => (dataError.value = error))
        .finally(() => isLoading.value = false)
  }

  watchEffect(getApi);
  
  return { data, dataError, isLoading }
}