/*global describe:false, it:false, module:false, inject:false, beforeEach:false, expect:false, spyOn:false */
/* jasmine specs for directives go here */

describe('directives', function () {
    'use strict';
    beforeEach(module('myApp.directives'));
    beforeEach(module('preprocessor-templates'));

    describe('app-version', function () {
        it('should print current version', function () {
            module(function ($provide) {
                $provide.value('version', 'TEST_VER');
            });
            inject(function ($compile, $rootScope) {
                var element = $compile('<span app-version></span>')($rootScope);
                expect(element.text()).toEqual('TEST_VER');
            });
        });
    });

    describe('login', function () {
        var $compile, $rootScope;

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));

        it('should replace the element with the template', function () {
            // Compile a piece of HTML containing the directive
            var element = $compile('<login></login>')($rootScope);
            // fire all the watches
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
            expect(element.find('input[ng-model="credentials.user"]').length).toBe(1);
            expect(element.find('input[ng-model="credentials.password"]').length).toBe(1);
            // be sure, that there is no false configuration
            expect(element.find('input[ng-model="credentials.user2"]').length).toBe(0);
        });
    });

    describe('loginDropdown', function () {
        var $compile, $rootScope, AuthServiceMock;

        beforeEach(function () {
            AuthServiceMock = {
                isAuthenticated: function () {
                }
            };

            module(function ($provide) {
                $provide.value('AuthService', AuthServiceMock);
            });
        });

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));

        it('should replace the element with the login-dropdown-template', function () {
            // given
            spyOn(AuthServiceMock, 'isAuthenticated').andReturn(false);

            // Compile a piece of HTML containing the directive
            var element = $compile('<login-dropdown></login-dropdown>')($rootScope);
            // fire all the watches
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
            expect(element.find('.dropdown-menu').length).toBe(1);
            expect(AuthServiceMock.isAuthenticated).toHaveBeenCalled();
        });

        it('should replace the element with the logout-button-template', function () {
            // given
            spyOn(AuthServiceMock, 'isAuthenticated').andReturn(true);

            // Compile a piece of HTML containing the directive
            var element = $compile('<login-dropdown></login-dropdown>')($rootScope);
            // fire all the watches
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
            expect(element.find('a[ng-click="logout()"]').length).toBe(1);
            expect(AuthServiceMock.isAuthenticated).toHaveBeenCalled();
        });

    });

    describe('menu', function () {
        var $compile, $rootScope;

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));

        it('should replace the element with the template', function () {
            // Compile a piece of HTML containing the directive
            var element = $compile('<menu></menu>')($rootScope);
            // fire all the watches
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
            expect(element.find('ul.nav.navbar-nav').length).toBe(1);
        });
    });

});
