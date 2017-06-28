# Setting up local environment

1. Clone this repo.
2. In the directory above, run `npm-install`.

# Developing new features

1. Run `node server.js`. Optional: Specify the port for the local server with environment variable `OPENSHIFT_NODEJS_PORT` (e.g., 80).
2. Run `gulp watchAll`.

---

# Recreating the application on OpenShift

Create the application with the following command:  
`rhc app create portfolio nodejs-0.10 NPM_CONFIG_PRODUCTION="true" --from-code https://github.com/cmpetrilla/portfolio.git`  
This will prevent OpenShift from installing modules in the `devDependencies` section of `package.json`.
