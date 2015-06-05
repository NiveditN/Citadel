/* publications.js */

/* This temporary function simply returns the set of 
all posts in server side db */

Meteor.publish('posts', function() {
	return Posts.find();
}) 