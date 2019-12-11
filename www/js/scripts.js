require('bootstrap-css-only')
const Vue = require('vue')

Vue.component('img-list', {
    props: ['item'],
    template: `
        <img class="w-25 h-auto" v-bind:src="'/images/' + item + '.jpg'">
    `,
})

Vue.component('list', {
    props: ['item'],
    template: `
        <div class="card w-25">
            <img class="card-img" v-bind:src="'/images/' + item + '.jpg'" alt="">
            <div class="card-img-overlay">
                <input type="checkbox" v-bind:value="item" @change="select" v-model="checked">
            </div>
        </div>
    `,
    data: function (data) {
        if (app.select.includes(data.item)) {
            return {
                checked: true,
            }
        } else {
            return {
                checked: false,
            }
        }
    },
    methods: {
        select: function (e) {
            if (e.target.checked) {
                app.select.push(parseInt(e.target.value))
            } else {
                var index = app.select.indexOf(parseInt(e.target.value))
                if (index > -1) {
                    app.select.splice(index, 1)
                }
            }
        }
    }
})

Vue.component('modal-item', {
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
        list: list_array,
        select: select_array
    },
    methods: {
        click_show: function () {
            this.show = true
        }
    }
})