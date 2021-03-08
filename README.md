# Setting up local environment

1. Clone this repo.
2. Run `npm install`.

## Developing new features

Run `npm start` to start your server. This also starts the Webpack watcher.

## Deploying

Commit the changes to the `master` branch. The Webpack build will run as part of a pre-commit hook, and that will build the `dist` folder locally. After pushing the changes, the GitHub will refresh the site via Pages.
