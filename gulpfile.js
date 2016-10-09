var pump = require('pump'),
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer');

const paths = {
  sass: './assets/sass/'
};

gulp.task('styles', function (cb){
  pump([
    gulp.src(paths.sass + '*.scss'),
    sass({
      outputStyle: 'compressed'
    }),
    prefix('last 2 versions'),
    rename({
      suffix: '.min'
    }),
    gulp.dest('./docs/css/')
  ], cb);
});


gulp.task('watch', function (){
  gulp.watch(paths.sass + '**/*', ['styles']);
});

gulp.task('default', [ 'watch', 'styles' ]);
