'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function () {
    beforeEach(module('myApp.controllers'));


    it('should have a HomeCtrl', inject(function ($controller) {
        //spec body
        var homeCtrl = $controller('HomeCtrl', { $scope: {} });
        expect(homeCtrl).toBeDefined();
    }));

    it('should have a AboutCtrl', inject(function ($controller) {
        //spec body
        var aboutCtrl = $controller('AboutCtrl', { $scope: {} });
        expect(aboutCtrl).toBeDefined();
    }));
});
