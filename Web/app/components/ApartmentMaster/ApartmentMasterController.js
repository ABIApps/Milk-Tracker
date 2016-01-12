$(document).ready(function(){
  // the main firebase reference
  var rootRef = new Firebase('https://vivid-inferno-3652.firebaseio.com/');
	  var postsRef = rootRef.child("APARTMENTHELPER");
  var newPostRef = postsRef.push();
  newPostRef.set({
    author: "gracehop",
    title: "Announcing COBOL, a New Programming Language"
  });
  // we can also chain the two calls together
  postsRef.push().set({
    author: "alanisawesome",
    title: "The Turing Machine"
  });
});