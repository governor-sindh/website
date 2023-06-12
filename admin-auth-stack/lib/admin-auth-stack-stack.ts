import { Duration, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import { Construct } from 'constructs';

export class AdminAuthStackStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const userPool = new cognito.UserPool(this, `GovernorAdminUserPool`, {
      userPoolName: `GovernorAdminStackUserPool`,
      userInvitation: {
        emailSubject: 'Invite to join our admin portal!',
        emailBody: 'Hello {username}, you have been invited to join our admin portal! Your temporary password is {####}',
        smsMessage: 'Hello {username}, your temporary password for our admin portal is {####}',
      },
      signInAliases: {
        email: true
      },
      selfSignUpEnabled: false,
      autoVerify: {
        email: true,
      },
      passwordPolicy: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireDigits: true,
        requireSymbols: true,
        tempPasswordValidity: Duration.days(3),
      },
      accountRecovery: cognito.AccountRecovery.EMAIL_ONLY,
      removalPolicy: RemovalPolicy.RETAIN,
    });

    const userPoolClient = new cognito.UserPoolClient(this, 'governor-userpool-client', {
      userPoolClientName: `GovernorAdminPortalUserPoolClient`,
      userPool,
      authFlows: {
        userPassword: true,
        adminUserPassword: true,
        custom: true,
        userSrp: true,
      }
    });

  }
}
