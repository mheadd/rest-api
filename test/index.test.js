const request = require('supertest');
const app = require('../index');
const assert = require('assert');
let server;

describe('REST API', function () {
  before(function (done) {
    server = app.listen(4000, done);
  });

  after(function (done) {
    server.close(done);
  });

  describe('GET /', function () {
    it('should return welcome message', function (done) {
      request(server)
        .get('/')
        .expect(200)
        .expect(res => {
          assert.strictEqual(res.body.message, 'Welcome to the simple Node.js REST API!');
        })
        .end(done);
    });
  });

  describe('GET /reverse/:input', function () {
    it('should return reversed string', function (done) {
      request(server)
        .get('/reverse/hello')
        .expect(200)
        .expect(res => {
          assert.strictEqual(res.body.reversed, 'olleh');
        })
        .end(done);
    });

    it('should handle empty string', function (done) {
      request(server)
        .get('/reverse/')
        .expect(404, done);
    });
  });
});
