import * as bodyParser from 'body-parser';
import * as express from 'express';
import { commonResponses, IResponsesObject } from './generated/requests';
import { MockMethods } from './generated/methods';
import * as path from 'path';
import * as fs from 'fs';

let isMocked = false;

process.argv.forEach((val) => {
  if (val === 'mocked') {
    isMocked = true;
  }
});

const app = express();
app.use(bodyParser.json());

app.use(function(req, res, next) {
  req.url = req.url.replace('//', '/');
  // req.url = req.url.replace('/csobimp-api/', '/fm-api/');
  // req.url = req.url.replace('/demo/fm-api/', '/fm-api/');
  res.set({
    'X-XSRF-TOKEN': '123456789'
  });
  next();
});
app.use(express.static(path.resolve(__dirname, '../dist')));


const responseOverrides: IResponsesObject = {
  getDemoDemoEndPoint: (req, res) => {
    return {
      data: 'Moje namockovaná data',
      error: null,
    };
  },
  getDemoPetrEndPoint: (req, res) => {
    return {
      interestRate: 0.5
    }
  }
};

MockMethods.getMockMethods(app, Object.assign(commonResponses, responseOverrides), '/api');


app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.listen(8080, () => {
  console.log('Express is listening to http://localhost:8080');
});
