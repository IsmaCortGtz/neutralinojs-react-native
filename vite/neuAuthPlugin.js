const http = require('http');

module.exports.neuAuthPlugin = function neuAuthPlugin() {
  return {
    name: 'neu-auth-plugin',
    transformIndexHtml(html, ctx) {
      const url = new URL(ctx.originalUrl || ctx.path, 'http://localhost');  
      const id = url.searchParams.get('neutralinoReactNativeUid');  
      if (!id) return html;

      return html.replaceAll(
        /src\s*=\s*(['"])\s*\/__neutralino_globals\.js\s*\1/g,
        `src="/__neutralino_globals.js?neutralinoReactNativeUid=${id}"`
      );
    }  
  }
}

module.exports.netAuthProxyPlugin = function netAuthProxyPlugin() {
  return {
    name: 'net-auth-proxy-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url.includes('/__neutralino_globals.js')) {
          const url = new URL(req.url, `http://localhost`);
          const id = url.searchParams.get('neutralinoReactNativeUid');
          const port = server.neutralinoAuthPorts?.[id];
          if (port) {
            const proxyUrl = `http://localhost:${port}/__neutralino_globals.js`;
            return http.get(proxyUrl, (proxyRes) => {
              res.writeHead(proxyRes.statusCode, proxyRes.headers);
              proxyRes.pipe(res);
            }).on('error', (err) => {
              res.statusCode = 500;
              res.end(err.message);
            });
          }
        }

        next();
      });
    }
  }
}