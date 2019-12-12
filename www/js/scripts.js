require('bootstrap-css-only')
const Vue = require('vue')

Vue.component('img-list', {
    props: ['item', 'main_id'],
    template: `
        <div class="card w-25">
            <img class="card-img" v-bind:src="'/images/' + item + '.jpg'">
            <label class="mb-0">
                <div class="card-img-overlay">
                    <input name="main" type="radio" v-bind:value="item" @change="select_radio" v-bind:checked="set_checked(item, main_id)">
                </div>
            </label>
        </div>
    `,
    methods: {
        select_radio: function (e) {
            app.select_main_img = '<img class="d-block m-auto" src="/images/' + e.target.value + '.jpg">'
            app.select_main_img_id = e.target.value
        },
        set_checked: function (item, main_id) {
            if (main_id == item) {
                return true
            } else {
                return false
            }
        }
    }
})

Vue.component('list', {
    props: ['item'],
    template: `
        <div class="card w-25">
            <img class="card-img" v-bind:src="'/images/' + item + '.jpg'" alt="">
            <label class="mb-0">
                <div class="card-img-overlay">
                    <input type="checkbox" v-bind:value="item" @change="select_checkbox" v-model="checked" v-bind:disabled="set_disabled(item)">
                </div>
            </label>
        </div>
    `,
    data: function (data) {
        if (app.select_sub_img.includes(data.item)) {
            checked = true
        } else {
            checked = false
        }
        return {
            checked: checked
        }
    },
    methods: {
        select_checkbox: function (e) {
            if (e.target.checked) {
                app.select_sub_img.push(parseInt(e.target.value))
            } else {
                let del = []
                let idx = app.select_sub_img.indexOf(parseInt(e.target.value))
                if (idx >= 0) {
                    app.select_sub_img.splice(idx, 1);
                }
            }
        },
        set_disabled: function (item) {
            if (app.select_main_img_id == item) {
                return true
            } else {
                return false
            }
        }
    }
})

Vue.component('modal-cont', {
    props: ['data'],
    template: `
        <div id="modal" @click="except_modal_close">
            <div class="wrap">
                <span class="close" @click="modal_close">&times;</span>
                <list　v-for="(item, index) in data"
                    v-bind:item="item"
                    v-bind:index="index"
                    v-bind:key="item.id"
                ></list>
            </div>
        </div>
    `,
    methods: {
        modal_close: function () {
            app.$data.show = false;
        },
        except_modal_close: function (e) {
            if (this.$el == e.target) {
                app.$data.show = false
            }
        }
    }
})

const app = new Vue({
    el: '#app',
    data: {
        show: false,
        img_list: image_array,
        select_sub_img: select_sub_img,
        select_main_img: null,
        select_main_img_id: select_main_img_id,
    },
    created: function () {
        this.select_main_img = '<img class="d-block m-auto" src="/images/' + this.select_main_img_id + '.jpg">'
    },
    methods: {
        click_show: function () {
            this.show = true
        }
    }
})