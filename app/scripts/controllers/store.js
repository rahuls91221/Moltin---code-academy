'use strict';

/**
 * @ngdoc function
 * @name moltinCodeAcademyApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the moltinCodeAcademyApp
 */
angular.module('moltinCodeAcademyApp')
  .controller('StoreCtrl', function ($scope, categories) {
    $scope.categories = categories;
    console.log(categories);
  });
