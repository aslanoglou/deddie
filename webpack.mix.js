let mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.setResourceRoot('../');

mix.js('src/js/online-vlavi.js', 'dist/js/online-vlavi.js');
mix.js('src/js/programatismenes-diakopes.js', 'dist/js/programatismenes-diakopes.js');
mix.js('src/js/tilemetrisi.js', 'dist/js/tilemetrisi.js');
mix.js('src/js/account-box.js', 'dist/js/account-box.js');
mix.js('src/js/timologio.js', 'dist/js/timologio.js');
mix.js('src/js/main.js', 'dist/js/main.js');
mix.sass('src/scss/online-vlavi.scss', 'dist/css/online-vlavi.css');
mix.sass('src/scss/programatismenes-diakopes.scss', 'dist/css/programatismenes-diakopes.css');
mix.sass('src/scss/tilemetrisi.scss', 'dist/css/tilemetrisi.css');
mix.sass('src/scss/timologio.scss', 'dist/css/timologio.css');
mix.sass('src/scss/main.scss', 'dist/css/main.css');
mix.copyDirectory('src/images', 'dist/images');
mix.copyDirectory('src/fonts', 'dist/fonts');
