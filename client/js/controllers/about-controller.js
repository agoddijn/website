//For About
//About controller
app.controller('AboutController', ['AboutData', function(AboutData) {
  var vm = this;
  vm.longAbout = AboutData.l;
}]);