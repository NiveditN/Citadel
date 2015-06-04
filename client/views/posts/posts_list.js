/* posts_list.js */

Template.postsList.helpers({
	posts: function() {
		return Posts.find()
	}
});