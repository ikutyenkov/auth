const config = require("../config.json");
const Instance = require("../controllers/instance.js");
const md5 = require("../../node_modules/md5");

class Collect
{
    constructor()
    {
        this.hash = {};
        this.instances = {};
    }

    async createClient(instance, user)
    {
        let _hash = md5(Math.random() * (999999999999 - 9999999999) + 9999999999);
        this.hash[_hash] = this.getInstance(instance).getUser(user).setHash(_hash);

        return this.hash[_hash];
    }

    getInstance(instance)
    {
        if (typeof config.instances[instance] != 'undefined') {

            if (typeof this.instances[instance] == 'undefined')
                this.instances[instance] = new Instance(config.instances[instance]);

            return this.instances[instance];
        }

        return false;
    }

    async destroy(hash)
    {
        if (typeof this.hash[hash] != 'undefined')
            delete this.hash[hash];

        return true;
    }
}

module.exports = new Collect();