const config = require("../config.json");

module.exports = new (require("../../node_modules/micro-service-interface-client"))('auth', config.interface.host ?? undefined, config.interface.port ?? undefined);