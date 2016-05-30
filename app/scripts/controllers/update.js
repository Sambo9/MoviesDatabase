'use strict';

/**
 * @ngdoc function
 * @name angularFireApp.controller:UpdateCtrl
 * @description
 * # UpdateCtrl
 * Controller of the angularFireApp
 */
angular.module('angularFireApp')
  .controller('UpdateCtrl', function ($scope, FirebaseConnect, $routeParams, NOTE_SELECT) {
    $scope.updatedSuccess = false;
    $scope.updatedError = false;


    var id = $routeParams.id;
    FirebaseConnect.getMovie(id)
      .then(function (data) {
      $scope.movie = data;
        $scope.select = NOTE_SELECT;
        $scope.movie.rate = NOTE_SELECT[$scope.movie.rate.id-1];
    })
      .catch(function (error) {
      console.log(error);
    });
  });
