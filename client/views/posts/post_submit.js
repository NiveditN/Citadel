/* post_submit.js */

/* This function is used to get the form data from submit post */
Template.postSubmit.events({
	'submit form': function(e) {
		e.preventDefault();

		var post = {
			url: $(e.target).find('[name=url]').val(),
			title: $(e.target).find('[name=title]').val(),
		};

		/* This is a method call to postInsert method 
		on server side to create a new post */
		Meteor.call('postInsert', post, function(error, result) {
			// display the error to the user and abort
			if(error) 
				return alert(error.reason);

			Router.go('postPage', {_id: result._id});
		});
	}
});