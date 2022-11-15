class App
{
    constructor()
    {
        this.handlers = {
            "auth" : require("./handlers/auth.js"),
            "hash" : require("./handlers/hash.js")
        }
    }
}

module.exports = new App();