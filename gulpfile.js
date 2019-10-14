const {src, dest, parallel} = require('gulp');
const pug = require('gulp-pug');
const scss = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const minify = require('gulp-minify');

function html() {
    return src('docs/*.pug')
        .pipe(pug())
        .pipe(dest('build/html'))
}

function css() {
    return src(
        [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/prismjs/themes/prism-coy.css',
            'node_modules/@mdi/font/css/materialdesignicons.min.css',
            'scss/core.scss'
        ])
        .pipe(scss({"bundleExec": true}))
        .pipe(concat('core.css'))
        .pipe(minifyCSS())
        .pipe(dest('build/css'))
}

function js() {
    return src(
        [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/popper.js/dist/umd/popper.min.js',
            'node_modules/prismjs/prism.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/jquery-touchswipe/jquery.touchSwipe.min.js',
            'js/*.js',
        ])
        .pipe(concat('app.js'))
        .pipe(minify())
        .pipe(dest('build/js'))
}

function copyAssets() {
    return src(['assets/*/*.*'])
        .pipe(dest('build/assets'))
}

function copyMdi() {
    return src(['node_modules/@mdi/font/fonts/*.*'])
        .pipe(dest('build/fonts'))
}

exports.js = js;
exports.css = css;
exports.html = html;
exports.default = parallel(html, css, js, copyAssets, copyMdi);
