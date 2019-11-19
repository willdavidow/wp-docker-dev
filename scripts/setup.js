const inquirer = require('inquirer');
const replace = require('replace-in-file');
const setup = {
    REPLACE_PACKAGE_NAME: '%%%PACKAGE_NAME%%%',
    REPLACE_THEME_NAME: '%%%THEME_NAME%%%',
    REPLACE_AUTHOR: '%%%AUTHOR_NAME%%%',
    REPLACE_AUTHOR_URI: '%%%AUTHOR_URI%%%'
};
const updatePaths = [
    'package.json',
    'src/index.php',
    'src/functions.php',
    'src/footer.php',
    'src/header.php',
    'src/scss/style.scss',
    'src/scss/_vars.scss',
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
        name: 'Package Name',
        message: "WP theme package name? (ex. package-name)",
        validate: validatePackageName,
    },
    {
        type: 'input',
        name: 'Theme Name',
        message: "WP theme name? (ex. Theme Name)",
    },
    {
        type: 'input',
        name: 'Author Name',
        message: "Theme author name (ex. Biff Tannen)?",
    },
    {
        type: 'input',
        name: 'Author URI',
        message: "Theme author URI? (ex. www.bifftannen.info)",
    },
];
  
inquirer.prompt(questions)
    .then(answers => {
        setup = answers;
    });
