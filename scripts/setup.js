const inquirer = require('inquirer');
const replace = require('replace-in-file');
const replacements = {
    REPLACE_PACKAGE_NAME: '%%%PACKAGE_NAME%%%',
    REPLACE_THEME_NAME: '%%%THEME_NAME%%%',
    REPLACE_AUTHOR: '%%%AUTHOR_NAME%%%',
    REPLACE_AUTHOR_URI: '%%%AUTHOR_URI%%%'
};
const files = [
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
        name: 'packageName',
        message: "WP theme package name? (ex. package-name)",
        validate: validatePackageName,
    },
    {
        type: 'input',
        name: 'themeName',
        message: "WP theme name? (ex. Theme Name)",
    },
    {
        type: 'input',
        name: 'authorName',
        message: "Theme author name (ex. Biff Tannen)?",
    },
    {
        type: 'input',
        name: 'authorURI',
        message: "Theme author URI? (ex. www.bifftannen.info)",
    },
];

const updatePaths = (answers) => {
    console.log(replace.sync({
        files,
        from: replacements.REPLACE_AUTHOR,
        to: answers.authorName,
        dry: true,
    }));
    console.log(replace.sync({
        files,
        from: replacements.REPLACE_AUTHOR_URI,
        to: answers.authorURI,
        dry: true,
    }));
    console.log(replace.sync({
        files,
        from: replacements.REPLACE_PACKAGE_NAME,
        to: answers.packageName,
        dry: true,
    }));
    console.log(replace.sync({
        files,
        from: replacements.REPLACE_THEME_NAME,
        to: answers.themeName,
        dry: true,
    }));
};
  
inquirer.prompt(questions)
    .then(answers => {
        // setup = answers;
        updatePaths(answers);
    });
