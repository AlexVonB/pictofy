/*!
Copyright 2016 Hochschule der Medien (HdM) / Stuttgart Media University

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://github.com/REMEXLabs/pictofy/blob/master/LICENSE

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var path = require('path');
var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
  return gulp.src('jquery.pictofy.js')
    .pipe(uglify({preserveComments:'license'}))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function(){
  gulp.watch('jquery.pictofy.js', ['default']);
});
