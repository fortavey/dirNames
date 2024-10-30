const fs = require('fs');
const path = require('path')

const filenames = fs.readdirSync(path.join(__dirname, 'dist'));

try {
    fs.writeFileSync(path.join(__dirname, 'result.txt'), '');
} catch (err) {
    console.error(err);
}

filenames.forEach(file => {
    if(file === '.DS_Store') return
    fs.appendFile(path.join(__dirname, 'result.txt'), file.toLowerCase() + '\n', function (err) {
        if (err) throw err;
        console.log(file + ' Saved!');
    });
});
