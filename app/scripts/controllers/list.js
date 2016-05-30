'use strict';

/**
 * @ngdoc function
 * @name angularFireApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the angularFireApp
 */
angular.module('angularFireApp')
  .controller('ListCtrl', function ($scope, FirebaseConnect) {
    $scope.movies = FirebaseConnect.getMovies();
    $scope.movieSuccess = false;
    $scope.movieError = false;
  });
