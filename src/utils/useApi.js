import { ref, isRef, unref, watchEffect } from 'vue'
import axios from 'axios';

export function useApi(url) {
  const data = ref(null);
  const dataError = ref(false);
  const isLoading = ref(true);

  function getApi() {
    data.value = null;
    dataError.value = false;
    isLoading.value = true;

    axios
        .get(unref(url))
        .then(response => (data.value = response.data))
        .catch(error => (dataError.value = true))
        .finally(() => isLoading.value = false)
  }

  if (isRef(url)) {
    watchEffect(getApi);
  } else {
    getApi();
  }
  return { data, dataError, isLoading }
}