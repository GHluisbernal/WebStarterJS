import express from 'express';
import path from 'path';
import opn from 'opn';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';

const port = 3000;
const pathIndex = path.join(__dirname, '../app/index.html');
const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath
}));

app.get('/users', function (req, res) {
  const jsonData = [
    { "id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com" },
    { "id": 2, "firstName": "Tammy", "lastName": "Norton", "email": "tnorton@yahoo.com" },
    { "id": 3, "firstName": "Tina", "lastName": "Lee", "email": "lee.tina@hotmail.com" }
  ];
  res.json(jsonData);
});

app.get('/', function (req, res) {
  res.sendFile(pathIndex);
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  }
  else {
    opn('http://localhost:' + port);
  }
});
