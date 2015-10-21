// See documentation on https://github.com/cozy/cozydb/

const cozydb = require('cozydb');

const TemplateModel = cozydb.getModel('Template', {
  title: String,
  content: String,
});

module.exports = TemplateModel;
