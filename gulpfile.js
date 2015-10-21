var del        = require('del');
var gulp       = require('gulp');
var babel      = require('gulp-babel');
var concat     = require('gulp-concat');
var eslint     = require('gulp-eslint');
var mocha      = require('gulp-mocha');
var shell      = require('gulp-shell');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('clean', function(cb) {
  del('build/*').then(function(paths) {
    cb();
  });
});

gulp.task('build-client', shell.task([
  'mkdir -p build/client',
  'cd client/ && brunch build --production && cd ..',
  'cp -R client/public build/client'
]));

gulp.task('build-server', function() {
  return gulp.src('**/*.es6')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('server.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build'));
});

gulp.task('lint', function() {
  return gulp.src(['**/*.es6'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('test', function() {
  process.env.NODE_ENV = process.env.NODE_ENV || 'test';
  require('babel/register');
  gulp.src('tests/*.es6', {
    read: false,
  }).pipe(mocha({
    reporter: 'spec',
  }));
});

gulp.task('watch', function() {
  gulp.watch('client/**/*.es6', ['lint', 'build-client']);
  gulp.watch('server/**/*.es6', ['lint', 'test', 'build-server']);
  gulp.watch('tests/**/*.es6', ['lint', 'test']);
});

gulp.task('build', ['clean', 'build-client', 'build-server']);
gulp.task('default', ['lint', 'test', 'build']);
