app.directive('blogHeight', function(){
  return {
    link: function($scope, element, attributes) {
      element.css({
        'max-height': $scope.blog.height + 'px'
      });
    }
  };
});