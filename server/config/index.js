const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    B_INFO_API_URL: process.env.BUSINESS_INFO_API_URL,
    B_INFO_TOKEN: process.env.BUSINESS_INFO_TOKEN,
    C_FORCE_API_URL: process.env.CAREFORCE_API_URL,
    C_FORCE_TOKEN: process.env.CAREFORCE_API_TOKEN,
    CHECKOUT_API_URL: process.env.CHECKOUT_API_URL,
    CHECKOUT_API_TOKEN: process.env.CHECKOUT_API_TOKEN,
    INVENTORY_API_URL: process.env.INVENTORY_API_URL,
    INVENTORY_API_TOKEN: process.env.INVENTORY_API_TOKEN,
    INVENTORY_AUTH_KEY: process.env.INVENTORY_AUTH_KEY,
    port: process.env.PORT
}