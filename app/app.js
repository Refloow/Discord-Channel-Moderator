
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





////////////////////////////////////////////////////
//------------------------------------------------//
//      Scripp checks, imports & functions        //
//------------------------------------------------//
////////////////////////////////////////////////////


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


////////////////////////////////////////////////////
//------------------------------------------------//
//              Starting the client               //
//------------------------------------------------//
////////////////////////////////////////////////////

// Client on 'ready'

refloow.on('ready', () => {
    Console.true("| [Discord] | Succesfully connected as " + refloow.user.tag)

    refloow.user.setActivity(config.DisplayMessage, {type: config.Type})

    refloow.guilds.forEach((guild) =>{
        Console.true("| [Discord] | Connected to server: "+guild.name)
        guild.channels.forEach((channel) => {
        })
    })
})


////////////////////////////////////////////////////
//------------------------------------------------//
//              Moderating links                  //
//------------------------------------------------//
////////////////////////////////////////////////////


// If moderating links is enabled proceed
if(method.ModeratingLinks()) {
  // on message
  refloow.on("message", (message) => {
    // check if message is sent in allowd channel
   if (message.channel.id === config.Allowed_Channel_1) {
     // check if the message in allowed channel has url
    if (method.containsUrl(message.content)) {
      // check if url is allowed
      if (method.isAllowedUrl(message.content)) {
          } else {
            // if it isnt allowed url
            // tell user url is not allowed
            if(method.MessageAfterDeleteLink()) {
            message.author.send(config.MessageOnDelete_1)
            }
            // then delete it
            message.delete()
          }
      } else {
        // it's not an url
        // do nothing
      }
    } else if (message.channel.id === config.Allowed_Channel_2) {
     // check if the message in allowed channel has url
    if (method.containsUrl(message.content)) {
      // check if url is allowed
      if (method.isAllowedUrl2(message.content)) {
          } else {
            // if it isnt allowed url
            // tell user url is not allowed
            if(method.MessageAfterDeleteLink()) {
            message.author.send(config.MessageOnDelete_2)
            }
            // then delete it
            message.delete()
          }
      } else {
        // it's not an url
        // do nothing
      }
    } else if (message.channel.id === config.Allowed_Channel_3) {
     // check if the message in allowed channel has url
    if (method.containsUrl(message.content)) {
      // check if url is allowed
      if (method.isAllowedUrl3(message.content)) {
          } else {
            // if it isnt allowed url
            // tell user url is not allowed
            if(method.MessageAfterDeleteLink()) {
            message.author.send(config.MessageOnDelete_3)
            }
            // then delete it
            message.delete()
          }
      } else {
        // it's not an url
        // do nothing
      }
    } else if (message.channel.id === config.Allowed_Channel_4) {
     // check if the message in allowed channel has url
    if (method.containsUrl(message.content)) {
      // check if url is allowed
      if (method.isAllowedUrl4(message.content)) {
          } else {
            // if it isnt allowed url
            // tell user url is not allowed
            if(method.MessageAfterDeleteLink()) {
            message.author.send(config.MessageOnDelete_4)
            }
            // then delete it
            message.delete()
          }
      } else {
        // it's not an url
        // do nothing
      }
    } else if (message.channel.id === config.Allowed_Channel_5) {
     // check if the message in allowed channel has url
    if (method.containsUrl(message.content)) {
      // check if url is allowed
      if (method.isAllowedUrl5(message.content)) {
          } else {
            // if it isnt allowed url
            // tell user url is not allowed
            if(method.MessageAfterDeleteLink()) {
            message.author.send(config.MessageOnDelete_5)
            }
            // then delete it
            message.delete()
          }
      } else {
        // it's not an url
        // do nothing
      }
    } else if (message.channel.id === config.Allowed_Channel_6) {
     // check if the message in allowed channel has url
    if (method.containsUrl(message.content)) {
      // check if url is allowed
      if (method.isAllowedUrl6(message.content)) {
          } else {
            // if it isnt allowed url
            // tell user url is not allowed
            if(method.MessageAfterDeleteLink()) {
            message.author.send(config.MessageOnDelete_6)
            }
            // then delete it
            message.delete()
          }
      } else {
        // it's not an url
        // do nothing
      }
    }

     else {
    }
if (!((message.channel.id == config.Allowed_Channel_1) || (message.channel.id == config.Allowed_Channel_2) || (message.channel.id == config.Allowed_Channel_3) || (message.channel.id == config.Allowed_Channel_4) || (message.channel.id == config.Allowed_Channel_5) || (message.channel.id == config.Allowed_Channel_6))) {
  if (method.containsUrl(message.content)) {
    if(method.MessageAfterDeleteLink()) {
          message.author.send(config.GlobalDeleteURL)
          }
            // then delete it
            message.delete()
          }
        }
});
};



////////////////////////////////////////////////////
//------------------------------------------------//
//     Cleaning regular chat from bot commands    //
//------------------------------------------------//
////////////////////////////////////////////////////


if(method.DeletingCommands()) {
  refloow.on("message", (message) => {

     let blacklisted = config.blacklisted;

     // PREFIX ACTIONS

      for (var i in blacklisted) {
      if (message.content.startsWith(blacklisted[i])) {
        if(method.DeletingCommands()) {
          message.delete()
        }
        if(method.MessageAfterDelete()) {
            message.author.send(config.MessageAfterDelete);
          }
        }
      }
  });
}

////////////////////////////////////////////////////
//------------------------------------------------//
//         Blacklisted words filter               //
//------------------------------------------------//
////////////////////////////////////////////////////


if(method.ChatFilterEnabled()) {
  refloow.on("message", (message) => {

   let bannedwords = config.bannedwords;

     // PREFIX ACTIONS

      for (var i in bannedwords) {
      if (message.content.toLowerCase().includes(bannedwords[i])) {
          message.delete()
        if(method.MessageAfterDeleteFilter()) {
            message.author.send(config.MessageAfterDelete_filter);
          }
        }
      }
  });
}



////////////////////////////////////////////////////
//------------------------------------------------//
//                  Logging in                    //
//------------------------------------------------//
////////////////////////////////////////////////////

refloow.login(config.Discord_Login)


// Copyright notice:

/* Original work: Copyright (c) 2020-2021 Refloow All rights reserved.
  Code origin (Free GitHub publish): https://github.com/OSL-Works/Discord-Channel-Moderator*/

