<script setup>
const msg = "Hello World"
const rawHtml = "<span style='color: red'>This should be red.</span>"
const dynamicId = 'id-999'
const isButtonDisabled = true
const objectOfAttrs = {
    id: 'container',
    class: 'wrapper',
    style: 'background-color:green'
}

const number = 99
const ok = true
const message = "Hi I'm Learning Vue JS"
const id = 12345

const date = new Date()

function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
}

function toTitleDate(date) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
}

const seen = true
const url = "/"

function doSomething() {
    alert("Nothing...")
}

const attributeName = "parameter"
const eventName = "click"
</script>

<template>
    <div>
        <h3>Text Interpolation</h3>
        <span>Message: {{ msg }}</span>
        <hr>
    </div>

    <SectionContainer title="Raw HTML">
        <p>Using text interpolation: {{ rawHtml }}</p>
        <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    </SectionContainer>

    <SectionContainer title="Attribute Bindings">
        <div v-bind:id="dynamicId">---</div>
        <!-- Shorthand -->
        <div :id="dynamicId">---</div>

        <!-- Boolean Attributes -->
        <button :disabled="isButtonDisabled">Button</button>

        <!-- Dynamically Binding Multiple Attributes -->
        <div v-bind="objectOfAttrs">===</div>
    </SectionContainer>

    <SectionContainer title="Using JavaScript Expressions">
        <p>{{ number + 1 }}</p>
        <p>{{ ok ? 'YES' : 'NO' }}</p>
        <p>{{ message.split('').reverse().join('') }}</p>
        <div :id="`list-${id}`">===</div>

        <time :title="toTitleDate(date)" :datetime="date">
            {{ formatDate(date) }}
        </time>
    </SectionContainer>

    <SectionContainer title="Directives">
        <p v-if="seen">Now you see me</p>

        <!-- Arguments -->
        <a v-bind:href="url"> URL </a>
        <!-- shorthand -->
        <a :href="url"> URL </a>

        <a v-on:click="doSomething"> Do Something </a>
        <!-- shorthand -->
        <a @click="doSomething"> Do Something </a>

        <!-- Dynamic Arguments -->
        <a v-bind:[attributeName]="url"> Dynamic Arguments </a>
        <!-- shorthand -->
        <a :[attributeName]="url"> Dynamic Arguments </a>

        <a v-on:[eventName]="doSomething"> Dynamic Events </a>
        <!-- shorthand -->
        <a @[eventName]="doSomething"> Dynamic Events </a>

        <!-- Modifiers -->
        <form @submit.prevent="onSubmit">...</form>
    </SectionContainer>
</template>