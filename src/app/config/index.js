
class Config {
    default = {
        api: {
            core: 'https://zimt-hub-test.herokuapp.com',
            version: 'v1.0.0',
            source: 'https://github.com/sensia-io/hub',
        },
    };

    get config() {
        return {
            api: {
                core: process.env.REACT_APP_API_CORE || this.default.api.core,
                version: process.env.REACT_APP_API_API_VERSION || this.default.api.version,
                source: process.env.REACT_APP_API_API_SOURCE || this.default.api.source,
            },
        };
    }

}

export default new Config();
