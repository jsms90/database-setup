module.exports = {
  method: 'GET',
  path: '/hello',
  handler: (request, reply) => {
    reply('Hello world!');
  }
};
