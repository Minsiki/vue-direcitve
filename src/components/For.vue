<template>
    <div>
        <div class="section">
            [For section]
            <div v-for="(item, index) in arr" :key="index">{{index}}번. {{item}}</div>
            <div v-for="(value, key, index) in obj" :key="index+key">{{key}}: {{value}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'For',
    data: () => ({
        arr: [1, 2, 3, 4, 5],
        obj: {
            name: 'Mason',
            age: '28',
            birth: '94-02-15'
        },
    }),
}
</script>
<style>
    .section {
        border: 1px solid black;
        margin-bottom: 10px;
    }
</style>
