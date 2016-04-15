var gulp = require('gulp')
  , nodemon = require('gulp-nodemon')

var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('serve', [], function() {
	var options = {
	    script: 'app.js',
	    delaytime: 1,
	    env: {
	    	'port': 5000
	    },
	    watch: jsFiles  
	  
	};
	return nodemon(options).on('restart', function(ev){
		console.log('restarting...');
	});
})