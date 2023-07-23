/*

    SYNTAX
        fs.readFile(path, [options], callback)
        path (string or URL) ==>  path to read your file
        options  (object, optional) ==> 
            encoding (string, optional):  default null
                Common values are 'utf8', 'ascii', 'latin1', 'base64', etc.
            flag (string, optional):  Default is 'r'
                file mode or how to open the file
                Common values are 'r' (read mode), 'w' (write mode), 'a' (append mode), etc.
        callback (function): 
            The callback function has two parameters: err , data
                err (Error): If an error occurs during reading, 
                        this parameter will contain an Error object with the error information. 
                        If no error occurs, this parameter will be null.
                data (string or Buffer): If file system reads successfully defauld utf8 will be used
                    if 'utf8' is used data will be string.
                    if any parameters used the data will be Buffer object that contains raw binary data of files

*/

const fs = require("fs");
const filePath = "../../intro.txt";

fs.readFile(filePath, "binary", (err, data) => {
  if (err) {
    console.error("Error occur while reading File : ", err);
    return;
  }
  console.log(data);
});

fs.readFile(filePath, (err, tempData) => {
  // ...
  console.log(tempData);
});

//readFile is (asynchronous)
// readFileSync is (synchronous) this is will wait until reading file is success
//It won't allow to move next without file success.

try {
  const data = fs.readFileSync(filePath, "utf8"); //readFileSync(path,[options])
  console.log("File contents:", data);
} catch (err) {
  console.error("Error reading file:", err);
}
