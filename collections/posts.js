/* posts.js */

/* Declaring client-side variable for 'posts' db collection.
We don't use var to declare this variable because var limits 
the scope of the 'Posts' variable to this particular js file.
We want 'Posts' to be globally accesible throughout the app */

Posts = new Meteor.Collection('posts');