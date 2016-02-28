'use strict';

const Expect = require('chai').expect;
const Assert = require('chai').assert;
const Request = require('supertest');

const app = require('../app');

describe('API test', () => {
  it('Should get all beers from DB', (done) => {
    Request(app).
      get('/api/beers/').
      expect('Content-Type', /json/).
      expect(200).
      expect((res) => {
        let data = res.body;

        Expect(data).to.be.an('array', 'Data is an array');
        Assert.lengthOf(data, 14, 'Length of data is 14');
      }).
      end(done);
  });

  it('Should get all promos from DB', (done) => {
    Request(app).
      get('/api/promos/').
      expect('Content-Type', /json/).
      expect(200).
      expect((res) => {
        let data = res.body;

        Expect(data).to.be.an('array', 'Data is an array');
        Assert.lengthOf(data, 1, 'Length of data is 1');
      }).
      end(done);
  });

  it('Should get all packs from DB', (done) => {
    Request(app).
      get('/api/packs/').
      expect('Content-Type', /json/).
      expect(200).
      expect((res) => {
        let data = res.body;

        Expect(data).to.be.an('array', 'Data is an array');
        Assert.lengthOf(data, 1, 'Length of data is 1');
      }).
      end(done);
  });
});
