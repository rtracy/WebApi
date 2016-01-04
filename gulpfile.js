/**
 * Created by rob on 1/3/2016.
 */
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    gulpMocha = require('gulp-mocha'),
    gulpEnv = require('gulp-env'),
    superTest = require('supertest');

gulp.task('default', function () {
    nodemon({
        script: 'app.js',
        external: 'js',
        env: {
            PORT: 8000
        },
        ignore: ['./node_modules/**']
    })
        .on('restart', function () {
            console.log('restarting now.');
        });
});


gulp.task('test', function () {
    gulpEnv({vars: {ENV: 'test'}});
    gulp.src('tests/*.js', {read: false})
        .pipe(gulpMocha({reporter: 'nyan'}));
});