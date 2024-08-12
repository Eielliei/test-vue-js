<script setup>
import gsap from 'gsap';
import { computed, ref } from 'vue';

const counter = ref(5)
const items = ref([1, 2, 3, 4, 5])

function addNumber() {
    counter.value++
    const randomIndex = Math.floor(Math.random() * items.value.length);
    items.value.splice(randomIndex, 0, counter.value)
}

function removeNumber() {
    if (items.value.length == 0) {
        return;
    }
    const randomIndex = Math.floor(Math.random() * items.value.length);
    items.value.splice(randomIndex, 1)
}

const counterMove = ref(5)
const itemsMove = ref([1, 2, 3, 4, 5])

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Generate random index within range
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements using destructuring
    }
    return array;
}


function addMove() {
    counterMove.value++
    const randomIndex = Math.floor(Math.random() * itemsMove.value.length);
    itemsMove.value.splice(randomIndex, 0, counterMove.value)
}

function removeMove() {
    if (itemsMove.value.length == 0) {
        return;
    }
    const randomIndex = Math.floor(Math.random() * itemsMove.value.length);
    itemsMove.value.splice(randomIndex, 1)
}

function shuffle() {
    itemsMove.value = shuffleArray(itemsMove.value.slice())
}


const list = [
  { msg: 'Bruce Lee' },
  { msg: 'Jackie Chan' },
  { msg: 'Chuck Norris' },
  { msg: 'Jet Li' },
  { msg: 'Kung Fury' }
]

const query = ref('')

const computedList = computed(() => {
  return list.filter((item) => item.msg.toLowerCase().includes(query.value))
})

function onBeforeEnter(el) {
  el.style.opacity = 0
  el.style.height = 0
}

function onEnter(el, done) {
  gsap.to(el, {
    opacity: 1,
    height: '1.6em',
    delay: el.dataset.index * 0.15,
    onComplete: done
  })
}

function onLeave(el, done) {
  gsap.to(el, {
    opacity: 0,
    height: 0,
    delay: el.dataset.index * 0.15,
    onComplete: done
  })
}
</script>

<template>
    <SectionContainer title="Enter / Leave Transitions">
        <button @click="addNumber()">Add at random index</button>
        <button @click="removeNumber()">Remove at random index</button>
        <TransitionGroup name="list" tag="ul">
            <li v-for="item in items" :key="item">
                {{ item }}
            </li>
        </TransitionGroup>
    </SectionContainer>

    <SectionContainer title="Move Transitions">
        <button @click="addMove()">Add</button>
        <button @click="removeMove()">Remove</button>
        <button @click="shuffle()">Shuffle</button>
        <TransitionGroup name="move-list" tag="ul">
            <li v-for="item in itemsMove" :key="item">
                {{ item }}
            </li>
        </TransitionGroup>
    </SectionContainer>

    <SectionContainer title="Staggering List Transitions">
        <input v-model="query" />
        <TransitionGroup tag="ul" :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
            <li v-for="(item, index) in computedList" :key="item.msg" :data-index="index">
                {{ item.msg }}
            </li>
        </TransitionGroup>
    </SectionContainer>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.move-list-move,
/* apply transition to moving elements */
.move-list-enter-active,
.move-list-leave-active {
    transition: all 0.5s ease;
}

.move-list-enter-from,
.move-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.move-list-leave-active {
    position: absolute;
}
</style>