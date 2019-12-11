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
            <img-list
                v-for="(item, index) in select"
                v-bind:item="item"
                v-bind:index="index"
                v-bind:key="item.id"
            ></img-list>
            <div class="mt-4 w-100 d-flex justify-content-center">
                <span @click="click_show" class="btn btn-info">開く</span>
            </div>
        </div>
        <modal-item
            v-if="show"
            v-bind:data="list"
        ></modal-item>
    </div><!--//app-->
    <script>
        var list_array = [1, 2, 3, 4, 5]
        var select_array = [1, 2]
    </script>
    <script src="/js/app.js"></script>
</body>
</html>