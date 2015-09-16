var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    csso = require('gulp-csso');

gulp.task('js',function(){
    return gulp.src([
        'bower_components/jquery/dist/jquery.js',
        'bower_components/underscore/underscore.js',
        'bower_components/moment/moment.js',
        'bower_components/backbone/backbone.js',
        'bower_components/bootstrap/dist/js/bootstrap.js',
        'bower_components/socket.io/lib/socket.js',
        'bower_components/datatables/media/js/jquery.dataTables.js',
        'bower_components/datatables/media/js/dataTables.bootstrap.js',
    ])
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('./public'));
});

gulp.task('css',function(){
    return gulp.src([
        'bower_components/bootstrap/dist/css/bootstrap.css',
        'bower_components/bootstrap/dist/css/bootstrap-theme.css',
        'bower_components/datatables/media/js/dataTables.foundation.css',
        'bower_components/datatables/media/js/jquery.dataTables.css',
        'bower_components/datatables/media/js/dataTables.bootstrap.css',
        'bower_components/font-awesome/css/font-awesome.css'
    ])
        .pipe(concat('libs.css'))
        .pipe(csso())
        .pipe(gulp.dest('./public'));
});

gulp.task('fonts',function(){
    return gulp.src([
        'bower_components/bootstrap/fonts/*.*',
        'bower_components/font-awesome/fonts/*.*'
    ])
        .pipe(gulp.dest('./public/fonts/'));
});

gulp.task('default',['js','css','fonts'],function(){
    return;
});
