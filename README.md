# Setting up local environment

1. Clone this repo.
2. In the same directory, run `npm install`. This will also run the gulp tasks to generate the `dist` folder.

## Developing new features

1. Run `node server.js` to start your server.
2. Run `gulp watchAll` to compile templates, JavaScript, and CSS in the `dist` directory when files change. Restart the watcher if you add new files.

## Deploying

Heroku will automatically deploy new changes as they are pushed to the `master` branch of this repo.
