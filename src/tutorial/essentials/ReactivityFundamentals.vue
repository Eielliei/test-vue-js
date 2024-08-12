<script setup>
import { nextTick, reactive, ref } from 'vue';

const count = ref(0)

function increment() {
  count.value++
}

const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})

function mutateDeeply() {
  // these will work as expected.
  obj.value.nested.count++
  obj.value.arr.push('baz')
}

async function incrementtoNextTick() {
  count.value++
  await nextTick()
  // Now the DOM is updated
}

const state = reactive({ count: 0 })

</script>

<template>
    <SectionContainer title="Declaring Reactive State with ref()">
      <button @click="count++">Count: {{ count }}</button>
      <button @click="increment()">Count: {{ count }}</button>

      <!-- Deep Reactivity -->
      <button @click="mutateDeeply()">Object { nested: { count: {{ obj.nested.count }} }, arr: {{ obj.arr }} }</button>

      <!-- DOM Update Timing -->
      <button @click="incrementtoNextTick()">Count from Tick: {{ count }}</button>
    </SectionContainer>

    <SectionContainer title="reactive()">
      <button @click="state.count++">
        State count: {{ state.count }}
      </button>
    </SectionContainer>
</template>