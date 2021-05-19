<template>
    <div>
        <div :class="['red']">{{name}}</div>
        <div v-bind="{id: 'italic', class: 'red'}">{{name}}</div>
    </div>
</template>

<script>
export default {
    name: 'Bind',
    data: () => ({
        name: "Mason Kim"
    })
}
</script>

<style>
    .red {
        background: #ff0000;
    }

    #italic {
        font-style: italic;
    }
</style>
