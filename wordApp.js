const fs = require("fs");

const writestream = fs.createWriteStream("ordered-words.txt");

fs.readFile('./dictionary/words.txt', function(err, data) {
    if (err) {
        console.log("You done goofed.");
    }
    const wordArray = data.toString().toLowerCase().split("\n");
    console.log(wordArray.length);

    for (const word of wordArray) {
        reorder = word.split("").sort();   
        if (reorder.join("") === word) {
            console.log(word);
            writestream.write(word + '\n');
        }       
    }    
});