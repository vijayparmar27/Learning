const crypto = require('crypto');

const clientID = "5bm5eok13usvgba1em6ff1drbp";
const clientSecret = "1ot092eejap7etbh6eh3sja9f054hfgq6d71t77c30fmph1g8j49";

function hashSecret(username) {
    return crypto.createHmac('SHA256', clientSecret)
        .update(username + clientID)
        .digest('base64')
}

module.exports = hashSecret