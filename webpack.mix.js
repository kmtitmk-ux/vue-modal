const mix = require('laravel-mix');
mix.js('www/js/scripts.js', 'www/js/app.js')
    .sass('www/css/style.scss', 'www/css/app.css');