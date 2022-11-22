const Interface = require("../class/interface.js");
const config = require("../config.json");

class Handler
{
    constructor()
    {
        Interface.getInstance().awaitSubscribe('getInstances', this.getInstances);
    }

    getInstances(params)
    {
        return Object.keys(config.instances);
    }
}

module.exports = new Handler();