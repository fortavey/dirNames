const fs = require('fs');
const path = require('path')
const decompress = require('decompress');

const filenames = fs.readdirSync(path.join(__dirname, 'sites'));


const unzipFiles =  () => {
    filenames.forEach(async file => {
        console.log(file);
        
        try {
            let newDirName = file;
            await decompress(path.join(__dirname, 'sites', file), 'dist', {
                map: filee => {
                    filee.path = `${newDirName}*${filee.path}`;
                    return filee;
                }
            })
        }catch(err) {
            console.log('ERROR', file);
        }
        
    });
}

unzipFiles();



