var AmazonCognitoIdentity = require("amazon-cognito-identity-js");
var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
var AWS = require("aws-sdk/dist/aws-sdk-react-native");

global.XMLHttpRequest = require('xhr2');

const login = (email, password) => {
  return new Promise((resolve, reject) => {
    var authenticationData = {
      Username: email,
      Password: password,
    };
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
      authenticationData
    );
    var poolData = {
      UserPoolId: "us-east-1_qSAnKVgn7", // Your user pool id here
      ClientId: "59b089d8c01t5blar84vlgb6vs", // Your client id here
    };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    var userData = {
      Username: email,
      Pool: userPool,
    };

    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        var accessToken = result.getAccessToken().getJwtToken();

        //POTENTIAL: Region needs to be set if not already set previously elsewhere.
        AWS.config.region = "us-east-1";

        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId: "us-east-1:1a138cc3-07c8-4e43-a42c-5200275373e5", // your identity pool id here
          Logins: {
            // Change the key below according to the specific region your user pool is in.
            "cognito-idp.us-east-1.amazonaws.com/us-east-1_qSAnKVgn7": result
              .getIdToken()
              .getJwtToken(),
          },
        });

        //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
        AWS.config.credentials.refresh((error) => {
          if (error) {
            console.error(error);
            reject(401);
          } else {
            // Instantiate aws sdk service objects now that the credentials have been updated.
            // example: var s3 = new AWS.S3();
            // console.log("Successfully logged!");
            resolve(200);
          }
        });
      },

      onFailure: function (err) {
        console.error(err);
        reject(401);
      },
    });
  });
};

module.exports = {
  login,
};
