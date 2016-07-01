# Setting up local environment

1. Clone this repo.
2. In the directory above, run `npm-install`.
3. Run the default `gulp` task.

# Developing new features

1. To start the local server, run `node server.js`. Optional: Set an environment variable `OPENSHIFT_NODEJS_PORT` to specify the port for the local server (e.g., 80).
2. Run `gulp watchAll` to copy source files to the `dist` folder on change. This compiles and minifies LESS files and copies HTML files as they're changed.