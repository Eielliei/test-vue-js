<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template class="">
  <div class="d-flex justify-content-center">
    <button @click="count++">Count is: {{ count }}</button>
  </div>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>