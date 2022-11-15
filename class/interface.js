const config = require("../config.json");

module.exports = new (require("../../node_modules/micro-service-interface-client"))(config.interface.host, 'auth', config.interface.port ?? undefined);