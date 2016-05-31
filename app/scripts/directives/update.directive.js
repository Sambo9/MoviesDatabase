'use strict';

/**
 * @ngdoc directive
 * @name angularFireApp.directive:update.directive
 * @description
 * # update.directive
 */
angular.module('angularFireApp')
  .directive('update', function () {
    return {
      templateUrl: 'views/updatetemplate.html',
      restrict: 'E',
      controller: function ($scope, FirebaseConnect, $location) {
        // ===================================
        // ========= Function update =========
        // ===================================
        $scope.update = function (movie) {
          FirebaseConnect.updateMovie(movie)
            .then(function () {
              $scope.updatedSuccess = true;
            })
            .catch(function () {
              $scope.updatedError = true;
            });
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
            $scope.movie.poster = fileToUpload;
          }, false);

          if (file) {
            reader.readAsDataURL(file);
          }
        };

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
