const fs = require('fs');


fs.readFile('welcome.txt', 'utf8', (err, data) => {

  console.log('File Content:', data);
});
