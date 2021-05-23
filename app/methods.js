
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


    // Main feature methods


    DeletingCommands: function() {
        return config.DeletingCommands_Enable == true;
    },

    MessageAfterDelete: function() {
        return config.MessagingUserAfterDelete == true;
    },

    DisableUpdateNotification: function() {
        return config.UpdateNotification == true;
    },

         // Methods for disabling each prefix


//----------------------------------------------//

    DisablePrefix1: function() {
        return config.DeleteIfPrefix1 == true;
    },

        MessagePrefix1_Enable: function() {
        return config.MessagingUserAfterDeletePrefix1 == true;
    },

    // --------------------

    DisablePrefix2: function() {
        return config.DeleteIfPrefix2 == true;
    },

        MessagePrefix2_Enable: function() {
        return config.MessagingUserAfterDeletePrefix2 == true;
    },

    // --------------------

    DisablePrefix3: function() {
        return config.DeleteIfPrefix3 == true;
    },

        MessagePrefix3_Enable: function() {
        return config.MessagingUserAfterDeletePrefix3 == true;
    },

    // --------------------

    DisablePrefix4: function() {
        return config.DeleteIfPrefix4 == true;
    },

        MessagePrefix4_Enable: function() {
        return config.MessagingUserAfterDeletePrefix4 == true;
    },

    // --------------------

    DisablePrefix5: function() {
        return config.DeleteIfPrefix5 == true;
    },

        MessagePrefix5_Enable: function() {
        return config.MessagingUserAfterDeletePrefix5 == true;
    },

    // --------------------

    DisablePrefix6: function() {
        return config.DeleteIfPrefix6 == true;
    },

        MessagePrefix6_Enable: function() {
        return config.MessagingUserAfterDeletePrefix6 == true;
    },

    // --------------------

    DisablePrefix7: function() {
        return config.DeleteIfPrefix7 == true;
    },

        MessagePrefix7_Enable: function() {
        return config.MessagingUserAfterDeletePrefix7 == true;
    },

    // --------------------

    DisablePrefix8: function() {
        return config.DeleteIfPrefix8 == true;
    },

        MessagePrefix8_Enable: function() {
        return config.MessagingUserAfterDeletePrefix8 == true;
    },

    // --------------------

    DisablePrefix9: function() {
        return config.DeleteIfPrefix9 == true;
    },

        MessagePrefix9_Enable: function() {
        return config.MessagingUserAfterDeletePrefix9 == true;
    },

    // --------------------

//----------------------------------------------//


        // Methods for disabling each custom prefix - FOR FUTURE USE.


//----------------------------------------------//

//    DisableCustomPrefix1: function() {
//        return config.DeleteIfCustomPrefix1 == true;
//    },
//
//        MessageCustomPrefix1_Enable: function() {
//        return config.MessagingUserAfterDeleteCPrefix1 == true;
//    },
//
//    // --------------------
//
//    DisableCustomPrefix2: function() {
//        return config.DeleteIfCustomPrefix2 == true;
//    },
//
//        MessageCustomPrefix2_Enable: function() {
//        return config.MessagingUserAfterDeleteCPrefix2 == true;
//    },
//
//    // --------------------
//
//    DisableCustomPrefix3: function() {
//        return config.DeleteIfCustomPrefix3 == true;
//    },
//
//        MessageCustomPrefix3_Enable: function() {
//        return config.MessagingUserAfterDeleteCPrefix3 == true;
//    },
//
//    // --------------------
//
//    DisableCustomPrefix4: function() {
//        return config.DeleteIfCustomPrefix4 == true;
//    },
//
//        MessageCustomPrefix4_Enable: function() {
//        return config.MessagingUserAfterDeleteCPrefix4 == true;
//    },
//
//    // --------------------
//
//    DisableCustomPrefix5: function() {
//        return config.DeleteIfCustomPrefix5 == true;
//    },
//
//        MessageCustomPrefix5_Enable: function() {
//        return config.MessagingUserAfterDeleteCPrefix5 == true;
//    },
//
//    // --------------------
//
//    DisableCustomPrefix6: function() {
//        return config.DeleteIfCustomPrefix6 == true;
//    },
//
//        MessageCustomPrefix6_Enable: function() {
//        return config.MessagingUserAfterDeleteCPrefix6 == true;
//    }
}

// Copyright notice:

/* Original work: Copyright (c) 2020-2021 Refloow All rights reserved.
  Code origin (Free GitHub publish): https://github.com/OSL-Works/Discord-Channel-Moderator*/

