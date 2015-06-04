/* posts_list.js */

var postsData = [
	{
		title: 'Saren Arterius',
		author: 'Urdnot Wrex',
		url: 'http://www.binarykillit.com'
	},
	{
		title: 'Harbinger',
		author: 'We Are Harbinger',
		url: 'http://www.assumingcontrol.com'
	},
	{
		title: 'The Illusive Man',
		author: 'TIM',
		url: 'http://www.dammitwhereismycigarette.com'
	},
	// {
	// 	title: '',
	// 	author: '',
	// 	url: ''
	// },
];

Template.postsList.helpers({
	posts: postsData
});