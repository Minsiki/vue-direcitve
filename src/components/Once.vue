<template>
    <div>
        <input v-model="name">
        <div v-once>
            <div>Name: {{name}}</div>
            <div>Age: {{age}}</div>
            <div>Birth: {{birth}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Once',
    data: () => ({
        name: 'Mason',
        age: 28,
        birth: '94-02-15'
    }),
    methods: {
    }
}
</script>
<style>
</style>
