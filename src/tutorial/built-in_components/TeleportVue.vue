<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>

<template id="tp">
    <SectionContainer title="Basic Usage">
        <button @click="open = true">Open Modal</button>

        <Teleport to="body">
            <div v-if="open" class="my-modal">
                <p>Hello from the modal!</p>
                <button @click="open = false">Close</button>
            </div>
        </Teleport>
    </SectionContainer>


    <SectionContainer title="Multiple Teleports on the Same Target">
        <Teleport to="#url-path">
            <div>A</div>
        </Teleport>
        <Teleport to="#url-path">
            <div>B</div>
        </Teleport>
    </SectionContainer>
</template>

<style scoped>
.my-modal {
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
    padding: 20px;
    border: 1px solid gray;
    border-radius: 5px;
    color: white;
}
</style>