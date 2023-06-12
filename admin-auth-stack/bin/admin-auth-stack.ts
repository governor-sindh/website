#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AdminAuthStackStack } from '../lib/admin-auth-stack-stack';

const app = new cdk.App();
new AdminAuthStackStack(app, 'AdminAuthStackStack');
