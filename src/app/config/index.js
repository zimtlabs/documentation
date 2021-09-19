import { is } from "../utils";

class Config {
    default = {
        env: process.env.NODE_ENV,
        services: {
            analytics: '',
            github: '',
            logging: 'https://dcee31d5cefc4e9e9d8c5048367c1b67@o346545.ingest.sentry.io/5202546',
        },
    };

    get config() {
        const test = is('', 'localhost') || (process.browser && window.location.hostname.indexOf('test.') > -1);

        return {
            dev: this.default.env === 'dev' || this.default.env === 'development',
            test,
            prod: !test,
            services: {
                analytics: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_API_KEY || this.default.services.analytics,
                github: `https://github.com/zimtlabs/documentation/tree/${test ? 'dev' : 'master'}`,
                logging: process.env.NEXT_PUBLIC_SENTRY_DSN || this.default.services.logging,
            },
        }
    }
}

export default new Config();
