const redis = require('redis');
const dotenv = require('dotenv')
const {REDIS_PORT, REDIS_URL, REDIS_USERNAME, REDIS_PASSWORD} = process.env
const client = redis.createClient({
    url:REDIS_URL+REDIS_PORT,
    username:REDIS_USERNAME,
    password:REDIS_PASSWORD
});

client.on('connect', function() {
    console.log('Redis has been connected!');
  });

module.exports = client