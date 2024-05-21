const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/Los_Angeles', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1107552245270204456')
    .setType('STREAMING')
    .setURL('https://twitch.tv/developer') //Must be a youtube video link 
    .setState('‎‎‎  𝑝𝑟𝛼𝑖𝑠𝑒 𝑚𝑒 𝑓𝜊𝑟 𝑚𝛼𝑟𝑡𝑦𝑟.  ')
    .setName('♡')
    .setDetails(`‎   ◞ ◟‿◞ 𐙚ྀ ◟‿◞ ◟`)
  
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/856985862994264116/1242271606147911761/IMB_F4OCWM.gif?ex=664d3b17&is=664be997&hm=5383aa6a48fce61c630aea170ae3455b24d004f98f3d5bf81c2caef73baa7ed7&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('‎‎      𝑝𝑟𝛼𝑖𝑠𝑒 𝑚𝑒 𝑓𝜊𝑟 𝑠𝑖𝑛.') //Text when you hover the Large image
    
    .setAssetsSmallText('sleepy') //Text when you hover the Small image
    .addButton('꒰ ྀི ◞ ◟꒱', 'https://open.spotify.com/playlist/3Jw7YlfSJOqV1da7mCVPdM?si=509b691da7b843cb')


  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
