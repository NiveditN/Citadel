/* posts_list.js */

/* This function finds and returns all the Posts in 
client-side MiniMongo.
Used for populating postsList template */

Template.postsList.helpers({
	posts: function() {
		return Posts.find()
	}
});