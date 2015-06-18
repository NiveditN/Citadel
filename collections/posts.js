/* posts.js */

/* Declaring client-side variable for 'posts' db collection.
We don't use var to declare this variable because var limits 
the scope of the 'Posts' variable to this particular js file.
We want 'Posts' to be globally accesible throughout the app */

Posts = new Meteor.Collection('posts');

/* Adding permissions */
Posts.allow({
	update: function(userId, post) {
		return ownsDocument(userId, post);
	},
	remove: function(userId, post) {
		return ownsDocument(userId, post);
	}
});

/* Meteor server method to add new post after validation checks */
Meteor.methods({
	postInsert: function(postAtributes) {
		// validation check
		check(Meteor.userId(), String);
		check(postAtributes, {
			title: String,
			url: String
		});
	
		var user = Meteor.user();
		// pick out the whitelisted keys
		var post = _.extend(postAtributes, {
			userId: user._id,
			author: user.username,
			submitted: new Date()
		}); 

		// adding new post to db
		var postId = Posts.insert(post);

		return {
			_id: postId
		};
	}
});