import shell from "child_process"
import fs from "fs"
import path from "path"
import pdf from "html-pdf"

function postBuild(pages, callback) {
  shell.execSync("cp -r node_modules/font-awesome/css/font-awesome.css public/")
  shell.execSync("cp -r node_modules/font-awesome/fonts public/")

  const html = fs.readFileSync("./public/index.html", "utf8")

  pdf
    .create(html, {
      format: "Letter",
      quality: "100",
      base: `file://${path.resolve(".")}/public`,
      phantomArgs: [
        // '--disk-cache=false',
        "--debug=true"
        // '--cookies-file=/tmp/cookies-file'
      ],
      header: {
        // height: '45mm',
        contents: "<div id=\"is-pdf\" />"
      }
    })
    .toFile("./public/resume.pdf", function(err, res) {
      if (err) return console.log(err)
      console.log("PDF created")
      callback()
    })
}

export { postBuild }
