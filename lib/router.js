/* router.js */

/* Configuration used for iron-router */

// layout
Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() {
		/* This function subscribes to the posts publication */
		return Meteor.subscribe('posts');
	}
});

// home
Router.route('/', {name: 'postsList'});
