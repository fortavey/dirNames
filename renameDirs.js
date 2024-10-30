const fs = require('fs');
const path = require('path')

const changeDirNames = () => {
    const dirnames = fs.readdirSync(path.join(__dirname, 'dist'));

    dirnames.forEach(dirname => {
        fs.renameSync(path.join(
            __dirname, 'dist', dirname),
            path.join(__dirname, 'dist', dirname.split('.zip*')[0].toLowerCase()),
            function(err) {
                if (err) {
                    console.log(err)
                } else {
                    console.log("Successfully renamed the directory.")
                }
            })
    });
}

changeDirNames()


