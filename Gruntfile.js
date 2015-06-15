module.exports = function(grunt){
  // load plungin
  [
    'grunt-contrib-jshint',
    'grunt-exec',
  ].forEach(function(task){
    grunt.loadNpmTasks(task);
  });

  // set plungin
  grunt.initConfig({
    jshint: {
      app: ['selfGame.js', 'public/js/**/*.js', 'lib/**/*.js', 'handlers/**/*.js', 'models/**/*.js'],
      qa:  ['Gruntfile.js', 'public/qa/**/*.js'],
    },
    exec: {
      linkchecker: {cmd: 'linkchecker http://localhost:4000'}
    },
  });

  grunt.registerTask('default', ['jshint', 'exec']);
};
