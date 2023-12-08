const loadCommentsButton = document.getElementById("load-comments-btn");

loadCommentsButton.addEventListener("click", async (event) => {
   const postId = loadCommentsButton.dataset.postid;
   const response = await fetch(`/posts/${postId}/comments`);
   const responseData = await response.json();
   console.log(responseData);
});
