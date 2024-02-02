const retrievePublicIdFromUrl = (url) => {
   let n = url.length;
   let publicId = "";
   for (let i = n - 1; i >= 0; i--) {
      if (url[i] == ".") {
         i--;
         while (url[i] != "/") {
            publicId += url[i];
            i--;
         }
         break;
      }
   }
   return publicId.split("").reverse().join("");
};
