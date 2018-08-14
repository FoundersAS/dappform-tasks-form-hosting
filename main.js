"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path_1 = require("path");
const fs_1 = require("fs");
const wt = require('webtask-tools');
const staticDir = "node_modules/dappform-filler/dist";
const app = express();
app.use(express.static(path_1.join(__dirname, staticDir)));
app.get('/package.json', (req, res) => {
    const packageJson = fs_1.readFileSync(path_1.join(__dirname, 'package.json'));
    const obj = JSON.parse(packageJson.toString());
    res.json(obj);
});
module.exports = wt.fromExpress(app);
// const testPort = 3000
// if (process.argv[2] === testPort.toString()) {
//   app.listen(testPort, () => console.log("Listening on "+testPort))
// }
