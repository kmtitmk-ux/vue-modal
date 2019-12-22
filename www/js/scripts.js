require('bootstrap-css-only')
const Vue = require('vue')

//チェックされた画像
Vue.component('modal-sub', {
    props: ['item', 'select_main_id', 'select_sub_id'],
    template: `
        <div class="card w-25">
            <label class="mb-0">
                <img class="w-100" v-bind:src="set_img_src(item)" alt="">
                <div class="card-img-overlay">
                    <input type="radio" name="thumbnail_id"
                        v-bind:value="item"
                        v-bind:checked="set_checked(item, select_main_id, select_sub_id)"
                    @change="change_radio($event)">
                </div>
            </label>
        </div>
    `,
    methods: {
        change_radio: function (e) {
            app.select_main_id = e.target.value
            app.main_img = '<img class="d-block m-auto" src="/images/' + e.target.value + '.jpg" alt="">'
        },
        set_img_src: function (item) {
            return '/images/' + item + '.jpg'
        },
        set_checked: function (item, select_main_id, select_sub_id) {
            if (select_sub_id.length == 1) {
                return true
            } else {
                if (select_main_id == item) {
                    return true
                }
            }
        }
    }
})

//画像一覧
Vue.component('img-list', {
    props: ['item', 'select_main_id', 'select_sub_id'],
    template: `
        <div class="card w-25">
            <label class="mb-0">
                <img class="w-100" v-bind:src="set_img_src(item)" alt="">
                <div class="card-img-overlay">
                    <input type="checkbox" name="sub_ud_thumbnail[]"
                        v-bind:value="item"
                        v-bind:checked="set_checked(item, select_sub_id)"
                        v-bind:disabled="set_disabled(item, select_main_id)"
                    @change="change_check($event)">
                </div>
            </label>
        </div>
    `,
    methods: {
        change_check: function (e) {
            if (e.target.checked) {
                app.select_sub_id.push(parseInt(e.target.value))
            } else {
                var idx = app.select_sub_id.indexOf(parseInt(e.target.value));
                if (idx >= 0) {
                    app.select_sub_id.splice(idx, 1);
                }
            }
        },
        set_disabled: function (item, select_main_id) {
            if (item == select_main_id) {
                return true
            } else {
                return false
            }
        },
        set_checked: function (item, select_sub_id) {
            if (select_sub_id.includes(item)) {
                return true
            } else {
                return false
            }
        },
        set_img_src: function (item) {
            return '/images/' + item + '.jpg'
        }
    }
})

//モーダルで表示
Vue.component('modal-cont', {
    props: ['data', 'select_sub_id', 'select_main_id'],
    template: `
        <div id="modal">
            <div class="wrap">
                <span @click="modal_close" class="close">close</span>
                <img-list v-for="item in data"
                    v-bind:key="item.id"
                    v-bind:item="item"
                    v-bind:select_sub_id="select_sub_id"
                    v-bind:select_main_id="select_main_id"
                ></img-list>
            </div>
        </div>
    `,
    methods: {
        modal_close: function (e) {
            app.show = false
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        show: false,
        img_list: [1, 2, 4, 3],
        select_sub_id: [2, 3],
        select_main_id: 2,
        main_img: null
    },
    created: function () {
        if (this.select_main_id) {
            this.main_img = '<img class="d-block m-auto" src="/images/' + this.select_main_id + '.jpg" alt="">'
        }
    },
    methods: {
        click_show: function () {
            this.show = true
        }
    }
})