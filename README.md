# serverless-aws-lambda
A short introduction into AWS Lambda

A set commands for deployment:

- npm install
- Create an AWS account
- Sign in to AWS, create a new IAM user getting a key and secret;

type in a console: 

in case a new project is needed: `sls -t aws-nodejs`

Configure your credentials: `sls config credentials -p aws -k <key> - s <secret> -n <IAMuser>`

If -n flag is used as specified above you have to configure 
serverless.yml. Add "profile" property in provider with a name of your user:
`profile: <username>` Mind indentations!

Once everything is configured, execute the following command: `sls deploy`

By the end of the process you will get a link looking like this:
`https://somehash.execute-api.eu-central-1.amazonaws.com/rank?rank=7`

If it happens you need to run it in the console: `sls invoke --function 
<name>`

To remove the function from aws servers: `sls remove --app <name>`
