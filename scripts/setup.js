const fs = require('fs-extra');
const inquirer = require('inquirer');
const replace = require('replace-in-file');
const defaults = {
    authorName: 'Biff Tannen',
    authorURI: 'www.bifftannen.info',
    packageName: 'back-to-the-future',
    themeName: 'Back to the Future',
};
const replacements = {
    REPLACE_PACKAGE_NAME: '%%%PACKAGE_NAME%%%',
    REPLACE_THEME_NAME: '%%%THEME_NAME%%%',
    REPLACE_AUTHOR: '%%%AUTHOR_NAME%%%',
    REPLACE_AUTHOR_URI: '%%%AUTHOR_URI%%%'
};
const files = [
    'docker-compose.yml',
    'package.json',
    'scripts/build.js',
    'scripts/dev.js',
    'src/index.php',
    'src/functions.php',
    'src/footer.php',
    'src/header.php',
    'src/scss/style.scss',
    'src/scss/_vars.scss',
    'webpack.config.js',
];

const validatePackageName = (input) => {
    if (/^[A-Za-z0-9\-\_]*$/.test(input)) {
        return true;
    }

    return 'Package name must not contain spaces or special characters. Only alphanumeric, hyphens and underscores.';
}

const questions = [
    {
        type: 'input',
        name: 'packageName',
        message: `WP theme package name? (default: ${defaults.packageName}`,
        validate: validatePackageName,
    },
    {
        type: 'input',
        name: 'themeName',
        message: `WP theme name? (default: ${defaults.themeName})`,
    },
    {
        type: 'input',
        name: 'authorName',
        message: `Theme author name (default: ${defaults.authorName})?`,
    },
    {
        type: 'input',
        name: 'authorURI',
        message: `Theme author URI? (default: ${defaults.authorURI})`,
    },
];

const updatePaths = (answers) => {

    const authorName = answers.authorName.length > 0 ? answers.authorName : defaults.authorName;
    const authorURI = answers.authorURI.length > 0 ? answers.authorURI : defaults.authorURI;
    const packageName = answers.packageName.length > 0 ? answers.packageName : defaults.packageName;
    const themeName = answers.themeName.length > 0 ? answers.themeName : defaults.themeName;
    replace.sync({
        files,
        from: new RegExp(replacements.REPLACE_AUTHOR, 'g'),
        to: authorName,
    });
    replace.sync({
        files,
        from: new RegExp(replacements.REPLACE_AUTHOR_URI, 'g'),
        to: authorURI,
    });
    replace.sync({
        files,
        from: new RegExp(replacements.REPLACE_PACKAGE_NAME, 'g'),
        to: packageName,
    });
    replace.sync({
        files,
        from: new RegExp(replacements.REPLACE_THEME_NAME, 'g'),
        to: themeName,
    });

    console.log('Theme setup complete:');
    console.log(`Package Name ${packageName}`);
    console.log(`Theme Name ${themeName}`);
    console.log(`Author Name ${authorName}`);
    console.log(`----------------------------`);
    console.log(`Removed .git directory; make sure you run git init and link up to your own remote!`);
};
  
// remove .git directory from this repository
fs.remove('.git')
  
inquirer.prompt(questions)
    .then(answers => {
        updatePaths(answers);
    });
