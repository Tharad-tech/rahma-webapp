module.exports = {
  apps: [
    {
      name: 'Qarah-App',
      script: './.output/server/index.mjs',
      exec_mode: 'cluster',
      instances: '1',
      watch: false,
      env: {
        HOST: '0.0.0.0',
        PORT: 3002,
        NODE_ENV: 'production',
      },
    },
  ],
}
