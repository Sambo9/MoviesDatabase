'use strict';

/**
 * @ngdoc service
 * @name angularFireApp.firebaseConnect
 * @description
 * # firebaseConnect
 * Factory in the angularFireApp.
 */
angular.module('angularFireApp')
  .factory('FirebaseConnect', function (FIREBASE_URL, $firebaseAuth, $firebaseArray, $cookies, $window) {

    var ref = new Firebase(FIREBASE_URL + '/movies');
    var authData = ref.getAuth();
    var auth = $firebaseAuth(ref);
    var movies = $firebaseArray(ref);

    if(authData) {
      $window.location = './404.html';
    }
    function getAuth() {
        auth.$authWithPassword({
          email: 'sambo@gmail.com',
          password: '090985'
        }).then(function (authData) {
          //console.log(authData);
          $cookies.putObject('token', authData);
        }).catch(function (error) {
          // console.log('Error authentication :', error);
        });
    }

    function getMovie(id) {
     return movies.$loaded()
        .then(function(data) {
          return data.$getRecord(id);
        }).catch(function(error) {
        // console.log(error);
      })
    }

    function getMovies() {
      return movies;
    }

    function addMovie(movie) {
      return movies.$add(
        {
          title: movie.title,
          director: movie.director,
          actors: movie.actors,
          poster: movie.poster,
          rate: movie.rate
        }
      )
        .then(function (movie) {
        // console.log('Movie added!');
      })
        .catch(function (error) {
        // console.log('Movie not added ' + error);
      });
    }
    

    function updateMovie (id) {
      return movies.$save(id)
        .then(function (movie) {
          // console.log('Movie updated!' );
        })
        .catch(function (error) {
          // console.log(error);
        })
    }


    function deleteMovie (movie) {
      return movies.$remove(movie)
        .then(function (movie) {
        // console.log('Movie deleted!');
      })
        .catch(function (error) {
          // console.log('Movie not deleted ', error);
        });
    }


    // Public API here
    return {
      getAuth: getAuth,
      getMovie: getMovie,
      getMovies: getMovies,
      addMovie: addMovie,
      updateMovie: updateMovie,
      deleteMovie: deleteMovie

    };
  });
