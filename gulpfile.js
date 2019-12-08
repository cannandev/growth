const { src, dest, parallel } = require( 'gulp' );
const sass = require( 'gulp-sass' );
const minifyCSS = require( 'gulp-csso' );
const concat = require( 'gulp-concat' );

sass.compiler = require( 'node-sass' );

function css() {
  return src( '_sass/style.scss' )
    .pipe( sass() )
    .pipe( minifyCSS() )
    .pipe( dest( 'css' ) )
}

function js() {
  return src( 'js/*.js', { sourcemaps: true } )
    .pipe( concat( 'app.min.js' ) )
    .pipe( dest( 'js', { sourcemaps: true } ) )
}

exports.js = js;
exports.css = css;
exports.default = parallel( css, js );