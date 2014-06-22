/*global describe:false, it:false, module:false, inject:false, beforeEach:false, expect:false */
/* jasmine specs for directives go here */

describe('directives', function () {
    'use strict';
    beforeEach(module('myApp.directives'));

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

        beforeEach(module('preprocessor-templates'));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));

        it('should replace the login-element by the template', function () {
            // Compile a piece of HTML containing the directive
            var element = $compile('<login></login>')($rootScope);
            // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
            expect(element.find('input[ng-model="credentials.user"]').length).toBe(1);
            expect(element.find('input[ng-model="credentials.password"]').length).toBe(1);
            // be sure, that there is no false configuration
            expect(element.find('input[ng-model="credentials.user2"]').length).toBe(0);
        });
    });
});
