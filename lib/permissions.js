/* permissions.js */

/* This file loads our permision logic first and is available 
in both environments (as it is in the lib folder - 
and the lib folder always loads first) */

// check that the user id specified owns the documents
ownsDocument = function(userId, doc) {
	return doc && doc.userId === userId;
}