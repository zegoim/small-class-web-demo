const { execSync } = require("child_process");
const path = require("path");

const options = { cwd: __dirname, stdio: "inherit" };

const localName = process.argv[2];
const remoteName = localName.split("/").filter(char => char !== "." 
&& char !== "").slice(-1)[0]
execSync(`ossr ${localName} app/${remoteName}/`, options)

