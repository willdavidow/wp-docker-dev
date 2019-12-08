const fs = require('fs-extra');
const replace = require('replace-in-file');

replace.sync({
    files: './wp-db-export.sql',
    from: new RegExp('utf8mb4_unicode_520_ci', 'g'),
    to: 'utf8_general_ci',
});

replace.sync({
    files: './wp-db-export.sql',
    from: new RegExp('utf8mb4', 'g'),
    to: 'utf8',
});
