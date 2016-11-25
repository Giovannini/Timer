const npm = run({
  sh: `yarn`,
  watch: 'package.json'
});

const mkdir = run({
  sh: 'mkdir -p public'
});

const css = run({
  name: 'stylesheets',
  sh: 'rimraf public/stylesheets/ && ncp client/stylesheets/ public/stylesheets/',
  watch: 'client/stylesheets/**/*.css'
}).dependsOn(npm, mkdir);

const images = run({
  name: 'images',
  sh: 'rimraf public/images/ && ncp client/images/ public/images/',
  watch: 'client/images/**/*'
}).dependsOn(npm, mkdir);

const client = run({
  name: 'client',
  sh: 'webpack --config config/webpack.config.js --bail',
  watch: ['client/scripts/**/*.ts', 'config/webpack.config.js']
}).dependsOn(css, images);

const compileServer = run({
  name: 'compileServer',
  sh: 'tsc'
}).dependsOn(npm, mkdir);

const server = runServer({
  httpPort,
  sh: `node ./bin/server.js ${httpPort}`,
  watch: 'server/**/*.ts'
}).dependsOn(compileServer);

proxy(server, 8080).dependsOn(client);
