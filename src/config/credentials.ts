export const Credentials = {
    cognito: {
        region: process.env.NEXT_PUBLIC_REGION,
        userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
        userPoolWebClientId: process.env.NEXT_PUBLIC_USER_POOL_WEB_CLIENT_ID,
    }
};