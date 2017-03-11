angular.module('apiFactory', [])
  .factory('apiFactory', function($http) {

    var factory = {};
    
    
    factory.findByTitle = function($scope, title) {
      $http.get($scope.netflixURI + 'title=' + title)
        .success(function(response) {
          $scope.movies.push(response) ;
          $scope.getTitleError = null;
        })
        .error(function(errorResponse) {
          $scope.getTitleError = errorResponse.message;
        });
    };
    
     factory.findByTitlePromise = function($scope, title, i) {
      $http.get($scope.netflixURI + 'title=' + title)
        .then(function(successResponse) {
          $scope.moviesPromise = successResponse.data;
          $scope.moviesList[i].movieName = $scope.moviesPromise.show_title;
          $scope.getTitleError = null;
        }, function(errorResponse) {
          $scope.getTitleError = errorResponse.message;
        });
    };
    
  
    
    factory.findByActor = function($scope, actor) {
      $http.get($scope.netflixURI+'actor=' + actor)
      .success(function(response){
         $scope.movies =  response;
         $scope.getTitleError = null;
      })
      .error(function(errorResponse) {
        $scope.getTitleError = errorResponse.message;
      });
    };
    
    return factory;
  });