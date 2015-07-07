var fs = require('fs');

fs.readFile('sample-read.txt', function (err, data) {
  if (err) {
    throw err;
  } else {

    fs.appendFile('sample-write.txt', data, function (err) {
      if (err) {
        throw err;
      } else {
        console.log('data written');
      }
    });

    fs.unlink('sample-read.txt', function(err) {
      if (err) {
        throw err
      } else {
        console.log('file deleted');
      }
    });

  }
});
