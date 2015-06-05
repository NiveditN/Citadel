/* fixtures.js */

/* This function returns a default set of posts if 
the post count in client side MiniMongo is zero */

if(Posts.find().count() === 0) {
	Posts.insert({
		title: 'Saren Arterius',
		author: 'Urdnot Wrex',
		url: 'http://www.binarykillit.com'
	})
	Posts.insert({
		title: 'Harbinger',
		author: 'We Are Harbinger',
		url: 'http://www.assumingcontrol.com'
	})
	Posts.insert({
		title: 'The Illusive Man',
		author: 'TIM',
		url: 'http://www.dammitwhereismycigarette.com'
	})
}