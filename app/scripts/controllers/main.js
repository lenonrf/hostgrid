'use strict';

/**
 * @ngdoc function
 * @name hostgridApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hostgridApp
 */
angular.module('hostgridApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
