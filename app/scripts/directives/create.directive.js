'use strict';

/**
 * @ngdoc directive
 * @name angularFireApp.directive:create.directive
 * @description
 * # create.directive
 */
angular.module('angularFireApp')
  .directive('create', function () {
    return {
      templateUrl: '/views/create.template.html',
      restrict: 'E',
      controller: function ($scope, FirebaseConnect, $location, FIREBASE_URL) {
        // ================================
        // ========= Upload image =========
        // ================================
        var fileInput = $('#fileUpload');
        var fileToUpload = null;

        $scope.fileChanged = function () {

            var file = fileInput.get(0).files[0];
            var reader  = new FileReader();

            reader.addEventListener("load", function () {
              fileToUpload = reader.result;
            }, false);

            if (file) {
              reader.readAsDataURL(file);
            }
        };

        // ==============================================
        // ========= Function add/remove actors =========
        // ==============================================
        $scope.addingActor = function () {
          $scope.movie.actors.push({})
        };

        $scope.removeActor = function (index) {
          $scope.movie.actors.splice(index, 1);
        };


        // =====================================
        // ========= Function addMovie =========
        // =====================================
        $scope.addMovie = function () {
          $scope.movie.poster = fileToUpload;

          FirebaseConnect.addMovie($scope.movie)
            .then(function () {
              $scope.movieSuccess = true;
              $scope.movieError = false;
            })
            .catch(function () {
              $scope.movieSuccess = false;
              $scope.movieError = true;
            })
        };
        // $scope.addMovie = function () {
        //   FirebaseConnect.addMovie($scope.movie);
        // };

        // =====================================
        // ========= Function redirect =========
        // =====================================
        $scope.redirect = function (path) {
          $location.path(path);
        }
      },
      link: function postLink(scope, element, attrs) {

      }
    };
  });
