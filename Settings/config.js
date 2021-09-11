module.exports = {

   // Copyright notice:

/*
  Original work: Copyright (c) 2020-2021 Refloow All rights reserved.
  Code origin (Free GitHub publish): https://github.com/OSL-Works/Discord-Channel-Moderator*/
/*

Want active support and new updates with new features all for free?
Leave an star on github repo its free ( we push updates based on the engagement )
Repo link: https://github.com/OSL-Works/Discord-Channel-Moderator

  Discord Support Server: https://discord.gg/D8WCtDD     (Open an ticket)

*/


////////////////////////////////////////////////////
//------------------------------------------------//
//                Account setup                   //
//------------------------------------------------//
////////////////////////////////////////////////////


      Discord_Login: "", // Discord Bot Login code.
      DisplayMessage: "With spammy users",   // Custom status message.
      Type: "Playing",                       // Type of status message


////////////////////////////////////////////////////
//------------------------------------------------//
//     Moderating commands in regular chat        //
//------------------------------------------------//
////////////////////////////////////////////////////

DeletingCommands_Enable: true,      // [true/false] Enable or disable |  Moderating commands in regular chat

blacklisted: ["!","+",".","$","/","-",">"], // List of prefixes to delete from regular chat (make sure to hide bot from commands channels)
MessagingUserAfterDelete: true,   // [true/false] Enable or disable | Sending dm's to people whos commands got deleted
MessageAfterDelete: 'Your command has been deleted. You know that there is commands channel for commands. No need for braking rules. :/',


////////////////////////////////////////////////////
//------------------------------------------------//
//              Moderating links                  //
//------------------------------------------------//
////////////////////////////////////////////////////

// Disables this section
ModeratingLinks_Enable: true,          // [true/false] Enable or disable | Moderating links within a server
MessagingUserAfterDeletingLink: true,  // [true/false] Enable or disable | DM'S after deleting an link MessageOnDelete_x setting

Allowed_Channel_1: "", // In this configured channel
Allowed_URL_in_Channel_1: "youtube.com", // This link will be allowed, any other links will be deleted.
MessageOnDelete_1: "@here Sorry, this channel only allows youtube.com URLS", // Message sent in dms after deleting an message

Allowed_Channel_2: "", // In this configured channel
Allowed_URL_in_Channel_2: "twitter.com", // This link will be allowed, any other links will be deleted.
MessageOnDelete_2: "@here Sorry, this channel only allows twitter.com URLS", // Message sent in dms after deleting an message

Allowed_Channel_3: "", // In this configured channel
Allowed_URL_in_Channel_3: "refloow.com", // This link will be allowed, any other links will be deleted.
MessageOnDelete_3: "@here Sorry, this channel only allows refloow.com URLS", // Message sent in dms after deleting an message

Allowed_Channel_4: "", // In this configured channel
Allowed_URL_in_Channel_4: "discord.com", // This link will be allowed, any other links will be deleted.
MessageOnDelete_5: "@here Sorry, this channel only allows discord.com URLS", // Message sent in dms after deleting an message

Allowed_Channel_5: "", // In this configured channel
Allowed_URL_in_Channel_5: "twitter.com", // This link will be allowed, any other links will be deleted.
MessageOnDelete_5: "@here Sorry, this channel only allows twitter.com URLS", // Message sent in dms after deleting an message

Allowed_Channel_6: "", // In this configured channel
Allowed_URL_in_Channel_6: "twitter.com", // This link will be allowed, any other links will be deleted.
MessageOnDelete_6: "@here Sorry, this channel only allows twitter.com URLS", // Message sent in dms after deleting an message


MessagingUserAfterDeletingLinkGlobal: true, // [true/false] Enable or disable | DM's after deleting an message from channels that dont allow any urls
GlobalDeleteURL: "Sorry, this server does not allow URLS outside of allowed channels", // Message sent in dms after deleting an message from channels that dont allow any urls


////////////////////////////////////////////////////
//------------------------------------------------//
//                  CHAT FILTER                   //
//------------------------------------------------//
////////////////////////////////////////////////////

// Disables this section
ChatFilter_Enable: true, // [true/false] Enable or disable | Filter in chat

DM_After_Deleting: true, // [true/false] Enable or disable | Dming after deleting messages
MessageAfterDelete_filter: "Don't use bad words.",
bannedwords: ["fuck", "example"] // Words that trigger the filter.

};



// Copyright notice:

/* Original work: Copyright (c) 2020-2021 Refloow All rights reserved.
  Code origin: https://github.com/OSL-Works/Discord-Channel-Moderator */

