const request = require('request'); //using request library for http request
const fs = require('fs'); //require fs to write files
const args = process.argv.slice(2); //accept command line args
const url = args[0]; //url is first arg
const file = args[1]; //file is sec arg


request(url, (error, response, body) => {
  if (error) {
    console.log(`danger will robinson`);
    return;
  }
  
  fs.writeFile(file, body, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${file}`); //use the length prop of the body of the page to return the file size
      return;
    }
  });
});