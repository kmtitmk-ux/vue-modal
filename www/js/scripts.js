const Vue = require('vue');

Vue.component('modal-item', {
    template: `
        <div id="modal" @click="except_modal_close">
            <div class="wrap">
                <span class="close" @click="modal_close">&times;</span>
                <p class="text-center">モーダルで表示させるコンテンツ。</p>
            </div>
        </div>
    `,
    methods: {
        modal_close: function () {
            app.$data.show = false;
        },
        except_modal_close: function (e) {
            if (this.$el == e.target) {
                app.$data.show = false;
            }
        }
    }
})
const app = new Vue({
    el: '#app',
    data: {
        show: false
    },
    methods: {
        click_show: function () {
            this.show = true;
        }
    }
})