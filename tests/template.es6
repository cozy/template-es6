const should = require('should');
const Client = require('request-json').JsonClient;

const helpers = require('./helpers');
helpers.options = {
  serverHost: 'localhost',
  serverPort: '8888',
};
const url = `http://${helpers.options.serverHost}:${helpers.options.serverPort}/`;
const client = new Client(url);

describe('Template test', () => {
  before(helpers.startApp);
  after(helpers.stopApp);

  describe('When I GET /foo', () => {
    let err = null;
    let res = null;
    let body = null;

    before((done) => {
      client.get('foo', (_err, _res, _body) => {
        err = _err;
        res = _res;
        body = _body;
        done();
      });
    });

    it('It should sends me a successful Hello World!', () => {
      should.not.exist(err);
      should.exist(res);
      res.should.have.property('statusCode');
      res.statusCode.should.equal(200);

      should.exist(body);
      body.should.have.property('message');
      body.message.should.equal('Hello, world!');
    });
  });
});
