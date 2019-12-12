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
    <div id="app" class="row justify-content-center col-12">
        <div class="d-flex flex-wrap mt-3 mb-3 col-5">
            <div class="col-12" v-html="select_main_img">{{ select_main_img }}</div>
            <img-list
                v-for="(item, index) in select_sub_img"
                v-bind:item="item"
                v-bind:index="index"
                v-bind:key="item.id"
                v-bind:main_id="select_main_img_id"
            ></img-list>
            <div class="mt-4 w-100 d-flex justify-content-center">
                <span @click="click_show" class="btn btn-info">開く</span>
            </div>
        </div>
        <modal-cont
            v-if="show"
            v-bind:data="img_list"
        ></modal-cont>

        <div class="col-12">
            <input type="text" name="thumbnail_id" v-bind:value="select_main_img_id">
            <input type="text" name="sub_thumbnail_id" v-bind:value="select_sub_img">
        </div>
    </div><!--//app-->
    <script>
        var image_array = [1, 2, 3, 4, 5]
        var select_main_img_id = 2
        var select_sub_img = [1, 2]
    </script>
    <script src="/js/app.js"></script>
</body>
</html>