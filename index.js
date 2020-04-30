// Discord-Channel-Moderator built by Refloow (-MajokingGames)

/* 
  Here is contact info: refloowlibrarycontact@gmail.com
  or main dev steam: steam: https://steamcommunity.com/id/MajokingGames/
*/

// Checking if all modules are installed correctly

try {
  colors = require('colors');
} catch (ex) {
  console.log('\n\n\n | [Modules] |: Missing dependecies Run install.bat file or use npm install. \n\n\n');
  console.log(ex);
  process.exit(1);
}

// Starting main app

require('./app/Main/app.js');
const method = require('./app/Main/methods.js');

// Basic infomations display on startup

console.log('8888888b.          .d888888                              '.cyan);
console.log('888   Y88b        d88P" 888                              '.cyan);
console.log('888    888        888   888                              '.cyan);
console.log('888   d88P .d88b. 888888888 .d88b.  .d88b. 888  888  888'.cyan);
console.log('8888888P" d8P  Y8b888   888d88""88bd88""88b888  888  888'.cyan); 
console.log('888 T88b  88888888888   888888  888888  888888  888  888'.cyan); 
console.log('888  T88b Y8b.    888   888Y88..88PY88..88PY88b 888 d88P '.cyan);
console.log('888   T88b "Y8888 888   888 "Y88P"  "Y88P"  "Y8888888P" \n\n\n'.cyan);                              
console.log('This bot was developed by MajokingGames'.cyan);
console.log('Verision early 1.0.0'.cyan);
console.log('Preparing code for launch'.cyan);
console.log(''.red);
console.log('Loading config file...\n\n'.green );


// Checking for correct version (updates) for bot on github

if(method.DisableUpdateNotification()) {
	method.check()
}
