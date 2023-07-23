import fs, { readFile, writeFile } from "fs";

const filePath = "./test.txt";
const data = "This is the data to be written to the file.";

writeFile(filePath, data, "utf8", (err) => {
  if (err) {
    console.error("Error writing to file:", err);
    return;
  }

  console.log("Data has been written to the file.");
});

// const result = fs.readFileSync(filePath, "utf8");
// console.log("this is the data", result);

try {
  fs.writeFileSync(filePath, data, "utf8");
  console.log("Data has been written to the file synchronously.");
} catch (err) {
  console.error("Error writing to file:", err);
}

/*
  Note:- this will replace Entire data in the file 
        If you want to append the data to the file you can use fs.appendFile() or fs.appendFileSync()

*/
