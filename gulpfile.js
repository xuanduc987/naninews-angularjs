var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var concat = require('gulp-concat')
var gulpFilter = require('gulp-filter');
var del = require('del');
var runSequence = require('run-sequence');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('bower', function() {
    var jsFilter = gulpFilter('**/*.js', { restore: true })
    return gulp.src(mainBowerFiles())
    .pipe(jsFilter)
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('build/js/'))
    .pipe(jsFilter.restore)
    .pipe(gulpFilter('**/*.css'))
    .pipe(concat('lib.css'))
    .pipe(gulp.dest('build/css/'))
    .pipe(reload({ stream: true }));
});

gulp.task('clean', function() {
    return del(['build']);
});

gulp.task('build:html', function() {
    return gulp.src('src/**/*.html')
    .pipe(gulp.dest('build/'))
    .pipe(reload({ stream: true }));
});

gulp.task('build:js', function() {
    return gulp.src([
        'src/app/**/*.module.js',
        'src/app/**/!(*.module).js',
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('build/js/'))
    .pipe(reload({ stream: true }));
});

gulp.task('build:css', function() {
    return gulp.src('src/css/**/*.css')
    .pipe(postcss([cssnext]))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('build/css/'))
    .pipe(reload({ stream: true }));
});

gulp.task('build', function(callback) {
    runSequence('clean',
                ['bower', 'build:html', 'build:js', 'build:css'],
                callback);
});

gulp.task('serve', ['build'], function() {
    browserSync({ server: 'build' });

    gulp.watch('src/**/*.html', ['build:html']);
    gulp.watch('src/app/**/*.js', ['build:js']);
    gulp.watch('src/css/**/*.css', ['build:css']);
});

gulp.task('default', ['serve']);
