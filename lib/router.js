/* router.js */

/* Configuration used for iron-router */

// layout
Router.configure({
	layoutTemplate: 'layout'
});

// home
Router.route('/', {name: 'postsList'});


