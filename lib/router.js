/* router.js */

/* Configuration used for iron-router */

// layout
Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() {
		/* This function subscribes to the posts publication */
		return Meteor.subscribe('posts');
	}
});

// home
Router.route('/', {name: 'postsList'});

// post page
Router.route('/posts/:_id', {
		name: 'postPage',
		data: function() {
			return Posts.findOne(this.params._id);
		}
	});

// add new post
Router.route('/submit',	{name: 'postSubmit'});

// function for routes that require login
var requireLogin = function() {
	if(! Meteor.user()) {
		if (Meteor.loggingIn())
			this.render(this.loadingTemplate);
		else
			this.render('accessDenied');		
	} 
	else {
		this.next();
	}
}

// checking if user is logged in before routing to 
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
// checks if data exists in case of post page
Router.onBeforeAction('dataNotFound', {only: 'postPage'});