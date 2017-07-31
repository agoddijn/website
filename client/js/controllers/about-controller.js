//For About
//About controller
app.controller('AboutController', ['AboutData', '$interval', function(AboutData, $interval) {
    var vm = this;
    vm.longAbout = AboutData.l;
    vm.info = AboutData.info;
    vm.pics = [];
    vm.aboutPics = AboutData.pics;
    vm.picLength = vm.aboutPics.length;
    vm.selected = 0;
    vm.selected2 = Math.ceil(vm.picLength / 2);
    vm.changed = 1;
    vm.resize_width = 740;

    for (var i = 0; i < vm.picLength; i++) {
        pic = {url: vm.aboutPics[i], index: i};
        vm.pics[i] = pic;
    };

    $interval(function() {
        if(vm.changed == 1) {
            vm.selected = (vm.selected + 1) % vm.aboutPics.length;
            vm.changed = 0;
        } else if(vm.changed == 0) {
            vm.selected2 = (vm.selected2 + 1) % vm.aboutPics.length;
            vm.changed = 1;
        }
    }, 3000);

}]);