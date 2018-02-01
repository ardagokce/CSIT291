// assignment2_2.js
// function to be exported. creates .txt file

function createTestFile(){
  var array = [6];
  var date = new Date();

  var fs = require('fs');         //calls filesystem

  date.setDate(date.getDate() +5);          //get date

  for(var i = 0 ; i < 5 ; i++){
      array[i] = date;                     // array filler
      fs.appendFile('testfile.txt',array[i], function (err) {
      if (err) throw err;
      console.log('Done!');
                      });                 //create and write file.
                    }

}

exports.createTestFile = createTestFile();        //export function

//ENDFILE
