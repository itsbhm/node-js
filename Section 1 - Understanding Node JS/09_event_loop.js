const fs = require("fs");
const fileName = "file.txt";

fs.watch(fileName, () => console.log("File Modified"));