/*global describe:false, it:false, beforeEach:false, expect:false, browser:false, element:false, by:false */
/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function () {
    'use strict';

    browser.get('index.html');

    it('should automatically redirect to /view1 when location hash/fragment is empty', function () {
        expect(browser.getLocationAbsUrl()).toMatch("/home");
    });


    describe('home', function () {

        beforeEach(function () {
            browser.get('index.html#/home');
        });


        it('should render home when user navigates to /home', function () {
            expect(element.all(by.css('[ng-view] div h1')).first().getText()).
                toMatch(/Homepage von Jens Franz/);
        });

    });


    describe('about', function () {

        beforeEach(function () {
            browser.get('index.html#/about');
        });


        it('should render about when user navigates to /about', function () {
            expect(element.all(by.css('[ng-view] p')).first().getText()).
                toMatch(/partial for view 2/);
        });

    });
});
