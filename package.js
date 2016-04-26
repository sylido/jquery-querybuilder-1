Package.describe({
	name: 'bshamblen:jquery-querybuilder',
	summary: 'A Meteor wrapper package for the jQuery QueryBuilder plugin.',
	git: 'https://github.com/bshamblen/jquery-querybuilder.git',
	version: '0.0.1'
});

Package.onUse(function(api) {
	api.versionsFrom('METEOR@1.0');
	api.addFiles('query-builder.default.min.css', 'client');
	api.addFiles('query-builder.standalone.js', 'client');
});