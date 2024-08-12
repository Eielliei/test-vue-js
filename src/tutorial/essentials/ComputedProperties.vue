<script setup>
import { reactive, computed, ref } from 'vue'

const author = reactive({
    name: 'John Doe',
    books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
})

// a computed ref
const publishedBooksMessage = computed(() => {
    return author.books.length > 0 ? 'Yes' : 'No'
})

// in component
function calculateBooksMessage() {
    return author.books.length > 0 ? 'Yes' : 'No'
}

const isEven = computed(() => { return author.books.length % 2 == 0 ? 'Even' : 'Odd' })

function calculateEven() {
    return author.books.length % 2 == 0 ? 'Even' : 'Odd'
}

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // Note: we are using destructuring assignment syntax here.
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})
</script>

<template>
    <SectionContainer title="Basic Example">
        <p>Has published books:
            <span>{{ publishedBooksMessage }}</span>
        </p>
    </SectionContainer>

    <SectionContainer title="Computed Caching vs. Methods">
        <p>Calculated Books Message: {{ calculateBooksMessage() }}</p>

        <button @click="author.books.push('test')">Add Content</button>
        <p>Computed Even: {{ isEven }}</p>
        <p>Calculated Even: {{ calculateEven() }}</p>
    </SectionContainer>

    <SectionContainer title="Writable Computed">
        <P>Full Name: {{ fullName }}</P>
        <p>FullName: <input type="text" v-model="fullName"></p>
    </SectionContainer>
</template>