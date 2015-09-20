/**
 * Spritesmith - automatically creates sprites from the specifed files.
 */
module.exports = function(grunt) {
  'use strict';
  grunt.config('sprite', {
    dist1x: {
      src: '<%= xh.src %>/img/sprites/1x/*.{png,jpg,gif}',
      dest: '<%= xh.dist %>/img/common/sprites@1x.png',
      destCss: '<%= xh.src %>/scss/setup/_sprites@1x.scss',
      cssTemplate: '<%= xh.src %>/scss/setup/_sprites.scss.mustache',
      algorithm: 'binary-tree',
      engine: 'pngsmith',
      padding: 2,
      cssVarMap: function (sprite) {
        sprite.name = 'sprite-1x-' + sprite.name;
      },
      cssOpts: {
        // map: 'sprite-1x'
        functions: false
      }
    },
    dist2x: {
      src: '<%= xh.src %>/img/sprites/2x/*.{png,jpg,gif}',
      dest: '<%= xh.dist %>/img/common/sprites@2x.png',
      destCss: '<%= xh.src %>/scss/setup/_sprites@2x.scss',
      cssTemplate: '<%= xh.src %>/scss/setup/_sprites.scss.mustache',
      algorithm: 'binary-tree',
      engine: 'pngsmith',
      padding: 4,
      cssVarMap: function (sprite) {
        sprite.name = 'sprite-2x-' + sprite.name;
      },
      cssOpts: {
        // map: 'sprite-2x',
        // functions: false
      }
    }
  });
};
