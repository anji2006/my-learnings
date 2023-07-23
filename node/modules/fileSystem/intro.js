/*fs stands for file system , It's is Built-in core module
    1.It has provides an API for interacting with the file system of the underlying operating system.
    2. The fs module allows you to perform various file-related operations,
    such as reading from files, writing to files, creating new files, deleting files, modifying file permissions, and more.
 */

/* 
    Some use cases of fs 

    1) Reading Files: 
            -->  You can read the contents of a file using functions like fs.readFile() or fs.readFileSync().
            --> This is useful when you need to load configuration files, templates, or any other data from files.

    2) Writing to Files:
            -->   The fs.writeFile() or fs.writeFileSync() functions enable you to write data to files. 
            --> commonly used when saving data from your application to disk, such as logs,
                 user-generated content, or configuration updates.
            
    3) Working with Directories:
            -->   Functions like fs.readdir() and fs.mkdir() allow you to list the contents 
                of a directory or create new directories, respectively.. 
    4) Deleting Files and Directories: 
            -->   The fs.unlink() and fs.rmdir() functions are used to delete files and directories, respectively.
        
    5) Modifying File Permissions: 
            -->  You can change the permissions of a file using fs.chmod() or fs.chown().
    6) File Streaming: 
            --> The fs.createReadStream() and fs.createWriteStream() functions enable efficient streaming of large files,
                 reducing memory usage.
    7) Renaming and Moving Files:
            --> The fs.rename() function allows you to rename or move files.
    8) File Metadata:
            --> You can retrieve metadata about a file, such as size, modification time, 
                and permissions, using fs.stat() or fs.promises.stat().
    */
