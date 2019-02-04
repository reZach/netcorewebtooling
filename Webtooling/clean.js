// Cleans the output [distribution] files
var fs = require("fs");
var filesToClean = ["./wwwroot/dist/js/site.min.js"];

for (var i = 0; i < filesToClean.length; i++) {
    if (fs.existsSync(filesToClean[i])) {
        fs.unlinkSync(filesToClean[i]);
    }
}