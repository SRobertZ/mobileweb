/**
 * Created by RobertSabiryanov on 23.10.15.
 */
angular.module('starter').service('newsDataService', newsDataService);

newsDataService.$inject = ['$http', '$rootScope'];
function newsDataService($http, $rootScope) {
  this.getNews = function () {
    var url = 'http://oporarb.ru/news/';
    $http.get(url).success(function (result) {
      $rootScope.$broadcast('event.news', result);

    });
  }
}
