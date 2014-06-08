'use strict';

/* Services */
angular.module('myApp.services', [])
    .value('version', '0.1')
    .factory('AuthService', ['$http', 'Session', '$log', function ($http, Session, $log) {
        return {
            login: function (credentials) {
                $http.defaults.headers.common.Authorization = 'Basic ' + btoa(credentials.user + ':' + credentials.password);
                return $http
                    .get("http://localhost:8080/api/secured/checkauthorized")
                    .success(function () {
                        Session.create(credentials.user);
                        $log.info('User logged in');
                    })
                    .error(function (data, status, headers, config) {
                        if (status === 401) {
                            $log.info('Cannot log in: wrong cedentials.');
                        } else {
                            $log.error('Error logging in: ' + status);
                        }
                        delete $http.defaults.headers.common.Authorization;
                    })
            },
            isAuthenticated: function () {
                return !!Session.user;
            }
        }
    }])
    .service('Session', function () {
        this.create = function (user) {
            this.user = user;
        };
        this.destroy = function () {
            this.user = null;
        };
    });
