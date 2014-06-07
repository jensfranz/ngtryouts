'use strict';

/* Directives */


angular.module('myApp.directives', [])
    .directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }])
    .directive('login', ['AuthService', function (AuthService) {
        return {
            templateUrl: '../templates/login.html',
            restrict: 'E',
            replace: true,
            link: function (scope, element, attrs) {
                scope.login = function () {
                    AuthService.login(scope.credentials);
                };
            }
        };
    }])
    .directive('menu', function () {
        return {
            templateUrl: '../templates/menu.html',
            restrict: 'E',
            replace: true,
            link: function (scope, element, attrs) {

            }
        };
    });
