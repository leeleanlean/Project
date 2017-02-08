// require module
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var minify = require('gulp-minify-css');

var javascriptPath = 'src/javascript/*.js';
var jsPath = 'dest/js';
var sassPath = 'src/sass/views/*.scss';
var cssPath = 'dest/css/views';

// jshint task
gulp.task('jshint',function(){
	gulp.src(javascriptPath)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// javascript task
gulp.task('javascript',function(){
	gulp.src(javascriptPath)
		.pipe(uglify())
		.pipe(concat('comman.min.js'))
		.pipe(gulp.dest(jsPath));
});

// sass task
gulp.task('sass',function(){
	gulp.src(sassPath)
		.pipe(sass())
		.pipe(concat('comman.min.css'))
		.pipe(minify())
		.pipe(gulp.dest(cssPath));
});

// default task
gulp.task('default',function(){
	
	gulp.run('jshint','javascript','sass');

	// watch JavaScript
	gulp.watch(javascriptPath,function(){
		gulp.run('jshint','javascript','sass');
	})

	// watch sass
	gulp.watch(sassPath,function(){
		gulp.run('jshint','javascript','sass');
	})
});