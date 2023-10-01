const fs = require("fs");

function readFile() {
   try {
      const fileData = fs.readFileSync("data.json");
   } catch {
      console.log("failed attempt at reading data");
   }
   console.log("hi there!");
}

readFile();
