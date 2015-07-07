##ReadWriteDelete Guidelines
-----------------------

###Clarifying Questions (when asked in person):

  - Why wouldn't you use the synchronous versions of the appropriate methods (fs.unlinkSync, fs.appendFileSync, fs.unlinkSync)

    - Using a synchronous method ignores the power of node by preventing it from doing mutliple I/O operations simultaneously

###Rubric:

  - **Remote:**

    - Run student's code and review. Pass or Fail based on whether or not the text was moved from sample-read.txt to sample-write.txt, the original text in sample-write.txt was not deleted, and the sample-read.txt file was deleted.

  - **In person:**

    - **Bonus points**
        - [ ] Student properly nests fs.appendFile and fs.unlink inside of fs.readFile callback, but does not try to nest fs.appendFile/fs.unlink inside each other's callbacks

    - **Pass** (Achieves 4 out of 4 learning objectives):
        - [ ] Student's code moves all text from sample-read.txt to sample-write.txt
        - [ ] Student's code doesn't delete current text in sample-write.txt
        - [ ] Student's code deletes sample-read.txt file after reading content
        - [ ] Student uses asynchronous version of node's filesystem methods
    
    - **Fail** (Student doesn't achieve all of the previous learning objectives)

###Additional Resources:

  - [stackoverflow: How to append to a file in Node?](http://stackoverflow.com/questions/3459476/how-to-append-to-a-file-in-node)

  - [node docs: File System](https://nodejs.org/api/fs.html)

