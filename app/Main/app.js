// Discord-Channel-Moderator built by Refloow (-MajokingGames)

/* 
  Here is contact info: refloowlibrarycontact@gmail.com
  or main dev steam: steam: https://steamcommunity.com/id/MajokingGames/
*/

// Checking if all modules are installed correctly

try {
  Discord = require ('discord.js');
} catch (ex) {
  console.log('\n\n\n | [Modules] |: Missing dependecies Run install.bat file or use npm install. \n\n\n');
  console.log(ex);
  process.exit(1);
}

// Setting other things for the project

const config = require('../../Settings/config.js');
const logcol = require('../Colors - Console/logcol.js');
const method = require('./methods.js');
const refloow = new Discord.Client();
var servers = {};


// Client on 'ready'

refloow.on('ready', () => {
    logcol.correct("| [Discord] | Succesfully connected as " + refloow.user.tag)

    refloow.user.setActivity(config.DisplayMessage, {type: config.Type})

    refloow.guilds.forEach((guild) =>{
        logcol.correct("| [Discord] | Connected to server: "+guild.name)
        guild.channels.forEach((channel) => {
        })
    })

    let currentbottradesChannel = refloow.channels.get(config.Discord_Message_Chanell)
})

// Client on 'message'
if(method.DeletingCommands()) {
  refloow.on("message", (message) => {


     // PREFIX ACTIONS

    if(method.DisablePrefix1()) {
      if (message.content.startsWith("!")) {
        if(method.DeletingCommands()) {
          message.delete()
        }
        if(method.MessageAfterDelete()) {
          if(method.MessagePrefix1_Enable()) {
            message.author.send(config.MessageAfterDeleteP1);
            }
          }
        }
    }

    if(method.DisablePrefix2()) {  
      if (message.content.startsWith("+")) {
        if(method.DeletingCommands()) {
          message.delete()
        }
        if(method.MessageAfterDelete()) {
          if(method.MessagePrefix2_Enable()) {
            message.author.send(config.MessageAfterDeleteP2);
            }
          }
        }
    }

    if(method.DisablePrefix3()) {
      if (message.content.startsWith(".")) {
        if(method.DeletingCommands()) {
          message.delete()
        }
        if(method.MessageAfterDelete()) {
          if(method.MessagePrefix3_Enable()) {
            message.author.send(config.MessageAfterDeleteP3);
            }
          }
        }
    }

    if(method.DisablePrefix4()) {
      if (message.content.startsWith("$")) {
        if(method.DeletingCommands()) {
          message.delete()
        }
        if(method.MessageAfterDelete()) {
          if(method.MessagePrefix4_Enable()) {
            message.author.send(config.MessageAfterDeleteP4);
            }
          }
        }
    }

      
    if(method.DisablePrefix5()) {
      if (message.content.startsWith("/")) {
        if(method.DeletingCommands()) {
          message.delete()
        }
        if(method.MessageAfterDelete()) {
          if(method.MessagePrefix5_Enable()) {
            message.author.send(config.MessageAfterDeleteP5);
            }
          }
        }
      }

    if(method.DisablePrefix6()) {
      if (message.content.startsWith("-")) {
        if(method.DeletingCommands()) {
          message.delete()
        }
        if(method.MessageAfterDelete()) {
          if(method.MessagePrefix6_Enable()) {
            message.author.send(config.MessageAfterDeleteP6);
            }
          }
        }
      }

    if(method.DisablePrefix7()) {
      if (message.content.startsWith("?")) {
        if(method.DeletingCommands()) {
          message.delete()
        }
        if(method.MessageAfterDelete()) {
          if(method.MessagePrefix7_Enable()) {
            message.author.send(config.MessageAfterDeleteP7);
            }
          }
        }
      }

    if(method.DisablePrefix8()) {
      if (message.content.startsWith(":")) {
        if(method.DeletingCommands()) {
          message.delete()
        }
        if(method.MessageAfterDelete()) {
          if(method.MessagePrefix8_Enable()) {
            message.author.send(config.MessageAfterDeleteP8);
            }
          }
        }
      }

    if(method.DisablePrefix9()) {
      if (message.content.startsWith(";")) {
        if(method.DeletingCommands()) {
          message.delete()
        }
        if(method.MessageAfterDelete()) {
          if(method.MessagePrefix9_Enable()) {
            message.author.send(config.MessageAfterDeleteP9);
            }
          }
        }
      }

      
    // CUSTOM PREFIX ACTIONS - FOR FUTURE UPDATE

//    if(method.DisableCustomPrefix1()) { 
//      if (message.content.startsWith(config.custom1)) {
//        if(method.DeletingCommands()) {
//              message.delete()
//            if(method.MessageAfterDelete()) {
//              if(method.MessageCustomPrefix1_Enable()) {
//                message.author.send(config.MessageAfterDeleteCP1);
//              }
//            }
//          }
//       }
//    }

//    if(method.DisableCustomPrefix1()) {
//      if (message.content.startsWith(config.custom2)) {
//        if(method.DeletingCommands()) {
//              message.delete()
//            if(method.MessageAfterDelete()) {
//              if(method.MessageCustomPrefix2_Enable()) {
//                message.author.send(config.MessageAfterDeleteCP2);
//              }
//            }
//          }
//        }
//    }

//    if(method.DisableCustomPrefix1()) {
//      if (message.content.startsWith(config.custom3)) {
//        if(method.DeletingCommands()) {
//              message.delete()
//            if(method.MessageAfterDelete()) {
//              if(method.MessageCustomPrefix3_Enable()) {
//                message.author.send(config.MessageAfterDeleteCP3);
//              }
//            }
//          }
//        }
//    }

//    if(method.DisableCustomPrefix1()) {
//      if (message.content.startsWith(config.custom4)) {
//        if(method.DeletingCommands()) {
//              message.delete()
//            if(method.MessageAfterDelete()) {
//              if(method.MessageCustomPrefix4_Enable()) {
//                message.author.send(config.MessageAfterDeleteCP4);
//              }
//            }
//          }
//        }
//      }

//    if(method.DisableCustomPrefix1()) {
//      if (message.content.startsWith(config.custom5)) {
//        if(method.DeletingCommands()) {
//              message.delete()
//            if(method.MessageAfterDelete()) {
//              if(method.MessageCustomPrefix5_Enable()) {
//                message.author.send(config.MessageAfterDeleteCP5);
//              }
//            }
//          }
//        }
//    }

//    if(method.DisableCustomPrefix1()) {
//      if (message.content.startsWith(config.custom6)) {
//        if(method.DeletingCommands()) {
//              message.delete()
//            if(method.MessageAfterDelete()) {
//              if(method.MessageCustomPrefix6_Enable()) {
//                message.author.send(config.MessageAfterDeleteCP6);
//              }
//           }
//          }
//        }
//    }



  });
}


// Loging in

refloow.login(config.Discord_Login)
