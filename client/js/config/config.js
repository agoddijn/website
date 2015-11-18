app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'http://player.vimeo.com/video/**'
  ]);
});