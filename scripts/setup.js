const inquirer = require('inquirer');
let setup = {};

const updatePaths = [
    'src/index.php',
    'src/functions.php',
    'src/footer.php',
    'src/header.php',
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
