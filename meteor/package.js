Package.describe({
  name: 'mantarayar:emotions-data',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A heirarchy of emotions made to be used with Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/MantarayAR/meteor-emotions-data',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: '../README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('../data/emotions-data.json', 'server');
  api.addFiles('../src/emotions-data.js');
  api.addFiles('../src/emotions-queries.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mantarayar:emotions-data');
  api.addFiles('../tests/emotions-data-tests.js');
  api.addFiles('../tests/emotions-queries-tests.js');
});
