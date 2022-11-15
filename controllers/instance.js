const User = require("./user.js");
const config = require("../config.json");

class Controller
{
    constructor(instance)
    {
        this.instance = instance;
        this.users = {};
    }

    getUser(user)
    {
        if (typeof this.instance.users[user] != 'undefined') {

            if (typeof this.users[user] == 'undefined')
                this.users[user] = new User(this.instance, user);

            return this.users[user];
        }

        return false;
    }
}

module.exports = Controller;