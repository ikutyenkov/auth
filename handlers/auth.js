const Interface = require("../class/interface.js");
const config = require("../config.json");
const Users = require("../collects/users.js");

class Auth
{
    constructor() {
        Interface.getInstance().awaitSubscribe('login', this.login.bind(this));
        Interface.getInstance().awaitSubscribe('logout', this.logout.bind(this));
    }

    async login(params)
    {
        if (typeof params.instance != 'undefined' && typeof params.user != 'undefined' && typeof params.password != 'undefined') {

            if (
                typeof config.users[params.user] != 'undefined'
                && config.users[params.user].password === params.password
            )
                return {"error" : !(await Users.createClient(params.instance, params.user)), "user" : (await Users.createClient(params.instance, params.user)).get()};
        }

        return {"error" : true, "error_str" : "user or password is incorrect"};
    }

    async logout(params)
    {
        if (typeof params.hash != 'undefined')
            return {"error" : !(await Users.destroy(params.hash))};

        return {"error" : true, "error_str" : "hash is undefined"};
    }
}

module.exports = new Auth();