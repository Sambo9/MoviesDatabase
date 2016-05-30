'use strict';

/**
 * @ngdoc function
 * @name angularFireApp.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the angularFireApp
 */
angular.module('angularFireApp')
  .controller('CreateCtrl', function ($scope, NOTE_SELECT) {
    $scope.movieSuccess = false;
    $scope.movieError = false;
    $scope.movie = {};
    $scope.select = NOTE_SELECT;
    $scope.movie.rate = NOTE_SELECT[2];

    $scope.movie.actors = [{}];

  });
