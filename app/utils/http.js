const axios = require('axios');

const http = axios.create({
    headers: {
        'version': 'ios-com.travelincity.WayBookJN-4191',
        'User-Agent': 'WayBookJN/4191 (iPhone; iOS 10.3; Scale/2.00)',
    }
});

module.exports = http;