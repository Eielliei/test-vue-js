<script setup>
import { computed, reactive, ref } from 'vue'

const isActive = ref(true)
const hasError = ref(false)

const classObject = reactive({
  active: false,
  'text-danger': true
})

const isActiveComputed = ref(true)
const errorComputed = ref(null)

const classObjectComputed = computed(() => ({
  active: isActiveComputed.value && !errorComputed.value,
  'text-danger': errorComputed.value && errorComputed.value.type === 'fatal'
}))

const activeClass = ref('active')
const errorClass = ref('text-danger')

const activeColor = ref('red')
const fontSize = ref(30)

const styleObject = reactive({
  color: 'red',
  fontSize: '30px'
})

const baseStyles = 'color: blue'
const overridingStyles = 'font-style: italic'
</script>

<template>
    <SectionContainer title="Binding HTML Classes">
        <div class="static" :class="{ active: isActive, 'text-danger': hasError }">Example 1</div>
        <div :class="classObject">Example 2</div>
        <div :class="classObjectComputed">Example 3</div>

        <!-- Binding to Arrays -->
        <div :class="[activeClass, errorClass]">Example 4</div>
        <!-- Using ternary expression for conditional class -->
        <div :class="[isActive ? activeClass : '', errorClass]">Example 5</div>
        <!-- Better version of above example -->
        <div :class="[{ [activeClass]: isActive }, errorClass]">Example 6</div>
    </SectionContainer>

    <SectionContainer title="Binding Inline Styles">
        <!-- Camel case is recommended for style properties -->
        <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">Example 1</div>
        <!-- Also supports kebab case -->
        <div :style="{ 'font-size': fontSize + 'px' }">Example 2</div>

        <div :style="styleObject">Example 3</div>

        <!-- Binding to Arrays -->  
        <div :style="[baseStyles, overridingStyles]">Example 4</div>

        <!-- Multiple Values -->
        <!-- <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">Example 5</div> -->
        <!-- This will only render the last value in the array which the browser supports. 
        In this example, it will render [display: flex] for browsers that support the unprefixed version of flexbox. -->
    </SectionContainer>
</template>