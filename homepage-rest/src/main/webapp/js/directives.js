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
            replace: true
        };
    })
/**
 * Directive for dynamically decide if the current menu item is active. This will be accomplished by comparing the
 * href attribute with the current location. Then the class active will be added on the element.
 */
    .directive('activeLink', ['$location', function (location) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs, controller) {
                var clazz = attrs.activeLink || 'active';
                var path = element.find("a").attr('href');
                path = path.substring(1); //hack because path does not return including hashbang
                scope.location = location;
                scope.$watch('location.path()', function (newPath) {
                    if (path === newPath) {
                        element.addClass(clazz);
                    } else {
                        element.removeClass(clazz);
                    }
                });
            }
        };
    }]);
