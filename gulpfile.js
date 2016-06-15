var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	jade = require('gulp-jade');

gulp.task('sass', function() {
	return gulp.src('resourses/sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('public/css'))
	.pipe(browserSync.reload({stream: true}))
});
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'public'
		},
		notify: false
	});
});
gulp.task('jade', function() {
	return gulp.src('resourses/jade/index.jade')
		.pipe(jade())
		.pipe(gulp.dest('public'))
});

gulp.task('watch', ['browser-sync', 'sass', 'jade'], function() {
	gulp.watch('resourses/sass/*.scss', ['sass']);
	gulp.watch('resourses/jade/*.jade', ['jade']);
	gulp.watch('public/*.html', browserSync.reload);

});
