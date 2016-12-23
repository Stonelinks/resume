import shell from 'child_process';

function postBuild (pages, callback) {
  shell.execSync('cp -r node_modules/font-awesome/css/font-awesome.css public/');
  shell.execSync('cp -r css public/css');
  shell.execSync('cp -r node_modules/font-awesome/fonts public/');
  callback();
}

export { postBuild };
