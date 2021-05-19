<template>
    <div>
        <div class="section">
            [Show section]
            <p v-show="count === 0">count === 0</p>
            <p v-show="count !== 0">count !== 0</p>

            <button @click.left="onCount">count++</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Show',
    data: () => ({
        count: 0,
    }),
    methods: {
        onCount() {
            this.count++;
        },
    }
}
</script>
<style>
    .section {
        border: 1px solid black;
        margin-bottom: 10px;
    }
</style>
