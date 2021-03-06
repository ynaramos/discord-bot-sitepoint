const { PREFIX } = require('../config.json');

module.exports = {
  Nyanpasu: {
    //require('./nyanpasu'),
    name: `${PREFIX}nyanpasu`,
    description: 'Nyanpasu!',
    execute(msg, args) {
      msg.channel.send(`Nyanpasu~ ${args[0]}`);
    }
  },
  Renchon: {
    name: `${PREFIX}renchon`,
    description: 'Say Renge\'s nickname!',
    execute(msg, args) {
      msg.channel.send('What is it?');
    }
  },
  Server: {
    name: `${PREFIX}server`,
    description: 'Display the server name',
    execute(msg, args) {
      msg.channel.send(`This server's name is:  ${msg.guild.name}`);
    }
  }
};