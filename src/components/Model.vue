<template>
    <div>
        <div class="section">
            [Model section]
            <input v-model="msg">
            <div>{{msg}}</div>

            <input type="checkbox" v-model="checked" @change="onChecked"> checked <br>
            
            <input type="checkbox" v-model="checkValues" value="1" @change="onChecked"> checkValues: 1<br>
            <input type="checkbox" v-model="checkValues" value="2" @change="onChecked"> checkValues: 2<br>

            <input type="radio" v-model="selected" value="a" @change="onSelected"> onSelected: a<br>
            <input type="radio" v-model="selected" value="b" @change="onSelected"> onSelected: b<br>

            <select v-model="selectValue" multiple @change="onSelected">
                <option :value="{name: '!'}"> ! </option>
                <option :value="{name: '@'}"> @ </option>
                <option :value="{name: '#'}"> # </option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Model',
    data: () => ({
        msg: "",
        checked: true,
        checkValues: ['1', '2'],
        selected: "",
        selectValue: []

    }),
    methods: {
        onChecked() {
            console.log("checked: ", this.checked);
            console.log("checkValues: ", this.checkValues);
        },
        onSelected() {
            console.log("selected: ", this.selected);
            console.log("selectValue: ", this.selectValue);
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
