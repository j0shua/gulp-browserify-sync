module.exports = function(){

    var gulp = require('gulp'),
        browserSync = require('browser-sync');

    gulp.task('bs', function() {
        browserSync({
            server: {
                baseDir: "./build"
            }
        });
    });

    gulp.task('watch', ['js', 'bs'], function(){
        gulp.watch('./scripts/**/*.js', ['js', browserSync.reload]);
    });
};
