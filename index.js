'use strict';

const mandelbrot = require('@frctl/mandelbrot');

/*
 * Configure the theme
 */
const subTheme = mandelbrot({
  skin: "navy",
  styles: ['/subtheme/css/style.css', '/build/css/hds-all.min.css', '/subtheme/js/jquery-ui.min.css'],
  scripts: ['/subtheme/js/jquery-3.5.1.min.js', '/subtheme/js/jquery-ui.min.js'],
  format: 'yaml',
  nav: ['docs', 'components'],
  panels: ["notes", "html", "info", "resources"]
});

/*
 * Specify a template directory to override any view templates
 */
subTheme.addLoadPath(__dirname + '/views');

/*
 * Specify the static assets directory that contains the custom stylesheet.
 */
subTheme.addStatic(__dirname + '/dist', '/subtheme');

/*
 * Export the customised theme instance so it can be used in Fractal projects
 */
module.exports = subTheme;
