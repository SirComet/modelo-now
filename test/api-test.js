'use strict';

const Expect = require('chai').expect;
const Assert = require('chai').assert;
const Request = require('supertest');

const app = require('../app');

describe('API test', () => {
  let beers = [
    { name: 'Cerveza generica', id: 'asdf' },
    { name: 'Cerveza no generica', id: 'asdg' },
    { name: 'Cerveza super generica', id: 'asde' }
  ];

  it('Should get all beers from DB', (done) => {
    Request(app).
      get('/api/beers').
      expect('Content-Type', /json/).
      expect(200).
      expect((res) => {
        let data = JSON.parse(res.body);

        Expect(data).to.be.an('array', 'Data is an array');
        Assert.lengthOf(data, 3, 'Length of data is 3');
      }).
      end(done);
  });
});
