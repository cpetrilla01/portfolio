# Setting up local environment

1. Clone this repo.
2. In the same directory, run `npm install`.

## Developing new features

1. Run `node server.js` to start your server.
2. Run `gulp watchAll` to compile templates, JavaScript, and CSS in the `dist` directory when files change. Restart the watcher if you add new files.
3. If you add images, run `gulp optimizeImages` before committing. This optimizes images inline in the `app/img` directory.

## Deploying

Heroku will automatically deploy new changes as they are pushed to the `master` branch of this repo.