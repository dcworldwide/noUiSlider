// package metadata file for Meteor.js

Package.describe({
  name: 'dcworldwide:nouislider',  // http://atmospherejs.com/materialize/materialize
  summary: 'noUiSlider',
  version: '8.0.2',
  git: 'https://github.com/dcworldwide/noUiSlider.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');

  api.addFiles([
    //'distribute/nouislider.min.css',
    'distribute/nouislider.min.js'
  ], 'client');
});
