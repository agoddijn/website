//For About
//About controller
app.controller('AboutController', ['AboutData', function(AboutData) {
  var vm = this;
  vm.longAbout = AboutData.l;
  vm.hs = AboutData.hs;
  vm.uni = AboutData.uni;
  vm.home = AboutData.home;
  vm.langs = AboutData.langs;
}]);