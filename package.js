Package.describe({
  name    : 'sylido:jquery-querybuilder',
  summary : 'A Meteor wrapper package for the jQuery QueryBuilder plugin.',
  git     : 'https://github.com/syldio/jquery-querybuilder.git',
  version : '0.0.4'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.6.1');
  api.addFiles('query-builder.default.min.css', 'client');
  api.addFiles('query-builder.js', 'client');
  api.export('QueryBuilder', 'client');
});
