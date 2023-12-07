const filePicker = document.getElementById("image");
const imagePreview = document.getElementById("image-preview");

filePicker.addEventListener("change", (event) => {
   const files = filePicker.files;
   if (!files || files.length == 0) {
      imagePreview.style.display = "none";
      return;
   }
   const pickedFile = files[0];
   imagePreview.src = URL.createObjectURL(pickedFile);
   imagePreview.style.display = "block";
});
