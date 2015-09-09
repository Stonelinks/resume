/**
 * Created by ld on 8/30/15.
 */

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var clean = require('gulp-clean');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var wintersmith = require('wintersmith')('./config.json');
var ghPages = require('gulp-gh-pages');
var gulpSequence = require('gulp-sequence');
var exec = require('child_process').exec;

var path = {
    site: [
        './contents/*.{md,json}'
    ],
    node_modules: [
        './node_modules/font-awesome/**/*',
        './node_modules/bootstrap/**/*'
    ],
    style: './contents/style/**/*.less',
    images: './contents/images/**/*.*'
};

gulp.task('images', function () {
    return gulp.src(path.images)
        .pipe(gulp.dest('./build/images'));
});

gulp.task('node_modules', function () {
    return gulp.src(path.node_modules, {base: './node_modules'})
        .pipe(gulp.dest('./build/node_modules/'));
});

gulp.task('nojekyll', function () {
    return gulp.src('.nojekyll')
        .pipe(gulp.dest('./build'));
});

gulp.task('site', function (done) {
    wintersmith.build(done);
});

gulp.task('style', function () {
    return gulp.src('./contents/style/main.less')
        .pipe(sourcemaps.init())
        .pipe(less({
            paths: ['./contents/']
        }))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('./build/style'));
});

gulp.task('webserver', function () {
    return gulp.src('./build')
        .pipe(webserver({
            host: '0.0.0.0',
            livereload: true,
            path: './build'
        }));
});

gulp.task('clean', function () {
    return gulp.src('./build')
        .pipe(clean());
});

gulp.task('wkhtmltopdf', function (cb) {
    exec('wkhtmltopdf --zoom 0.825 --user-style-sheet contents/style/pdf.css --print-media-type --javascript-delay 30000 build/index.html build/lucas_doyle_resume.pdf', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('build', gulpSequence('clean', ['nojekyll', 'style', 'site', 'images', 'node_modules'], 'wkhtmltopdf'));

gulp.task('watch', ['build'], function () {
    gulp.watch(path.site, ['site']);
    gulp.watch(path.style, ['style']);
    gulp.watch(path.images, ['images']);
    gulp.watch(path.node_modules, ['node_modules']);
});

gulp.task('gh-pages', function () {
    return gulp.src([
        './build/**/*',
        './build/.nojekyll'
    ]).pipe(ghPages({
        branch: 'gh-pages'
    }));
});

gulp.task('deploy', gulpSequence('build', 'gh-pages'));

gulp.task('develop', ['watch', 'webserver']);

gulp.task('default', ['build']);