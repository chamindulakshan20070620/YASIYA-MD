const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'GQp3WZ5Z#Ay6FAUW-S9SCUbIoz_pAgtx6EE_tuG_Lc5ujj6GCh4A'
};
