<script setup>
import { computed, reactive, ref } from 'vue';

const items = ref([{ message: 'Foo', children: ['fa', 'fe', 'fi'] }, { message: 'Bar', children: ['ber', 'bir', 'bru'] }])
const parentMessage = ref('Parent')

const myObject = reactive({
    title: 'How to do lists in Vue',
    author: 'Jane Doe',
    publishedAt: '2016-04-10'
})

const numbers = ref([1, 2, 3, 4, 5])

const evenNumbers = computed(() => {
    return numbers.value.filter((n) => n % 2 === 0)
})

const sets = ref([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10]
])

function even(numbers) {
    return numbers.filter((number) => number % 2 === 0)
}
</script>

<template>
    <SectionContainer title="v-for">
        <li v-for="item in items" :key="item">
            {{ item.message }}
        </li>

        <li v-for="(item, index) in items" :key="item">
            {{ parentMessage }} - {{ index }} - {{ item.message }}
        </li>

        <!-- with index alias and destructuring function -->
        <li v-for="({ message }, index) in items" :key="index">
            {{ message }} {{ index }}
        </li>

        <li v-for="item in items" :key="item">
            <span v-for="childItem in item.children" :key="childItem">
                {{ item.message }} - {{ childItem }},
            </span>
        </li>
    </SectionContainer>

    <SectionContainer title="v-for with an Object">
        <ul>
            <li v-for="value in myObject" :key="value">
                {{ value }}
            </li>
        </ul>

        <li v-for="(value, key) in myObject" :key="key">
            {{ key }}: {{ value }}
        </li>

        <li v-for="(value, key, index) in myObject" :key="index">
            {{ index }}. {{ key }}: {{ value }}
        </li>
    </SectionContainer>

    <SectionContainer title="v-for with a Range">
        <span v-for="n in 10" :key="n">{{ n }}</span>
    </SectionContainer>

    <SectionContainer title="Displaying Filtered/Sorted Results">
        <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
        <ul v-for="numbers in sets" :key="numbers">
            <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
        </ul>
    </SectionContainer>
</template>