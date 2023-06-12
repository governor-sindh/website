import { Credentials } from "./credentials";

const awsConfig = {
    Auth: {
        // identityPoolId: Credentials.cognito.identityPoolId, //REQUIRED - Amazon Cognito Identity Pool ID
        region: Credentials.cognito.region, // REQUIRED - Amazon Cognito Region
        userPoolId: Credentials.cognito.userPoolId, //OPTIONAL - Amazon Cognito User Pool ID
        userPoolWebClientId: Credentials.cognito.userPoolWebClientId, //OPTIONAL - Amazon Cognito Web Client ID
    },
    // aws_appsync_graphqlEndpoint: Credentials.lioneusAppSync.graphqlEndpoint,
    // aws_appsync_region: Credentials.lioneusAppSync.region,
    // aws_appsync_authenticationType: Credentials.lioneusAppSync.authenticationType,
    // aws_appsync_apiKey: Credentials.lioneusAppSync.apiKey,
    // Storage: {
    //   AWSS3: {
    //     bucket: Credentials.S3.bucket, //REQUIRED -  Amazon S3 bucket
    //     region: Credentials.cognito.region, //OPTIONAL -  Amazon service region
    //   },
    // },
};

export default awsConfig;