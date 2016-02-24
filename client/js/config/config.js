app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'http://player.vimeo.com/video/**',
    'http://www.youtube.com/embed/**'
  ]);
});