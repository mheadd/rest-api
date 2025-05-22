const request = require('supertest');
const app = require('../index');
const assert = require('assert');
let server = app;

// Test suite for the REST API
describe('REST API', function () {
  // Start the server before running tests
  before(function (done) {
    server.listen(4000, done);
  });

  // Close the server after tests complete
  after(function (done) {
    console.log('All tests completed. Shutting down the server...');
   process.exit(0);
  });

  // Test for the root endpoint
  describe('GET /', function () {
    it('should return welcome message', function (done) {
      request(server)
        .get('/')
        .expect(200)
        .expect(res => {
          // Assert that the response contains the correct welcome message
          assert.strictEqual(res.body.message, 'Welcome to the simple Node.js REST API!');
        })
        .end(done);
    });
  });

  // Test for the reverse endpoint
  describe('GET /reverse/:input', function () {
    it('should return reversed string', function (done) {
      request(server)
        .get('/reverse/hello')
        .expect(200)
        .expect(res => {
          // Assert that the response contains the reversed string
          assert.strictEqual(res.body.reversed, 'olleh');
        })
        .end(done);
    });

    it('should handle empty string', function (done) {
      request(server)
        .get('/reverse/')
        // Assert that a request with no input returns 404
        .expect(404, done);
    });
  });
});
