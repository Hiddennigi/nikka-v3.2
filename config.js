//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUZJYjN0SFFjbVdDMW1uK0ZDbGxpdUdNdCttRFJsZXZtYi9IeU9MS0ltTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXFYZy9qVFRYM01JeHNRdWx3a20xZlU2MHRiZzZZUzRLdlM4T2k5SytDaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRUEzTGRhcFY1TFl5V0k4N3pxZ0YxL2NGTTNPU3dmN2R6aDd0OHIxUjJZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJYmRQS1R0cmFuL2xvQW5JNUo1ZkZjc1Y2MzRSTmt4ek01dWdoNDlzM0NnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdBbUFYOXZuTk5HMTBtOU13Vk9UVkF0ZjB6NVorQTRtU3EwWUs5M1pHbEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldCSXFzTFV1U0FxQXJLbTBULzZEeXpBNUNuRWRqQ2dUaDk1UjByK0pGaWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0xqTmI0Wk5vUkwxODNJTm5CWEZnN1psck5WOHBFMlRzYVczQTJOWmxGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUdqanRjdm5LcFlBei9IclRvZVRqelFqZzcwdzMrWitadXdqbis5aTExND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQ1S2t4bm4zYTcwZmVhMHRvaVpMYTZheXFQUk81b2kvQmJUL2NqcDNFaEl3UjZwVmVXc0xzT2JOZmF0UzhjREdla0hWaVlRWTlCNy9TNjQyY3RqVUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMyLCJhZHZTZWNyZXRLZXkiOiJQam9ocXdPdjZxWFk0UERiMjZrVXRSbTFVdlBsbXJ3aDFyeGhDSVhuT0NJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwNzYyOTg4ODJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiREI4RjY1RkZBOEQyOTRFRjg4RDEyOEE1QTVGNDgxN0MifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMTkxNTMzM31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiR21XTko5aUdTSWVEeVZBQUNQbnRmUSIsInBob25lSWQiOiIxZjc1NWI5NS1mZjQ2LTQ4ZGQtYjEzNi04ZWM4MjBiMzFmZGIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaG5UbW13cXZXb2IxNUpsdC9CdlV6NHhxamtzPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNINEJ3cHJtU2t5V1d0RDJ2enNaVTE5Y1hoaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI1NTQ2Rk00MyIsIm1lIjp7ImlkIjoiMjM0OTA3NjI5ODg4Mjo2OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLhtKIg4bSPIMqAIOG0jyDhtIUh4bSH4bSFIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJbWJqNG9GRUxQYzY3a0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJhWjBGR09GQ3VrU3FIMUhJOWlEamlNeEE0eFUxMjFSZ0JPVUNWNXVRbVJjPSIsImFjY291bnRTaWduYXR1cmUiOiI0WmlDM2UxL25lTURBWXRuOFRINlkrNUsrbGlYWVloLzNicnJRb1pVN2Z1aEtteUpuMW52Ykp4REFyV0Z1VGhsdC9wdTZ2cFlLNkZ4ZmhpSUVBZTRBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiN1NTSmJYQnhnejIyT3pQN2NZRGNlSHpTYzh2VnJKc3FXTGxTM0FidVp5bDJjWXIxUUJsTCtxQTkxRkRGVVVsMEw2Wm1iNFczd2ZMMHU5VWVOOTYwQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDc2Mjk4ODgyOjY4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldtZEJSamhRcnBFcWg5UnlQWWc0NGpNUU9NVk5kdFVZQVRsQWxlYmtKa1gifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzE5MTUzMjgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ1pQIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "NIKKA-V3",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
