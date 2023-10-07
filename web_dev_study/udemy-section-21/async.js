const fs = require("fs");

function readFile() {
   let fileData;
   fs.readFile("data.txt", function (error, fileData) {
      console.log("parsing file data");
      console.log(fileData.toString());
   });

   console.log("hi lmao");
}

readFile();
