var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

// outputs changes to files to the console
function reportChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}


gulp.task('watch', ['serve'], function() {
  gulp.watch([paths.appBuild, paths.appAurelia], [runSequence('copy-bundle', 'copy-dist'), browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.source, [runSequence('build-system', 'copy-dist'), browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.html, [runSequence('build-html', 'copy-dist'), browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.css, [runSequence('build-css', 'copy-dist'), browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.style, ['copy-styles', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.jspm + '**/*', ['copy-jspm', browserSync.reload]).on('change', reportChange);
  gulp.watch('index.html', ['copy-indexhtml', browserSync.reload]).on('change', reportChange);
  gulp.watch('loading.html', ['copy-loadinghtml', browserSync.reload]).on('change', reportChange);
  gulp.watch('native-styles/**/*', ['copy-native', browserSync.reload]).on('change', reportChange);
  gulp.watch('config.js', ['copy-configjs', browserSync.reload]).on('change', reportChange);
  runSequence(
    'bundle', 
    'copy-bundle', 
    'copy-native', 
    'copy-jspm', 
    'copy-dist', 
    'copy-configjs',
    'copy-styles', 
    'copy-loadinghtml', 
    'copy-indexhtml'
  );
});
