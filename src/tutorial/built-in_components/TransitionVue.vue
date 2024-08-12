<script setup>
import { ref } from 'vue';
import gsap from 'gsap'

const show = ref(true)
const slide = ref(true)
const bounce = ref(true)

const hook = ref(true)
function onBeforeEnter(el) {
    gsap.set(el, {
        scaleX: 0.25,
        scaleY: 0.25,
        opacity: 1
    })
}

function onEnter(el, done) {
    gsap.to(el, {
        duration: 1,
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        ease: 'elastic.inOut(2.5, 1)',
        onComplete: done
    })
}

function onLeave(el, done) {
    gsap.to(el, {
        duration: 0.7,
        scaleX: 1,
        scaleY: 1,
        x: 300,
        ease: 'elastic.inOut(2.5, 1)'
    })
    gsap.to(el, {
        duration: 0.2,
        delay: 0.5,
        opacity: 0,
        onComplete: done
    })
}

const docState = ref('saved')

const count = ref(0);

setInterval(() => count.value++, 1000);
</script>

<template>
    <SectionContainer title="The <Transition> Component">
        <button @click="show = !show">Toggle</button>
        <Transition>
            <p v-if="show">hello</p>
        </Transition>
    </SectionContainer>

    <SectionContainer title="CSS-Based Transitions">
        <button @click="slide = !slide">Toggle</button>
        <!-- Named Transition -->
        <Transition name="slide-fade">
            <p v-if="slide">hello</p>
        </Transition>


        <button @click="bounce = !bounce">Toggle</button>
        <Transition name="bounce">
            <p v-if="bounce" style="text-align: center;">
                Hello here is some bouncy text!
            </p>
        </Transition>
    </SectionContainer>

    <SectionContainer title="JavaScript Hooks">
        <button @click="hook = !hook">Toggle</button>

        <Transition
          @before-enter="onBeforeEnter"
          @enter="onEnter"
          @leave="onLeave"
          :css="false"
        >
          <div class="gsap-box" v-if="hook"></div>
        </Transition>
    </SectionContainer>

    <SectionContainer title="Transition on Appear">
        <Transition appear>
            <h5>Hello World</h5>
        </Transition>
    </SectionContainer>

    <SectionContainer title="Transition Between Elements">
        <span style="margin-right: 20px">Click to cycle through states:</span>
        <div class="btn-container">
            <Transition name="slide-up">
                <button class="absolute" v-if="docState === 'saved'" @click="docState = 'edited'">Edit</button>
                <button class="absolute" v-else-if="docState === 'edited'" @click="docState = 'editing'">Save</button>
                <button class="absolute" v-else-if="docState === 'editing'" @click="docState = 'saved'">Cancel</button>
            </Transition>
        </div>
    </SectionContainer>

    <SectionContainer title="Transition Modes">
        <span style="margin-right: 20px">Click to cycle through states:</span>
        <div class="btn-container">
            <Transition name="slide-up" mode="out-in">
                <button class="absolute" v-if="docState === 'saved'" @click="docState = 'edited'">Edit</button>
                <button class="absolute" v-else-if="docState === 'edited'" @click="docState = 'editing'">Save</button>
                <button class="absolute" v-else-if="docState === 'editing'" @click="docState = 'saved'">Cancel</button>
            </Transition>
        </div>
    </SectionContainer>

    <SectionContainer title="Transitions with the Key Attribute">
        <div class="wrapper">
            <Transition>
                <p :key="count">{{ count }}</p>
            </Transition>
        </div>
    </SectionContainer>
</template>

<style scoped>
.btn-container {
    display: inline-block;
    position: relative;
    height: 1em;
}

.absolute {
    position: absolute;
}

.wrapper {
    position: relative;
    font-size: 4rem;
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

.bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.25);
    }

    100% {
        transform: scale(1);
    }
}


.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.25s ease-out;
}

.slide-up-enter-from {
    opacity: 0;
    transform: translateY(30px);
}

.slide-up-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}

.gsap-box {
    background: #42b883;
    margin-top: 20px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
</style>