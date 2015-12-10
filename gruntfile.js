/**
 * Created by jose.soria on 06/16/2015.
 */
module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        files: ['bpg/src/**/*.html','bpg/src/js/**','bpg/src/**/*.css']
        //tasks: ['distribution']
      },
      options: {
        livereload: true
      },
      html: {
        files: 'bpg/src/**/*.html'
      },
      js: {
        files: 'bpg/src/**/*.js'
      },
      css: {
        files: 'bpg/src/**/*.css'
      }
    },
    connect: {
      server: {
        options: {
          livereload: true,
          open: {
            target: 'http://localhost:8000/bpg/src/',
            appName: 'Firefox',
          }
        }
      }
    },
    postcss: {
      options: {
        processors: [
          require('pixrem')(), // add fallbacks for rem units
          require('autoprefixer-core')({browsers: 'last 2 versions'}), // add vendor prefixes
          require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'bpg/css/*.css'
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'bpg/dist/js/bpg.min.js': [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'bower_components/bootstrap/js/dropdown.js',
            'bower_components/bootstrap/js/carousel.js',
            'bower_components/bootstrap/js/affix.js',
            'bower_components/bootstrap/dist/js/bootstrap.min.js',
            'bower_components/moment/min/moment.min.js',
            'bower_components/angular-ui-calendar/src/calendar.js',
            'bower_components/fullcalendar/dist/fullcalendar.min.js',
            'bower_components/fullcalendar/dist/gcal.js',
            'bpg/src/js/app.js',
            'bpg/src/js/controllers.js',
            'bpg/src/js/directives.js',
            'bpg/src/js/filters.js',
            'bpg/src/js/services.js']
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'bpg/dist/css/bpg.min.css': [
            'bpg/src/css/animations.css',
            'bower_components/bootstrap/dist/css/bootstrap.min.css',
            'bower_components/fullcalendar/dist/fullcalendar.css',
            'bpg/src/css/app.css',
            'bpg/src/css/calendar.css'
          ]
        }
      }
    },
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'bpg/dist/index.html': 'tmp/src/index.html',     // 'destination': 'source'
          'bpg/dist/templates/footer.html': 'bpg/src/templates/footer.html',     // 'destination': 'source'
          'bpg/dist/templates/home.html': 'bpg/src/templates/home.html',     // 'destination': 'source'
          'bpg/dist/templates/portafolio.html': 'bpg/src/templates/portafolio.html',     // 'destination': 'source'
          'bpg/dist/templates/por_que_elegirnos.html': 'bpg/src/templates/por_que_elegirnos.html',     // 'destination': 'source'
          'bpg/dist/templates/calendario.html': 'bpg/src/templates/calendario.html',     // 'destination': 'source'
          'bpg/dist/templates/clientes.html': 'bpg/src/templates/clientes.html',     // 'destination': 'source'
          'bpg/dist/templates/contacto.html': 'bpg/src/templates/contacto.html',     // 'destination': 'source'
          'bpg/dist/templates/libreria.html': 'bpg/src/templates/libreria.html',     // 'destination': 'source'
          'bpg/dist/templates/examen.html': 'bpg/src/templates/examen.html',     // 'destination': 'source'
          'bpg/dist/templates/equipo.html': 'bpg/src/templates/equipo.html',     // 'destination': 'source'
          'bpg/dist/templates/modalTemplates.html': 'bpg/src/templates/modalTemplates.html',     // 'destination': 'source'
        }
      }
    },
    processhtml: {
      dist: {
        files: {
          'tmp/src/index.html': ['bpg/src/index.html']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-processhtml');

  grunt.registerTask('server', "Serve your app", ['connect:server','watch']);

  grunt.registerTask('developTest', "Develop Testing", ['watch']);

  grunt.registerTask('distribution', "Prepare files for production", [
    'cssmin', 'processhtml', 'htmlmin', 'uglify']);

};