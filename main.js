"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const util_1 = require("util");
const path_1 = require("path");
const url_1 = require("url");
const readFile = util_1.promisify(fs.readFile);
const staticDir = "node_modules/dapp-form/docs/";
const urlPath = "dappform-host-task";
const mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css"
};
module.exports = async function (context, req, res) {
    const path = url_1.parse(req.url).pathname;
    const file = (path === '/dappform-host-task') ? "index.html" : ""; // default file to serve in directories
    const localPath = path.replace(urlPath, '') + file;
    let fileContents;
    try {
        const file = path_1.join(__dirname, staticDir, localPath);
        fileContents = await readFile(file);
    }
    catch (e) {
        console.error(e);
        res.writeHead(500, "Trouble");
        return res.end();
    }
    const mimeType = mimeTypes[localPath.substr(localPath.lastIndexOf('.') + 1)] || "text/plain";
    res.writeHead(fileContents ? 200 : 404, { 'Content-Type': mimeType });
    res.end(fileContents);
};
