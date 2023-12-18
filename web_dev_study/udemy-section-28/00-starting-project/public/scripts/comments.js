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

async function loadCommentsCallback(event) {
   const postId = loadCommentsButton.dataset.postid;
   const response = await fetch(`/posts/${postId}/comments`);
   // we convert the response to json
   const responseData = await response.json();

   if (responseData && responseData.length > 0) {
      // we create a new list of comments
      const newCommentList = createSectionList(responseData);
      // we replace the old list with the new one
      commentSection.innerHTML = "";
      commentSection.appendChild(newCommentList);
   } else {
      commentSection.firstElementChild.textContent = "No comments yet!";
   }
}

loadCommentsButton.addEventListener("click", loadCommentsCallback);

commentForm.addEventListener("submit", async (event) => {
   event.preventDefault();
   const postId = commentForm.dataset.postid;
   const enteredTitle = commentTitle.value;
   const enteredText = commentText.value;

   // converting the data to pre json format
   const actualComment = {
      title: enteredTitle,
      text: enteredText,
   };

   const response = await fetch(`/posts/${postId}/comments`, {
      method: "POST",
      body: JSON.stringify(actualComment),
      headers: {
         "Content-Type": "application/json",
      },
   });

   // so after we added the comment , we reload the comments
   loadCommentsCallback();
});
