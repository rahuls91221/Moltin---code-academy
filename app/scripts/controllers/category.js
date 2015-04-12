'use strict';

/**
 * @ngdoc function
 * @name moltinCodeAcademyApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the moltinCodeAcademyApp
 */
angular.module('moltinCodeAcademyApp')
  .controller('CategoryCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
