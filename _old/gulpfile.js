/**
 * Created by ld on 8/30/15.
 */

const gulp = require('gulp')
const webserver = require('gulp-webserver')
const clean = require('gulp-clean')
const less = require('gulp-less')
const sourcemaps = require('gulp-sourcemaps')
const wintersmith = require('wintersmith')('./config.json')
const ghPages = require('gulp-gh-pages')
const gulpSequence = require('gulp-sequence')
const exec = require('child_process').exec

const path = {
  site: [
    './contents/*.{md,json}'
  ],
  node_modules: [
    './node_modules/font-awesome/**/*',
    './node_modules/bootstrap/**/*'
  ],
  style: './contents/style/**/*.less',
  images: './contents/images/**/*.*'
}

gulp.task('images', () => gulp.src(path.images)
        .pipe(gulp.dest('./build/images')))

gulp.task('node_modules', () => gulp.src(path.node_modules, { base: './node_modules' })
        .pipe(gulp.dest('./build/node_modules/')))

gulp.task('nojekyll', () => gulp.src('.nojekyll')
        .pipe(gulp.dest('./build')))

gulp.task('site', (done) => {
  wintersmith.build(done)
})

gulp.task('style', () => gulp.src('./contents/style/main.less')
        .pipe(sourcemaps.init())
        .pipe(less({
          paths: ['./contents/']
        }))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('./build/style')))

gulp.task('webserver', () => gulp.src('./build')
        .pipe(webserver({
          host: '0.0.0.0',
          livereload: true,
          path: './build'
        })))

gulp.task('clean', () => gulp.src('./build')
        .pipe(clean()))

gulp.task('wkhtmltopdf', (cb) => {
  exec('wkhtmltopdf --zoom 0.825 --user-style-sheet contents/style/pdf.css --print-media-type --javascript-delay 30000 build/index.html build/lucas_doyle_resume.pdf', (err, stdout, stderr) => {
    console.log(stdout)
    console.log(stderr)
    cb(err)
  })
})

gulp.task('build', gulpSequence('clean', ['nojekyll', 'style', 'site', 'images', 'node_modules'], 'wkhtmltopdf'))

gulp.task('watch', ['build'], () => {
  gulp.watch(path.site, ['site'])
  gulp.watch(path.style, ['style'])
  gulp.watch(path.images, ['images'])
  gulp.watch(path.node_modules, ['node_modules'])
})

gulp.task('gh-pages', () => gulp.src([
  './build/**/*',
  './build/.nojekyll'
]).pipe(ghPages({
  branch: 'gh-pages'
})))

gulp.task('deploy', gulpSequence('build', 'gh-pages'))

gulp.task('develop', ['watch', 'webserver'])

gulp.task('default', ['build'])
