var gulp = require("gulp");
// var browserSync = require('browser-sync').create();
var sass = require("gulp-sass");
var pkg = require("./package.json");

// Copy third party libraries from /node_modules into /vendor
gulp.task("vendor", function() {
  // Bootstrap
  gulp
    .src([
      "./node_modules/bootstrap/dist/**/*",
      "!./node_modules/bootstrap/dist/css/bootstrap-grid*",
      "!./node_modules/bootstrap/dist/css/bootstrap-reboot*"
    ])
    .pipe(gulp.dest("./vendor/bootstrap"));

  // jQuery
  gulp
    .src([
      "./node_modules/jquery/dist/*",
      "!./node_modules/jquery/dist/core.js"
    ])
    .pipe(gulp.dest("./vendor/jquery"));
});

// Default task
gulp.task("default", ["vendor"]);
gulp.task("default", ["sass"]);

gulp.task("sass", function() {
  return gulp
    .src("sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("css"))
    .pipe(gulp.dest("../public/css"));
});

gulp.task("sass:watch", function() {
  gulp.watch("sass/**/*.scss", ["sass"]);
});

gulp.task("watch", ["sass:watch"]);
