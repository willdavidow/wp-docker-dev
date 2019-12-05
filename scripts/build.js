const chokidar = require('chokidar');
const fs = require('fs-extra');
const path = require('path');

const themeDirectory = './wp/wp-content/themes/staley-point';
const watchPaths = [
    './src/**/*.(php|inc|png|jpg|gif|svg)'
];
const watcher = chokidar.watch(watchPaths, {
    persistent: false,
});

const trimBaseDirectory = (path) => {
    const filePath = path.split('/');
    filePath.shift();
    return filePath.join('/');
};

// clean theme directory
fs.emptyDirSync(themeDirectory);

watcher
    .on('add', (filePath) => {
        const file = trimBaseDirectory(filePath);
        fs
            .copy(path.resolve(filePath), path.resolve(`${themeDirectory}/${file}`))
            .then(() => console.log(`copied: ${filePath} to ${themeDirectory}/${file}`))
            .catch(err => console.log(`Error adding ${filePath}\nError: ${err}`));
    })
    // .on('change', (filePath) => {
    //     const file = trimBaseDirectory(filePath);
    //     try {
    //         fs.copySync(path.resolve(filePath), path.resolve(`${themeDirectory}/${file}`));
    //         console.log(`updated: ${themeDirectory}/${file}`);
    //     } catch(err) {
    //         console.log(`Error copying: ${filePath}\n Error Message: ${err}`);
    //     }
    // })
    .on('error', (err) => console.log(`Watcher could not copy ${err}`));
