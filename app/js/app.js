'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
  $routeProvider.when('/resume', {templateUrl: 'partials/resume.html', controller: 'ResumeCtrl'});
  $routeProvider.when('/portfolio', {templateUrl: 'partials/portfolio.html', controller: 'PortfolioCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
