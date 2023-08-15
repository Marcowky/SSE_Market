const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
});
const path = require('path');
const fs = require('fs');

module.exports = {
  devServer: {
    open: true,
    https: {
      cert: fs.readFileSync(path.join(__dirname, 'src/ssl/cert.crt')),
      key: fs.readFileSync(path.join(__dirname, 'src/ssl/cert.key')),
    },
    host: '159.75.164.214',
    port: 8080,
  },
};
