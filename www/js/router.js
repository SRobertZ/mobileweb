/**
 * Created by RobertSabiryanov on 23.10.15.
 */
var app = angular.module('starter');

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'js/news/controllers/news.controller.html',
    controller: 'NewsListController'

  })
});
