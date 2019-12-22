<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="/css/app.css">
</head>
<body>
    <div id="app">
        <form action="" class="row justify-content-center col-12">
            <div class="col-12" v-html="main_img">{{main_img}}</div>

            <modal-sub v-for="item in select_sub_id"
                v-bind:key="item.id"
                v-bind:item="item"
                v-bind:select_main_id="select_main_id"
                v-bind:select_sub_id="select_sub_id"
            ></modal-sub>

            <div class="d-flex flex-wrap mt-3 mb-3 col-12">
                <modal-cont
                    v-show="show"
                    v-bind:data="img_list"
                    v-bind:select_sub_id="select_sub_id"
                    v-bind:select_main_id="select_main_id"
                ></modal-cont>

                <div class="mt-4 w-100 d-flex justify-content-center">
                    <span class="btn btn-info" @click="click_show">開く</span>
                </div>
            </div>
        </form>

    </div><!--//app-->

    <script src="/js/app.js"></script>
</body>
</html>