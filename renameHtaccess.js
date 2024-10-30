const fs = require('fs');
const path = require('path')

const changeFileNames = () => {
    const dirnames = fs.readdirSync(path.join(__dirname, 'dist'));
    console.log(dirnames)
    dirnames.forEach(dirname => {
        if(dirname === '.ds_store') return
        fs.renameSync(path.join(
                __dirname, 'dist', dirname, 'htaccess'),
            path.join(__dirname, 'dist', dirname, '.htaccess'),
            function(err) {
                if (err) {
                    console.log(err)
                } else {
                    console.log("Successfully renamed the directory.")
                }
            })
    });
}

changeFileNames()


