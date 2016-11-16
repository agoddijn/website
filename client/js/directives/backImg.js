app.directive('backImg', function(){
  return {
    link: function($scope, element, attributes) {
      var url = $scope.blog.image;
      element.css({
        'background-image': 'url(' + url +')',
        'backgroud-size': 'cover',
        'background-repeat': 'no-repeat',
      });
    }
  };
});