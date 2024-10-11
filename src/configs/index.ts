import { env } from 'process';

const CONFIGS = Object.freeze({
    APP : {
        PORT : env.APP_PORT
    },
    RECAPTCHA : {
        V3: {
            SITE_KEY : env.RECAPTCHA_V3_SITE_KEY,
            SECRET_KEY : env.RECAPTCHA_V3_SECRET_KEY
        }
    }
})

export {CONFIGS}