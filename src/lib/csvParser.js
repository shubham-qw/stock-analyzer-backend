const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');

fs.createReadStream(path.resolve(process.cwd(),'resources','stockIdentifier','upstox','BSE.csv'))
   .pipe(csv.parse({ headers: true }))
    .on('error', error => console.error(error))
    .on('data', row => console.log(row))
    .on('end', rowCount => console.log(`Parsed ${rowCount} rows`));
