<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="p-2">
        <h3 style="color: lightblue;" class="mb-4">{{ title }}</h3>
        <div>
            <slot></slot>
        </div>
        <hr>
    </div>
</template>

<!--
<SectionContainer title="">

</SectionContainer>
-->