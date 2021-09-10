
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
  Donate: https://ko-fi.com/refloow
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
  colors = require('colors');
  moment = require('moment');
} catch (ex) {
  console.log('\n\n\n | [Modules] |: Missing dependecies Run install.bat file or use npm install. \n\n\n');
  console.log(ex);
  process.exit(1);
}

// Importing other required files

const package = require('../package.json');
const config = require('../Settings/config.js');

t = module.exports = {
    
    check: function() {
        const request = require('request');
        var options = {
            url: 'https://raw.githubusercontent.com/Refloow/Discord-Channel-Moderator/master/package.json',
            method: 'GET',
        };
        function look(error, JSONresponse, body) {
            var page = JSON.parse(body)
            const v = package.version;
            if(page.version != v)
                console.log(`| [GitHub] | VERSION |:  ${'New update available for '+package.name+ ' v'+page.version.green+'! You\'re currently only running version '+v.yellow+''}\n${`| [GitHub] | VERSION |: Go to https://github.com/Refloow/Steam-Card-Bot-PRO to update now!`}\n\n`)
            else 
                console.log(`| [GitHub] | VERSION |: You're running the latest version of Discord-Channel-Moderator (v${v.green})\n\n`)
        }
        request(options, look)
    },

    // Function that checks if message contains urls 

    containsUrl: function(message) {
     message = message.toLowerCase()
     // Setting url found to false as default
     let urlFound = false
        if (message.includes('http://') ||
         message.includes('https://') ||
         message.includes('www')) {
           // Then url is found and set to true
           urlFound = true
     }
     // returning the value of urlFound from this function
     return urlFound
   },

   // Function that checks the url if one is found 

    isAllowedUrl: function(message) {
    message = message.toLowerCase()
    return message.includes(config.Allowed_URL_in_Channel_1)
    },

    isAllowedUrl2: function(message) {
     message = message.toLowerCase()
     return message.includes(config.Allowed_URL_in_Channel_2)
    },

    isAllowedUrl3: function(message) {
     message = message.toLowerCase()
     return message.includes(config.Allowed_URL_in_Channel_3)
    },

    isAllowedUrl4: function(message) {
     message = message.toLowerCase()
     return message.includes(config.Allowed_URL_in_Channel_4)
    },

    isAllowedUrl5: function(message) {
     message = message.toLowerCase()
     return message.includes(config.Allowed_URL_in_Channel_5)
    },

    isAllowedUrl6: function(message) {
     message = message.toLowerCase()
     return message.includes(config.Allowed_URL_in_Channel_6)
    },

    // Main feature methods


    DeletingCommands: function() {
        return config.DeletingCommands_Enable == true;
    },

    MessageAfterDelete: function() {
        return config.MessagingUserAfterDelete == true;
    },

    MessageAfterDeleteLink: function() {
        return config.MessagingUserAfterDeletingLink == true;
    },

    MessageAfterDeleteFilter: function() {
        return config.DM_After_Deleting == true;
    },

    MessageAfterDeleteLinkGlobal: function() {
        return config.MessagingUserAfterDeletingLinkGlobal == true;
    },

    ModeratingLinks: function() {
        return config.ModeratingLinks_Enable == true;
    },

    ChatFilterEnabled: function() {
        return config.ChatFilter_Enable == true;
    }

//----------------------------------------------//


}

// Copyright notice:

/* Original work: Copyright (c) 2020-2021 Refloow All rights reserved.
  Code origin (Free GitHub publish): https://github.com/OSL-Works/Discord-Channel-Moderator*/

