module.exports = {
  apps: [
    {
      name: 'api',
      script: './dist/server.js',
      cwd: '/home/ubuntu/api_rest-Escola',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
