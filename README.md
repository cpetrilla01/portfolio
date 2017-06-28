# Setting up local environment

Follow the steps below to set up your local environment for this project.

## Clone the repo

1. Use `rhc git-clone -a portfolio` to clone the repo.
2. In the same directory, run `npm-install`.

## Develop new features

1. Optional: Specify the port for the local server with environment variable `OPENSHIFT_NODEJS_PORT` (e.g., `OPENSHIFT_NODEJS_PORT=80`).
2. Run `node server.js` to start your server.
3. Run `gulp watchAll` to compile templates, JavaScript, and CSS in the `dist` directory when files change. Restart the watcher if you add new files.
4. If you add images, run `gulp optimizeImages` before committing. This optimizes images inline in the `app/img` directory.

# Recreating the application on OpenShift

Create the application with the following command:  
`rhc app create portfolio nodejs-0.10 NPM_CONFIG_PRODUCTION="true" --from-code https://github.com/cmpetrilla/portfolio.git`  
This will prevent OpenShift from installing modules in the `devDependencies` section of `package.json`.
