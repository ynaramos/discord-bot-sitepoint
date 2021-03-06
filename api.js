const axios = require('axios');
const crypto = require('crypto');
const { CLIENTID } = require('./config.json');
//===============================================================================//
// CREATE CODE VERIFIER
function base64URLEncode(str) {
    return str.toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
}

// CREATE CODE CHALLENGE
function sha256(buffer) {
    return crypto.createHash('sha256').update(buffer).digest();
}
//===============================================================================//
function authoriseUser() {
    const verifier = base64URLEncode(crypto.randomBytes(128));
    const challenge = base64URLEncode(sha256(verifier));
    const apiUrl = 'https://myanimelist.net/v1/oauth2/authorize';
    const responseType = 'response_type=code';
    const clientId = `client_id=${CLIENTID}`;
    const codeChallenge = `code_challenge=${challenge}`;
    const state = 'state=testState';
    
    await axios.post(`${apiUrl}?${responseType}&${clientId}&${codeChallenge}&${state}`, {})
    .then((response) => {
        console.info(`${apiUrl}?${responseType}&${clientId}&${codeChallenge}&${state}`);
        console.info(`RES: ${response}`);
    }, (error) => {
        console.info(`${apiUrl}?${responseType}&${clientId}&${codeChallenge}&${state}`);
        console.info(`ERROR: ${error.response.body}`);
    });
}

async function GetSeasonalAnime(year, season) {
    try {
        const response = await axios
            .get(`https://api.myanimelist.net/v2/anime/season/${year}/${season}?limit=4`);
        console.info(response.data.name);
    } catch (error) {
        console.info(error.response.body);
    }
}

module.exports = { authoriseUser }