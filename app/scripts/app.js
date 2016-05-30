'use strict';

/**
 * @ngdoc overview
 * @name angularFireApp
 * @description
 * # angularFireApp
 *
 * Main module of the application.
 */
angular
  .module('angularFireApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'firebase',
    'ngCookies'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl',
        controllerAs: 'list'
      })
      .when('/create', {
        templateUrl: 'views/create.html',
        controller: 'CreateCtrl',
        controllerAs: 'create'
      })
      .when('/update/:id', {
        templateUrl: 'views/update.html',
        controller: 'UpdateCtrl',
        controllerAs: 'update'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('FIREBASE_URL', 'https://moviesdatabase.firebaseio.com/')
  .constant('NOTE_SELECT',
    [
      {id:1, name: 'mauvais'},
      {id:2, name: 'bof'},
      {id:3, name: 'moyen'},
      {id:4, name: 'pas mal'},
      {id:5, name: 'super'},
    ]
  );
