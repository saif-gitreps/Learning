// one way-> const fs = require("fs");
const fs = require("fs/promises");

function readFile() {
   let fileData;
   // fs.readFile("data.txt", function (error, fileData) {
   //    console.log("parsing file data");
   //    console.log(fileData.toString());
   // });
   fs.readFile("data.txt")
      .then((fileData) => {
         console.log("First asyncho code");
         console.log(fileData.toString());
      })
      .then(() => {
         console.log("second asyncho code");
      });

   console.log("hi lmao");
}

readFile();
