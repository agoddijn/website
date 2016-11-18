app.directive('blogHeight', function($window){
  return {
    link: function($scope, element, attributes) {
      $window.onresize = function() {
        changeHeight();
        $scope.$apply();
      };
      changeHeight();
      function changeHeight() {
        var screenWidth = $window.innerWidth;
        if (screenWidth > 991) {
          element.css({
            'max-height': $scope.blog.heightDesktop + 'px'
          });
        } else {
          element.css({
            'max-height': $scope.blog.heightMobile + 'px'
          });
        }
      }
    }
  };
});