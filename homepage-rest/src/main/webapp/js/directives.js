/*global directive, angular */
/* Directives */
angular.module('myApp.directives', ['myApp.services'])
    .directive('appVersion', ['version', function (version) {
        'use strict';
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }])
    .directive('login', ['AuthService', function (AuthService) {
        'use strict';
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
    .directive('loginDropdown', ['AuthService', 'Session', function (AuthService, Session) {
        'use strict';
        return {
            templateUrl: '../templates/logindropdown.html',
            restrict: 'E',
            replace: true,
            link: function (scope, element, attrs) {
                scope.AuthService = AuthService;
                scope.Session = Session;
                scope.logout = function () {
                    AuthService.logout();
                };
            }
        };
    }])
    .directive('menu', function () {
        'use strict';
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
        'use strict';
        return {
            restrict: 'A',
            link: function (scope, element, attrs, controller) {
                var clazz = attrs.activeLink || 'active',
                    path = element.find("a").attr('href');
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
