/*global module:false, config:false */
module.exports = function (config) {
    'use strict';
    config.set({

        basePath: '../',

        preprocessors: {
            '../main/webapp/templates/**/*.html': ['ng-html2js']
        },

        files: [
            '../main/webapp/bower_components/jquery/jquery.js',
            '../main/webapp/bower_components/angular/angular.js',
            '../main/webapp/bower_components/angular-route/angular-route.js',
            '../main/webapp/bower_components/angular-mocks/angular-mocks.js',
            '../main/webapp/bower_components/angular-resource/angular-resource.js',
            '../main/webapp/js/**/*.js',
            'webapp/unit/**/*.js',
            '../main/webapp/templates/**/*.html'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-ng-html2js-preprocessor'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },

        ngHtml2JsPreprocessor: {
            moduleName: 'preprocessor-templates',
            /*
             * The cache-id (filepath) is absolute. Thus we need to strip /home/.../webapp and
             * prepend a '../' to match the template-attribute in the directive.
             * */
            stripPrefix: '.*/webapp/',
            prependPrefix: '../'
        }

    });
};
