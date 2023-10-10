import fs from 'fs'; // fs模块是Node.js的核心文件系统模块，用于读写文件。
import prompt from 'prompt'; // prompt是一个第三方模块，用于在命令行中获取用户输入。


//这里定义了一个对象getFileOperation，它将被用于提示用户输入文件名。
const getFileOperation = {
  name: 'fileName',
  description: 'What file do you want to open?'
};

// We're going to do our first asynchronous operation!
prompt.get([getFileOperation], function (err, result) {
  //
  console.log('Prompt has a result');
  if (err) {
    // Exit out, something went wrong!!!
    throw err;
  }

  const fileName = result.fileName;
  if (!fileName) {
    throw 'Need to provide a file name';
  }

  console.log(`About to read ${fileName} if it exists`);

  // If it exists, we read the file
  fs.readFile(fileName, 'utf-8', function (fileReadError, data) {
    if (fileReadError) {
      throw fileReadError;
    }

    // Now we have the actual file data read
    const reversedContent = data.split('').reverse().join(''); //.reverse()反转data
   
    // Now we save.
    const reversedName = `reversed_${fileName}`;
    fs.writeFile(reversedName, reversedContent, function (writeError) {
      if (writeError) {
        throw writeError;
      }

      console.log('Finished!');
    });
  });
});

console.log('After prompt is run');
