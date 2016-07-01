# Setting up dev environment
Follow the steps below to set up your local environment.
1. Clone this repo.
2. In the directory above, run `npm-install`.
3. Run the default `gulp` task.
That's all! The gulp task will create a `dist` folder, which serves your files locally. This emulates the behavior of the OpenShift server.
# Developing new features
1. To start your local server, run `node server.js`. Optional: Set an environment variable `OPENSHIFT_NODEJS_PORT` to specify the port for your local server (e.g., port 80).
2. Run `gulp watchAll` to copy source files to the `dist` folder on change.