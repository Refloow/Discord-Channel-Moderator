
// Copyright notice:

/*--------------------------------------------------------------------------------------------- 
* Original work: Copyright (c) 2020-2021 Refloow All rights reserved.

* Code origin: https://github.com/OSL-Works/Discord-Channel-Moderator
* Developer name: Veljko Vuckovic
* Licensed under the MIT License. See LICENSE in the project root for license information.
* Published License: https://github.com/OSL-Works/Discord-Channel-Moderator/blob/master/LICENSE

* Contact information:
  Discord Support Server: https://discord.gg/D8WCtDD
  Main developer steam: https://steamcommunity.com/id/MajokingGames/ 
  Mail: refloowlibrarycontact@gmail.com
  
  * Donations:
  Crypto: https://refloow.com/cdonate
  Steam: https://steamcommunity.com/tradeoffer/new/?partner=392773011&token=CncehZti

 --------------------------------------------------------------------------------------------*/

 /* 

// legal advice: PERMISSIONS AND RIGHTS

* License does not prohibit modification, distribution, private/commercial use or sale of copies as long as the original LICENSE file
 and authors copyright notice are left as they are in the project files.
* Copyright notice could be included ones or multiple times within the file.
* Copyright notice should not be removed even within the larger works (Larger modifications applied).
* Original file tags cannot be removed without creators exclusive permission.
* Adding own tags in files is possible in case of modification - even in that case original tags must be kept.
* Year on the copyright notice breakdown:
* Generally, the “year of first publication of the work” refers to the year in which the work was first distributed to the public (first year mentioned)
* Any year after represents the year of added modifications.
* Copyright cannot expire so therefore you cannot remove copyright notice if its not updated to the latest year.
* Editing existing copyright notice(s) is also prohibited.

===================================================================================
Removing copyright notice & distributing, using or selling the software without
the original license and copyright notice is licence agreement breach and its considered criminal offense and piracy.
===================================================================================

*/

// Checking if all modules are installed correctly 

try {
  // Checking if discord module is installed correctly
  Discord = require ('discord.js');
  // Checking if console-master module is installed correctly
  Console = require ('console-master');
} catch (ex) {
  console.log('\n\n\n | [Modules] |: Missing dependecies Run install.bat file or use npm install. \n\n\n');
  console.log(ex);
  process.exit(1);
}

// Setting other things for the project

const config = require('../Settings/config.js');
const method = require('./methods.js');
const refloow = new Discord.Client();
var servers = {};


// Client on 'ready'

refloow.on('ready', () => {
    Console.true("| [Discord] | Succesfully connected as " + refloow.user.tag)

    refloow.user.setActivity(config.DisplayMessage, {type: config.Type})

    refloow.guilds.forEach((guild) =>{
        Console.true("| [Discord] | Connected to server: "+guild.name)
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


// Copyright notice:

/* Original work: Copyright (c) 2020-2021 Refloow All rights reserved.
  Code origin (Free GitHub publish): https://github.com/OSL-Works/Discord-Channel-Moderator*/

