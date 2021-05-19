<template>
    <div>
        <div class="section">
            [if else if section]
            <p v-if="count === 0">count === 0</p>
            <p v-else-if="count === 1">count === 1</p>
            <p v-else-if="count === 2">count === 2</p>
            <p v-else>other</p>
            <button @click.left="onCount">count++</button>

            <template v-if="inputType === 'text'">
                <label>false</label>
                <input type="text"  key="textField">
            </template>
            <template v-else>
                <label>true</label>
                <input type="email" key="emailField">
            </template>
        
            <button @click.left="onToggle">Toggle</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'If',
    data: () => ({
        count: 0,
        toggle: false,
        inputType: "text",
    }),
    methods: {
        onCount() {
            this.count++;
        },
        onToggle() {
            this.toggle = !this.toggle;
            this.inputType = this.toggle ? "email" : "text";
        }
    }
}
</script>
<style>
    .section {
        border: 1px solid black;
        margin-bottom: 10px;
    }
</style>
