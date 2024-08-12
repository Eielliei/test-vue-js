<script setup>
import { ref } from 'vue';

const message = ref('Hello World')

const checked = ref(true)
const checkedNames = ref([])

const picked = ref('One')

const selected = ref('A')
const options = ref([
    { text: 'One', value: 'A' },
    { text: 'Two', value: 'B' },
    { text: 'Three', value: 'C' }
])

const toggle = ref('yes')
</script>

<template>
    <SectionContainer title="Basic Usage">
        <!-- Text -->
        <div>
            <p>Message is: {{ message }}</p>
            <input v-model="message" placeholder="edit me" />
        </div>

        <!-- Mutiline Text -->
        <div>

            <span>Multiline message is:</span>
            <p style="white-space: pre-line;">{{ message }}</p>
            <textarea v-model="message" placeholder="add multiple lines"></textarea>
        </div>

        <!-- Checkbox -->
        <div>
            <input type="checkbox" id="checkbox" v-model="checked" />
            <label for="checkbox">{{ checked }}</label>

            <div>Checked names: {{ checkedNames }}</div>

            <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
            <label for="jack">Jack</label>

            <input type="checkbox" id="john" value="John" v-model="checkedNames" />
            <label for="john">John</label>

            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
            <label for="mike">Mike</label>
        </div>

        <!-- Radio -->
        <div>
            <div>Picked: {{ picked }}</div>

            <input type="radio" id="one" value="One" v-model="picked" />
            <label for="one">One</label>

            <input type="radio" id="two" value="Two" v-model="picked" />
            <label for="two">Two</label>
        </div>

        <!-- Select -->
        <div>
            <div>Selected: {{ selected }}</div>

            <select v-model="selected">
                <option disabled value="">Please select one</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>

            <div>Selected: {{ selected }}</div>

            <select v-model="selected" multiple>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>


            <div>Selected: {{ selected }}</div>
            <select v-model="selected">
                <option v-for="option in options" :value="option.value" :key="option.value">
                    {{ option.text }}
                </option>
            </select>
        </div>
    </SectionContainer>

    <SectionContainer title="Value Bindings">
        <!-- `picked` is a string "a" when checked -->
        <input type="radio" v-model="picked" value="a" />

        <!-- `toggle` is either true or false -->
        <input type="checkbox" v-model="toggle" />

        <!-- `selected` is a string "abc" when the first option is selected -->
        <select v-model="selected">
            <option value="abc">ABC</option>
        </select>

        <p>Toggle: {{ toggle }}</p>
        <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
    </SectionContainer>

    <SectionContainer title="Modifiers">
        <!-- synced after "change" instead of "input" -->
        <input v-model.lazy="msg" />

        <!-- If you want user input to be automatically typecast as a number, 
        you can add the number modifier to your v-model managed inputs -->
        <input v-model.number="age" />

        <!-- If you want whitespace from user input to be trimmed automatically, 
        you can add the trim modifier to your v-model-managed inputs -->
        <input v-model.trim="msg" />
    </SectionContainer>
</template>