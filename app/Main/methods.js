// We strongly recommend not editing stuff that is in this file.

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

const package = require('../../package.json');
const config = require('../../Settings/config.js');

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