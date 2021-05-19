<template>
    <div>
        <div class="section">
            [Click section]
            <div>
                <button v-on:click="onClick">v-on:click</button>
                <button @click="onClick">@click</button>
                <button v-on="{click: onClick}"> v-on="{click: onClick}"</button>    
            </div>
            <div>{{toggle}}</div>
        </div>
        <div class="section">
            [Event section]
            <div class="parent" @click.once="onParentClick">
                Parent
                <div class="child" @click.middle="onChildClick"> Child </div>
            </div>    
            <input @keyup.enter="onKeyup">
        </div>
    </div>
</template>

<script>
export default {
    name: 'On',
    data: () => ({
        toggle: false,
    }),
    methods: {
        onClick() {
            this.toggle = !this.toggle;
        },
        onParentClick() {
            console.log("Parent");
        },
        onChildClick() {
            console.log("Child");
        },
        onKeyup() {
            console.log("enter");
        },
    }
}
</script>
<style>
    .section {
        border: 1px solid black;
        margin-bottom: 10px;
    }

    button {
        margin-right: 5px;
    }

    .parent {
        width: 100px;
        height: 100px;
        background: #ff0000;
    }

    .child {
        margin: 10px;
        background: #00ff00;
    }
</style>
