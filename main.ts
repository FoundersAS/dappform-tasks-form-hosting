import * as express from 'express'
import { join } from 'path'

const wt = require('webtask-tools')

const staticDir = "node_modules/dappform-filler/dist"

const app = express()

app.use(express.static(join(__dirname, staticDir)))

module.exports = wt.fromExpress(app)

const testPort = 8889
if (process.argv[2] === testPort.toString()) {
  app.listen(testPort, () => console.log("Listening on "+testPort))
}