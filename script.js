// Code goes here
angular.module('mainApp', ['apiFactory'])
  .controller('mainCtrl', function($scope, $http, apiFactory) {
     $scope.netflixURI = 'http://netflixroulette.net/api/api.php?';
     $scope.movies = [];
     $scope.moviesList = [];
     $scope.moviesPromise = [];
      $scope.createWorker = function() {

      var findByTitle = function(title) {
        apiFactory.findByTitle($scope, title);
      };
      
       var findByTitlePromise = function(title, i) {
        apiFactory.findByTitlePromise($scope, title, i);
      };
      
      var findByActor = function(actor){
        console.log('find by actor');
        apiFactory.findByActor($scope, actor);
      }

      $scope.returnUnique = function(arr) {
        var u = {},
          a = [];
        for (var i = 0, l = arr.length; i < l; ++i) {
          if (!u.hasOwnProperty(arr[i])) {
            a.push(arr[i]);
            u[arr[i]] = 1;
          }
        }
        return a;
      }

      return {
        findByTitle: findByTitle,
        findByActor: findByActor
      };
    };

    $scope.worker = $scope.createWorker();
  });
