// Path
const buildFolder = 'build';
const sourceFolder = 'src';
const path = {
        build: {
          html: buildFolder + '/',
          css: buildFolder + '/css/',
          uncss: buildFolder  + '/css/**/*.css',
          js: buildFolder + '/js/',
          img: buildFolder + '/img/',
          webp: buildFolder + '/img/**/*.{jpg,png}',
          svg: buildFolder+ '/img/**/sprite.svg',
          retina: [buildFolder + '/img/@1x/', buildFolder + '/img/@2x/', buildFolder + '/img/@3x/'],
          fonts: buildFolder + '/fonts/',
          libs: buildFolder + '/libs/',
          video:  buildFolder + '/video',
          favIcons: buildFolder + '/favicons'
        },
        src: {
          html: [sourceFolder + '/*.html', '!' + sourceFolder + '/_*.html'],
          css: sourceFolder + '/scss/style.scss',
          js: [sourceFolder + '/js/**/*.js', '!' + sourceFolder + '/js/templates/**/*', '!' + sourceFolder + '/js/plugins/**/*'],
          jsIgnore: [ sourceFolder + '/js/plugins/**/*'],
          img: [sourceFolder + '/img/**/*.{jpg,svg,png,gif,ico,webp}', '!' + sourceFolder + '/img/**/icon-*.svg',  '!' + sourceFolder + '/img/**/_*'],
          imgIgnore: sourceFolder + '/img/**/_*',
          fonts: sourceFolder + '/fonts/**/*.ttf',
          otf: sourceFolder + '/fonts/**/*.otf',
          retina: sourceFolder + '/img/main/**/*{jpg,png}',
          libs: sourceFolder + '/libs/**/*',
          video: sourceFolder + '/video/**/*',
          favIcons: sourceFolder + '/favicons/**/*'
        },
        watch: {
          html: sourceFolder + '/**/*.html',
          css: sourceFolder + '/scss/**/*.scss',
          js: sourceFolder + '/js/**/*.js',
          img: sourceFolder + '/img/**/*.{jpg,svg,png,gif,ico,webp}',
          imgWatch: [buildFolder + '/img/**/*.{jpg,svg,png,gif,ico}', '!' + buildFolder + '/img/**/_*'],
          fonts: sourceFolder + '/fonts/**/*.ttf',
          otf: sourceFolder + '/fonts/**/*.otf',
          svg: sourceFolder + '/img/**/icon-*.svg',
          video: sourceFolder + '/video/**/*',
          libs: sourceFolder + '/libs/**/*',
          favIcons: sourceFolder + '/favicons/**/*'
        },
        clean: './' + buildFolder + '/'
    };


// Plugins
const { src, dest } = require('gulp'),
        gulp = require('gulp'),
        del = require('del'),
        browserSync = require('browser-sync').create(),
        pngMinify = require('imagemin-pngquant'),
        fonter = require('gulp-fonter'),
        posthtml = require('gulp-posthtml'),
        htmlValidator = require('gulp-w3c-html-validator'),
        include = require('posthtml-include'),
        scss = require('gulp-sass'),
        autoprefixer = require('gulp-autoprefixer'),
        groupMedia = require('gulp-group-css-media-queries'),
        csso = require('gulp-csso'),
        rename = require('gulp-rename'),
        plumber = require('gulp-plumber'),
        eslint = require('gulp-eslint'),
        babel = require('gulp-babel'),
        terser = require('gulp-terser'),
        concat = require('gulp-concat'),
        bemValidator = require('gulp-html-bem-validator'),
        gulpStylelint = require('gulp-stylelint'),
        imagemin = require('gulp-imagemin'),
        webp = require('gulp-webp'),
        svgstore = require('gulp-svgstore'),
        htmlmin = require('gulp-htmlmin'),
        ttf2woff = require('gulp-ttf2woff'),
        ttf2woff2 = require('gulp-ttf2woff2'),
        uncss = require('gulp-uncss');
        imageResize = require('gulp-image-resize'),
        imageMagick = require('imagemagick');


// Server
function serve() {
    browserSync.init({
        server: {
            baseDir: './' + buildFolder + '/'
        },
        port: 3000,
        notify: false
    })
}


// HTML
function html() {
    return src(path.src.html)
      .pipe(plumber())
      .pipe(posthtml([
          include()
      ]))
      .pipe(htmlValidator())
      .pipe(bemValidator())
      .pipe(htmlmin({
        collapseWhitespace: true
      }))
      .pipe(dest(path.build.html))
      .pipe(browserSync.stream())
}


// CSS
function css() {
    return src(path.src.css)
      .pipe(plumber())
      .pipe(gulpStylelint({
          failAfterError: false,
          reporters: [
              {
                  formatter: 'string',
                  console: true
              }
          ]
      }))
      .pipe(scss({
          outputStyle: 'expanded'
      }))
      .pipe(groupMedia())
      .pipe(autoprefixer('last 5 versions'))
      .pipe(dest(path.build.css))
      .pipe(csso())
      .pipe(rename({
          extname: '.min.css'
      }))
      .pipe(dest(path.build.css))
      .pipe(browserSync.stream())
}

function uncssInit() {
  return src(path.build.uncss)
    .pipe(plumber())
    .pipe(uncss({
      html: ['build/**/*.html']
    }))
    .pipe(dest(path.build.css))
}


// JS
function js() {
    return src(path.src.js)
      .pipe(plumber())
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(babel({
          presets: ['@babel/env']
      }))
      .pipe(concat('script.js'))
      .pipe(terser())
      .pipe(dest(path.build.js))
      .pipe(browserSync.stream())
}

function jsIgnoreBuild() {
  return src(path.src.jsIgnore)
    .pipe(plumber())
    .pipe(dest(path.build.js + 'plugins/'))
    .pipe(browserSync.stream())
}


// Images
function images() {
  return src(path.watch.imgWatch)
    .pipe(imagemin([
      pngMinify(),
      imagemin.mozjpeg({
        quality: 75, progressive: true
      }),
      imagemin.svgo({
        plugins: [{
          removeViewBox: false
        },
          {
            cleanupIDs: false
          }]
      })
    ],{
      verbose: true
    }))
    .pipe(dest(path.build.img))
}

function ignoreImagesBuild() {
  return src(path.src.imgIgnore)
    .pipe(dest(path.build.img))
}

function favIcons() {
  return src(path.src.favIcons)
    .pipe(dest(path.build.favIcons))
    .pipe(browserSync.stream())
}

  /* Resize to retina + sorting images */
function retinaImages() {
  for(let i = 1; i < 2; i++) { // If you don’t need retina images x3 set the value 'i < 3' to 'i < 2' or vice versa
    return src(path.src.retina)
      .pipe(imageResize({
        width: `${i + 1}00%`
      }))
      .pipe(rename({
        suffix: `@${i + 1}x`
      }))
      .pipe(dest(path.build.retina[i]))
  }
}

function imageSorting () {
    return src(path.src.img)
      .pipe(dest(path.build.img))
}

function sprite() {
  return src(sourceFolder + '/img/**/icon-*.svg')
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(dest(path.build.img))
}

function webpBuild() {
  return src(path.build.webp)
    .pipe(webp({
      quality: 70
    }))
    .pipe(dest(path.build.img))
}


// Fonts
  /* TTF to WOFF/WOFF2 */
function woffConversion() {
  return src(path.src.fonts)
    .pipe(ttf2woff2())
    .pipe(dest(path.build.fonts))
    .pipe(src(path.src.fonts))
    .pipe(ttf2woff())
    .pipe(dest(path.build.fonts))
}

  /* OTF to TTF*/
function ttfConversion() {
  return src(path.src.otf)
    .pipe(fonter({
      formats: ['ttf']
    }))
    .pipe(dest(sourceFolder + '/fonts/'))
    .pipe(src(path.src.fonts))
}


// Watch
function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], gulp.series(js, jsIgnoreBuild));
    gulp.watch([path.watch.img], imageBuild);
    gulp.watch([path.watch.fonts], woffConversion);
    gulp.watch([path.watch.otf], ttfConversion);
    gulp.watch([path.watch.video], videoBuild);
    gulp.watch([path.watch.libs], libs);
    gulp.watch([path.watch.favIcons], favIcons);
}


// Clean/Copy
function clean() {
    return del(path.clean);
}

function cleanGit() {
    return del(sourceFolder + '/**/.gitkeep');
}

function videoBuild() {
  return src(path.src.video)
    .pipe(dest(path.build.video))
    .pipe(browserSync.stream())
}

function libs() {
  return src(path.src.libs)
    .pipe(plumber())
    .pipe(dest(path.build.libs))
    .pipe(browserSync.stream())
}



// Build
const fonts = gulp.series(ttfConversion, woffConversion);
const imageBuild = gulp.series(ignoreImagesBuild, favIcons, sprite, imageSorting, /* retinaImages,  webpBuild, */ images);
const build = gulp.series(clean, gulp.series(imageBuild, videoBuild, css, html, /* uncssInit, */ js, jsIgnoreBuild, libs, fonts));
const watch = gulp.parallel(watchFiles, serve);



//Exports
exports.videoBuild = videoBuild;
exports.uncssInit = uncssInit;
exports.webpBuild = webpBuild;
exports.sprite = sprite;
exports.libs = libs;
exports.jsIgnoreBuild = jsIgnoreBuild;
exports.ignoreImagesBuild = ignoreImagesBuild;
exports.woffConversion = woffConversion;
exports.ttfConversion = ttfConversion;
exports.imageSorting = imageSorting;
exports.retinaImages = retinaImages;
exports.cleanGit = cleanGit;
exports.clean = clean;
exports.css = css;
exports.images = images;
exports.js = js;
exports.build = build;
exports.fonts = fonts;
exports.default = watch;
exports.html = build;
exports.watch = watch;
exports.favIcons = favIcons;
exports.imageBuild = imageBuild;

