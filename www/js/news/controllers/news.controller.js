/**
 * Created by RobertSabiryanov on 23.10.15.
 */
angular.module('starter').controller('NewsListController', NewsListController);

NewsListController.$inject = ['$scope', 'newsDataService', '$ionicLoading', '$ionicListDelegate','$ionicSideMenuDelegate'];
function NewsListController(scope, newsDataService, $ionicLoading, $ionicListDelegate,$ionicSideMenuDelegate) {
  $ionicLoading.show({
    template: 'Загрузка'
  });
  scope.news = [];
  scope.$on('event.news', function (envelop, result) {
    var parsedNews = $('div.news_list>div.item', $.parseHTML(result));

    for (var i = 0; i < parsedNews.length; i++) {
      var newsElementItem = parsedNews[i];
      var img = $('img', newsElementItem).attr('src');
      var text = $('div.desc>p', newsElementItem).text();
      scope.news.push({
        img: img,
        text: text

      });
    }
    $ionicLoading.hide();

  });
  scope.showNews = function () {
  };
  scope.share = function () {
    $ionicListDelegate.closeOptionButtons();
  };
  scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
  newsDataService.getNews();
}
