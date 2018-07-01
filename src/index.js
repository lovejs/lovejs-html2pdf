const { Plugin } = require("@lovejs/framework");
const _ = require("lodash");

class Html2PdfPlugin extends Plugin {
    async registerServices(container, origin) {
        await container.loadDefinitions(__dirname + "/_framework/services/services.yml", origin);
    }
}

module.exports = Html2PdfPlugin;
