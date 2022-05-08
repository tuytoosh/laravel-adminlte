const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js/app.js")

    // adminte
    .js(
        "node_modules/admin-lte/plugins/jquery/jquery.min.js",
        "public/assets/adminlte/js/jquery.min.js"
    )
    .js(
        "node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js",
        "public/assets/adminlte/js/bootstrap.bundle.min.js"
    )
    .js(
        "node_modules/admin-lte/dist/js/adminlte.min.js",
        "public/assets/adminlte/js/adminlte.min.js"
    )
    .css(
        "node_modules/admin-lte/plugins/fontawesome-free/css/all.min.css",
        "public/assets/adminlte/css/fontawesome.min.css"
    )
    .css(
        "node_modules/admin-lte/dist/css/adminlte.min.css",
        "public/assets/adminlte/css/adminlte.min.css"
    )
    .copy(
        "node_modules/admin-lte/dist/img/AdminLTELogo.png",
        "public/assets/adminlte/img/AdminLTELogo.png"
    )
    .copy(
        "node_modules/admin-lte/dist/img/user2-160x160.jpg",
        "public/assets/adminlte/img/user2-160x160.jpg"
    )
    // end adminte

    .css("resources/css/app.css", "public/css/app.css")
    .version();
