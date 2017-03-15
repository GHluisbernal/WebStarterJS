import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
import path from 'path';

const pathIndex = path.resolve(__dirname, '../index.html');

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).equal(true);
  });
});

describe('index.html', () => {
  it('should say WebStarterJS', (done) => {
    const index = fs.readFileSync(pathIndex, 'utf-8');
    jsdom.env(index, function(err, window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('WebStarterJS');
      done();
      window.close();
    });
  });
});
