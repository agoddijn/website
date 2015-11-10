app.directive('prettyPrint', function () {
  return {
    link: function($scope, element, attributes) {
      element.html(prettyPrintOne($scope.content.content));
    }
  };
});