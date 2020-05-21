
class Config {
    default = {
        env: process.env.NODE_ENV,
        api: {
            core: 'https://hub.zi.mt',
            version: 'v1.0.0',
            source: 'https://github.com/zimtlabs/hub',
        },
    };

    get config() {
        return {
            dev: this.default.env === 'dev' || this.default.env === 'development',
            api: {
                core: process.env.REACT_APP_API_CORE || this.default.api.core,
                version: process.env.REACT_APP_API_API_VERSION || this.default.api.version,
                source: process.env.REACT_APP_API_API_SOURCE || this.default.api.source,
            },
        };
    }

}

export default new Config();
