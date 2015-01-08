module.exports = function(baseDir){
    var gulp = require('gulp'),
        browserify = require('browserify'),
        source = require('vinyl-source-stream');


    gulp.task('default', function(){
        console.log('default task loaded');
        console.log('baseDir is ' + baseDir);

    });


    gulp.task('js', function(){
        return browserify('./scripts/app.js')
            .bundle()
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('./build/'));
    });
};
