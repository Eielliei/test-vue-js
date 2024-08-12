<script setup>
import { ref, onMounted } from 'vue'

// declare a ref to hold the element reference
// the name must match template ref value
const input = ref(null)

onMounted(() => {
    input.value.focus()
    console.log(itemRefs.value)
})

const list = ref([
    'apple', 'banana', 'orange', 'berry'
])

const itemRefs = ref([])

</script>

<template>
    <SectionContainer title="Accessing Refs">
        <input ref="input" />
    </SectionContainer>

    <SectionContainer title="Refs inside v-for">
        <ul>
            <li v-for="item in list" ref="itemRefs" :key="item">
                {{ item }}
            </li>
        </ul>
    </SectionContainer>
</template>