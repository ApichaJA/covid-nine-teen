import { CognitoUserPool } from 'amazon-cognito-identity-js'

const poolData = {
    UserPoolId: "us-east-1_qSAnKVgn7",
    ClientId: "59b089d8c01t5blar84vlgb6vs"
}

export default new CognitoUserPool(poolData);