<script setup>
import { ref } from 'vue';

const awesome = ref(true)

const type = ref('None')

const ok = ref(true)
</script>

<template>
    <SectionContainer title="v-if">
        <input type="checkbox" name="" id="" v-model="awesome">
        <h1 v-if="awesome">Vue is awesome!</h1>
    </SectionContainer>

    <SectionContainer title="v-else">
        <button @click="awesome = !awesome">Toggle</button>

        <h1 v-if="awesome">Vue is awesome!</h1>
        <h1 v-else>Oh no 😢</h1>
    </SectionContainer>

    <SectionContainer title="v-else-if">
        <div>
            <input type="radio" name="type" id="" v-model="type" value="A">A
            <input type="radio" name="type" id="" v-model="type" value="B">B
            <input type="radio" name="type" id="" v-model="type" value="C">C
            <input type="radio" name="type" id="" v-model="type" value="None">None
        </div>
        <div v-if="type === 'A'">
            A
          </div>
          <div v-else-if="type === 'B'">
            B
          </div>
          <div v-else-if="type === 'C'">
            C
          </div>
          <div v-else>
            Not A/B/C
          </div>
    </SectionContainer>

    <SectionContainer title="v-show">
      <input type="checkbox" name="" id="" v-model="ok">
      <h1 v-show="ok">Hello!</h1>
    </SectionContainer>
</template>