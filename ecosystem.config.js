module.exports = {
  apps : [{
    name: 'Connectly Interview App - Peter Thorpe',
    script: './server/server.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    out_file: "./logs/pm2-out.log",
    error_file: "./logs/pm2-error.log",
    instances: 1,
    autorestart: true,
    watch: false,
    env: {
      NODE_ENV: 'development'
    }
  }]
};
