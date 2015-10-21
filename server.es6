const americano = require('americano');
const port = process.env.PORT || 9250;
americano.start({
  name: 'template',
  port: port,
});
