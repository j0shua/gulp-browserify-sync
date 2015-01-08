// check out:
// https://github.com/gulpjs/gulp/blob/master/docs/recipes/browserify-uglify-sourcemap.md
// for using package.json.version to control name
//
module.exports = function(baseDir){
    var gulp = require('gulp'),
        browserify = require('browserify'),
        source = require('vinyl-source-stream'),
        buffer = require('vinyl-buffer'),
        uglify = require('gulp-uglify'),
        sourcemaps = require('gulp-sourcemaps');


    gulp.task('default', function(){
        console.log('default task loaded');
        console.log('baseDir is ' + baseDir);

    });


    gulp.task('js', function(){
        return browserify({
                entries: ['./scripts/app.js'],
                debug: true
            })
            .bundle()
            .pipe(source('bundle.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({ loadMaps: true }))
                .pipe(uglify())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./build/'));
    });
};
