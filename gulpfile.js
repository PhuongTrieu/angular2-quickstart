//gọi các plugin cần thiết
var gulp          = require('gulp'),
    uglify        = require('gulp-uglify'),
    concat        = require('gulp-concat'),
    autoprefix    = require('gulp-autoprefixer'),
    minifyCSS     = require('gulp-minify-css'),

// khai báo các đường dẫn và file sẽ dùng
var paths = {
  css: [
    'app/assets/stylesheets/app.component.css',
    'app/assets/stylesheets/dashboard.component.css',
    'app/assets/stylesheets/hero-detail.component.css',
    'app/assets/stylesheets/heroes.component.css',
    'app/assets/stylesheets/sample.css',
    'app/assets/stylesheets/styles.css',
  ]
};

//tạo task cho js
gulp.task('js', function() {
 gulp.src(paths.js)
 .pipe(uglify())
 .pipe(concat('systemjs.config.js'))
 .pipe(gulp.dest('public/js'));
});

//tạo task cho css
gulp.task('css', function() {
 gulp.src(paths.css)
 .pipe(minifyCSS())
 .pipe(gulp.dest('public/css'));
});

//tạo task watch để theo dõi các file nếu file thay đổi thì thực hiện các task liên quan
gulp.task('watch', function() {
 gulp.watch(paths.css, ['css']);
});

//tạo task default : là các việc sẽ làm tuần tự khi ta chỉ dùng lệnh gulp ko kèm option task nào
gulp.task('default', ['js', 'css', 'watch']);
