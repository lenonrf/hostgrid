'use strict';

/**
 * @ngdoc function
 * @name hostgridApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hostgridApp
 */
angular.module('hostgridApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
