const loadCommentsButton = document.getElementById("load-comments-btn");
const commentSection = document.getElementById("comments");
const commentForm = document.querySelector("#comments-form form");
const commentTitle = document.getElementById("title");
const commentText = document.getElementById("text");

function createSectionList(comments) {
   const commentList = document.createElement("ol");
   for (let comment of comments) {
      const commentElement = document.createElement("li");
      commentElement.innerHTML = `
        <article class="comment-item">
            <h2>${comment.title}</h2>
            <p>${comment.text}</p>
        </article>
      `;
      commentList.appendChild(commentElement);
   }
   return commentList;
}

loadCommentsButton.addEventListener("click", async (event) => {
   const postId = loadCommentsButton.dataset.postid;
   const response = await fetch(`/posts/${postId}/comments`);
   const responseData = await response.json();

   console.log(responseData);

   const newCommentList = createSectionList(responseData);
   commentSection.innerHTML = "";
   commentSection.appendChild(newCommentList);
});

commentForm.addEventListener("submit", async (event) => {
   event.preventDefault();
   const postId = commentForm.dataset.postid;
   const enteredTitle = commentTitle.value;
   const enteredText = commentText.value;

   console.log(enteredTitle, enteredText);

   const actualComment = {
      title: enteredTitle,
      text: enteredText,
   };

   await fetch(`/posts/${postId}/comments`, {
      method: "POST",
      body: JSON.stringify(actualComment),
      headers: {
         "Content-Type": "application/json",
      },
   });
});
