<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/app.css">
</head>
<body>
    <div id="app">
        <div class="d-flex justify-content-center mt-3 mb-3">
            <span @click="click_show" class="btn btn-info">開く</span>
        </div>
        <modal-item v-if="show"></modal-item>
    </div><!--//app-->

    <script src="/js/app.js"></script>
</body>
</html>