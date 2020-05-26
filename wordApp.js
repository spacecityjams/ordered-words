const fs = require("fs");

fs.readfile('./dictionary/words.txt', function(err, data) {
    if (err) {
        console.log("You done goofed.");
    }
    
});