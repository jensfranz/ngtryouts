module.exports = function (config) {
    config.set({

        basePath: '../',

        files: [
            '../main/webapp/bower_components/jquery/jquery.js',
            '../main/webapp/bower_components/angular/angular.js',
            '../main/webapp/bower_components/angular-route/angular-route.js',
            '../main/webapp/bower_components/angular-mocks/angular-mocks.js',
            '../main/webapp/bower_components/angular-resource/angular-resource.js',
            '../main/webapp/js/**/*.js',
            'webapp/unit/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
