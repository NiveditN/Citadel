/* post_item.js */

/* This function sets the domain of each post by using 
the url of the 'a' element of that post */

Template.postItem.helpers({
	ownPost: function() {
		return this.userId == Meteor.userId();
	},

	domain: function() {
		var a = document.createElement('a');
		a.href = this.url;
		return a.hostname;
	}
});