/*
 * Copyright (c) ZIMT AG - All Rights Reserved 2020
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Contact: tech@zimt.co
 */

const fs = require('fs');
const pkg = require('../package.json');

const { version } = pkg;

const data = {
    name: 'Viewer',
    version,
};

const content = JSON.stringify(data, null, 2);

fs.writeFile('./public/meta.json', content, 'utf8', function (err) {
    if (err) {
        console.log('An error occured while writing JSON object to meta.json');
        return console.log(err);
    }

    console.log(`meta.json file has been saved with latest version number: ${version}`);
});
