const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~cNxDEISK#8v1n8Gi_5Y6QLyzhwdFuh3d1mikkGyxPL3kWQLiTNNE'
};
