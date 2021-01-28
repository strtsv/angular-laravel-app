const mix = require("laravel-mix");

mix.js("resources/js/app.js", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    .copy(
        "node_modules/angular/angular.js",
        "public/js/lib/angular/angular.js"
    )
    .copy(
        "node_modules/jquery/dist/jquery.min.js",
        "public/js/lib/jquery/jquery.min.js"
    )
    .copy(
        "node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js",
        "public/js/lib/bootstrap/bootstrap.min.js"
    )
    .copy("resources/js/app.js", "public/js/app.js")
    .copy(
        "resources/js/controllers/employees.js",
        "public/js/controllers/employees.js"
    );
