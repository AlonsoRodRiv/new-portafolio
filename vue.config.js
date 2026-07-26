const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.DEPLOY_TARGET === 'gh-pages' ? '/new-portafolio/' : '/',
});
