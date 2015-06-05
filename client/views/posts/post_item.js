/* post_item.js */

/* This function sets the domain of each post by using 
the url of the 'a' element of that post */

Template.postItem.helpers({
	domain: function() {
		var a = document.createElement('a');
		a.href = this.url;
		return a.hostname;
	}
});