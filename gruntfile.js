
/**
 * Tasks definition
 */

const tasks = {}

// sass to css compilation
tasks.sass = {
  dist: {
    src: 'src/assets/scss/main.scss',
    dest: 'dist/assets/css/main.css'
  }
}

// css minification
tasks.cssmin = {
  dist: {
    src: ['dist/assets/css/main.css'],
    dest: 'dist/assets/css/main.min.css'
  }
}

// js files concatenation
tasks.concat = {
  options: { separator: ";" },
  dist: {
    src: ['src/assets/js/main.js'],
    dest: 'dist/assets/js/main.js'
  }
}

// js minification
tasks.uglify = {
  dist: {
    src: 'dist/assets/js/main.js',
    dest: 'dist/assets/js/main.min.js'
  }
}

// html rendering
tasks.assemble = {
  options: {
    assets: 'assets/',
    layout: 'src/layouts/default.html',
    partials: ['src/partials/**/*.html'],
    data: 'src/data.yml',
    helpers: ['handlebars-helper-prettify'],
    prettify: { condense: false },
    production: false
  },
  dist: {
    files: [{
      expand: true,
      cwd: 'src/pages/',
      src: '**/*.html',
      dest: 'dist/'
    }]
  },
  distmin: {
    option: { production: true },
    files: '<%= assemble.dist.files %>'
  }
}

// watch changes
tasks.watch = {
  sass: {
    files: ['src/assets/scss/**/*.scss'],
    tasks: ['sass:dist']
  },
  concat: {
    files: ['src/assets/js/**/*.js'],
    tasks: ['concat:dist']
  },
  assemble: {
    files: ['src/**/*.{html,yml}'],
    tasks: ['assemble:dist']
  }
}

// live server
tasks.browserSync = {
  options: {
    port: 9090,
    open: 'local',
    server: 'dist/',
    watchTask: true,
  },
  files: {
    src: ['dist/**/*.{html,css,js}']
  }
}


/**
 * Grunt setup
 */
module.exports = (grunt) => {

  grunt.initConfig(tasks)

  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-browser-sync')
  grunt.loadNpmTasks('grunt-assemble')

  grunt.registerTask('default', ['sass:dist', 'concat:dist', 'assemble:dist'])
  grunt.registerTask('live', ['default', 'browserSync', 'watch'])
  grunt.registerTask('build-css', ['sass:dist', 'cssmin:dist'])
  grunt.registerTask('build-js', ['concat:dist', 'uglify:dist'])
  grunt.registerTask('build-html', ['assemble:distmin'])
  grunt.registerTask('build', ['build-css', 'build-js', 'build-html'])

}
