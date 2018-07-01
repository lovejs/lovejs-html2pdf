class PdfGenerator {
    getConverter() {
        if (!this.converter) {
            this.converter = require("phantom-html-to-pdf")({ phantomPath: require("phantomjs-prebuilt").path });
        }

        return this.converter;
    }

    async generate(html, options) {
        console.log("options: ", options);
        return new Promise((resolve, reject) => {
            this.getConverter()(
                {
                    html,
                    ...options
                },
                (err, res) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(res);
                }
            );
        });
    }
}

module.exports = PdfGenerator;
