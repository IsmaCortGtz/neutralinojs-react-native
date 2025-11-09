const net = require('net');

module.exports = function findPort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.listen(0);
    server.on('error', reject);
    server.on('listening', () => {
      const { port } = server.address();
      server.close((e) => {
        if (e) reject(e);
        else resolve(port);
      });
    });
  });
}