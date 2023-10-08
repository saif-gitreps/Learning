// one way-> const fs = require("fs");
const fs = require("fs/promises");

async function readFile() {
   let fileData;
   // fs.readFile("data.txt", function (error, fileData) {
   //    console.log("parsing file data");
   //    console.log(fileData.toString());
   // });
   try {
      fileData = await fs.readFile("data.txt");
   } catch (error) {
      console.log(error);
   }
   console.log("First asyncho code");
   console.log(fileData.toString());
   console.log("second asyncho code");
   console.log("hi lmao");
}
readFile();
