var fs = require('fs');
fs.open('./demofile.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});
var rs = fs.createReadStream('./demofile.txt');
rs.on('open', function () {
    console.log('The file is open');
});