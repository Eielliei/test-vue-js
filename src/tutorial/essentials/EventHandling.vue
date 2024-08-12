<script setup>
import { ref } from 'vue';

const count = ref(0)

const name = ref('Vue.js')

function greet(event) {
    alert(`Hello ${name.value}!`)
    // `event` is the native DOM event
    if (event) {
        alert(event.target.tagName)
    }
}

function say(message) {
    alert(message)
}

function warn(message, event) {
    // now we have access to the native event
    if (event) {
        event.preventDefault()
    }
    alert(message)
}
</script>

<template>
    <SectionContainer title="Inline Handlers">
        <button @click="count++">Add 1</button>
        <p>Count is: {{ count }}</p>
    </SectionContainer>

    <SectionContainer title="Method Handlers">
        <!-- `greet` is the name of the method defined above -->
        <button @click="greet">Greet</button>
    </SectionContainer>

    <SectionContainer title="Calling Methods in Inline Handlers">
        <button @click="say('hello')">Say hello</button>
        <button @click="say('bye')">Say bye</button>
    </SectionContainer>

    <SectionContainer title="Accessing Event Argument in Inline Handlers">
        <!-- using $event special variable -->
        <button @click="warn('Form cannot be submitted yet.', $event)">
            Submit
        </button>

        <!-- using inline arrow function -->
        <button @click="(event) => warn('Form cannot be submitted yet.', event)">
            Submit
        </button>
    </SectionContainer>

    <SectionContainer title="Event Modifiers">
        <!-- the click event's propagation will be stopped -->
        <a @click.stop="doThis"></a>

        <!-- the submit event will no longer reload the page -->
        <form @submit.prevent="onSubmit"></form>

        <!-- modifiers can be chained -->
        <a @click.stop.prevent="doThat"></a>

        <!-- just the modifier -->
        <form @submit.prevent></form>

        <!-- only trigger handler if event.target is the element itself -->
        <!-- i.e. not from a child element -->
        <div @click.self="doThat">...</div>


        <!-- use capture mode when adding the event listener     -->
        <!-- i.e. an event targeting an inner element is handled -->
        <!-- here before being handled by that element           -->
        <div @click.capture="doThis">...</div>

        <!-- the click event will be triggered at most once -->
        <a @click.once="doThis"></a>

        <!-- the scroll event's default behavior (scrolling) will happen -->
        <!-- immediately, instead of waiting for `onScroll` to complete  -->
        <!-- in case it contains `event.preventDefault()`                -->
        <div @scroll.passive="onScroll">...</div>
    </SectionContainer>

    <SectionContainer title="Key Modifiers">
        <!-- only call `submit` when the `key` is `Enter` -->
        <input @keyup.enter="submit" />

        <input @keyup.page-down="onPageDown" />


        <!-- Alt + Enter -->
        <input @keyup.alt.enter="clear" />

        <!-- Ctrl + Click -->
        <div @click.ctrl="doSomething">Do something</div>


        <!-- this will fire even if Alt or Shift is also pressed -->
        <button @click.ctrl="onClick">A</button>

        <!-- this will only fire when Ctrl and no other keys are pressed -->
        <button @click.ctrl.exact="onCtrlClick">A</button>

        <!-- this will only fire when no system modifiers are pressed -->
        <button @click.exact="onClick">A</button>
    </SectionContainer>
</template>