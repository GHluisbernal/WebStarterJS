import jsf from 'json-schema-faker';
import { schema } from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';
import path from 'path';

const json = JSON.stringify(jsf(schema));
const pathDB = path.resolve(__dirname, '../app/api/db.json');

fs.writeFile(pathDB, json, function (err) {
  if (err) {
    return console.log(chalk.red(err));
  }
  else {
    console.log(chalk.green("Mock data generated."));
  }
});
