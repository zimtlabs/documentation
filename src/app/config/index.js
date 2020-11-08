
class Config {
    default = {
        env: process.env.NODE_ENV,
        services: {
            logging: 'https://dcee31d5cefc4e9e9d8c5048367c1b67@o346545.ingest.sentry.io/5202546',
        },
        api: {
            core: 'https://hub.zi.mt',
            version: 'v1.0.0',
            source: 'https://github.com/zimtlabs/hub',
        },
    };

    get config() {
        return {
            dev: this.default.env === 'dev' || this.default.env === 'development',
            test: this.default.env === 'test',
            api: {
                core: process.env.REACT_APP_API_CORE || this.default.api.core,
                version: process.env.REACT_APP_API_API_VERSION || this.default.api.version,
                source: process.env.REACT_APP_API_API_SOURCE || this.default.api.source,
            },
            services: {
                logging: process.env.NEXT_PUBLIC_SENTRY_DSN || this.default.services.logging,
            },
        }
    }
}

export default new Config();
