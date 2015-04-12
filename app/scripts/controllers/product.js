'use strict';

/**
 * @ngdoc function
 * @name moltinCodeAcademyApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the moltinCodeAcademyApp
 */
angular.module('moltinCodeAcademyApp')
  .controller('ProductCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
