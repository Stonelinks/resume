const http = require('http');
const ecstatic = require('ecstatic');
const browserless = require('browserless')();
const mv = require('mv');

const PDF_PATH = `${__dirname}/build/lucas_doyle_resume.pdf`;
const PORT = 8080;

const server = http.createServer(
  ecstatic({
    root: `${__dirname}/build`,
  }),
);

server.listen(PORT);

browserless
  .pdf(`http://localhost:${PORT}#pdf`, {
    device: 'iMac 27',
    margin: {
      top: '0.35in',
      right: '0.35in',
      bottom: '0.35in',
      left: '0.35in',
    },
    media: 'print',
    scale: 1,
    printBackground: true,
  })
  .then(function (tmpFile) {
    mv(tmpFile.path, PDF_PATH, function (err) {
      if (err) {
        console.log(err);
        process.exit(1);
      }

      console.log(`PDF generated at ${PDF_PATH}`);
      server.close();
      process.exit(0);
    });
  });
