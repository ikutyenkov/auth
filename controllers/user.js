const config = require("../config.json");

class Controller
{
    constructor(instance, user)
    {
        this.instance = instance;
        this.user = user;
        this.access = Object.assign((config.users[this.user].access ?? {}), this.instance.users[this.user]);
    }

    get()
    {
        return {"hash" : this.hash, "access" : this.access};
    }

    setHash(hash)
    {
        this.hash = hash;

        return this;
    }
}

module.exports = Controller;