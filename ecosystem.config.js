module.exports = {
  apps : [{
    script: 'npm run dev',
  }],

  deploy : {
    production : {
      key:'registerkaro.pem',
      user : 'ubuntu',
      host : '51.20.8.159',
      ref  : 'origin/main',
      repo : 'https://github.com/ajaysehwal/registerkaro_a1.git',
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options':"ForwardAgent=yes"
    }
  }
};
