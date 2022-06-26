export const apiUrl = process.env.VUE_APP_API_HOST;
export const wsUrl = process.env.VUE_WS_URL;
export const publicPath = process.env.PUBLIC_PATH;

export enum ENV {
    DEV = "dev",
    PRD = "prd"
}

export let NOW_ENV = ENV.DEV

switch (process.env.NODE_ENV) {
    case "development":
        if (apiUrl === undefined) {
            throw new Error('apiUrl === undefined');
        }
        if (wsUrl === undefined) {
            throw new Error('wsUrl === undefined');
        }
        if (publicPath === undefined) {
            throw new Error('publicPath === undefined');
        }
        NOW_ENV = ENV.DEV
        break;
    case "production":
        console.log("[xuegao-vue-wechat-demo-ts][config.ts][env=s%]", "production")
        NOW_ENV = ENV.PRD
        break;
}
