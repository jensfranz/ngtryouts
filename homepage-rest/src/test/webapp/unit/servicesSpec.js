'use strict';

/* jasmine specs for services go here */

describe('service', function () {
    beforeEach(module('myApp.services'));

    describe('version', function () {
        it('should return current version', inject(function (version) {
            expect(version).toEqual('0.1');
        }));
    });

    describe('AuthService', function () {
        var sessionMock, AuthService, $httpBackend, $http;

        beforeEach(function () {
            sessionMock = {
                create: jasmine.createSpy(),
                destroy: jasmine.createSpy()
            };

            module(function ($provide) {
                $provide.value('Session', sessionMock);
            });

            inject(function ($injector) {
                AuthService = $injector.get('AuthService');
                $httpBackend = $injector.get('$httpBackend');
                $http = $injector.get('$http');
            });
        });

        it('should not be null', function () {
            expect(AuthService).toBeDefined();
        });

        describe('login function', function () {
            var credentials, authHeader, checkAuthUrl;
            beforeEach(function () {
                credentials = {user: 'tom', passwort: 'mot'};
                authHeader = 'Basic ' + btoa(credentials.user + ':' + credentials.password);
                checkAuthUrl = 'http://localhost:8080/api/secured/checkauthorized';
            });

            it('should create a session and change default auth headers on success', function () {
                // given
                $httpBackend.expectGET(
                    checkAuthUrl,
                    function (headers) {
                        return headers['Authorization'] == authHeader;
                    }
                ).respond(201);

                // when
                AuthService.login(credentials);
                $httpBackend.flush();

                // then
                expect(sessionMock.create.callCount).toEqual(1);
                expect(sessionMock.create).toHaveBeenCalledWith(credentials.user);
                expect(sessionMock.destroy).not.toHaveBeenCalled();
                expect($http.defaults.headers.common['Authorization']).toBe(authHeader);
            });

            it('should not create a session and delete Auth header on fail', function () {
                // given
                $httpBackend.expectGET(
                    checkAuthUrl,
                    function (headers) {
                        return headers['Authorization'] == authHeader;
                    }
                ).respond(401);

                // when
                AuthService.login(credentials);
                $httpBackend.flush();

                // then
                expect(sessionMock.create).not.toHaveBeenCalled();
                expect(sessionMock.destroy).not.toHaveBeenCalled();
                expect($http.defaults.headers.common['Authorization']).toBeUndefined();
            });
        });

        describe('logout function', function () {
            beforeEach(function () {
                $http.defaults.headers.common.Authorization = 'mock';
            });

            it('should destroy session and delete Auth header', function () {
                // when
                AuthService.logout();

                // then
                expect($http.defaults.headers.common.Authorization).not.toBeDefined();
                expect(sessionMock.destroy).toHaveBeenCalled();
            });
        });

        describe('isAuthenticated function', function () {
            it('should be authenticated', function () {
                // given
                sessionMock.user = 'tom';

                // when
                var isAuthenticated = AuthService.isAuthenticated();

                // then
                expect(isAuthenticated).toBeTruthy();
            });

            it('should NOT be authenticated', function () {
                // given
                sessionMock.user = undefined;

                // when
                var isAuthenticated = AuthService.isAuthenticated();

                // then
                expect(isAuthenticated).toBeFalsy();
            });
        });

    });

    describe('Session', function () {
        var Session;

        beforeEach(inject(function (_Session_) {
            Session = _Session_;
        }));

        it('should set its user on create', function () {
            // when
            var user = 'user';
            Session.create(user);

            // then
            expect(Session.user).toBe(user);
        });

        it('should unset its user on destroy', function () {
            // given
            Session.create('user');

            // when
            Session.destroy();

            // then
            expect(Session.user).toBeNull();
        });
    });

});
