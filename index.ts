import * as express from 'express'
import { join } from 'path'

const wt = require('webtask-tools')

const staticDir = "node_modules/dappform-filler/dist"

const app = express()

app.get('/version', (req:any, res) => res.send(req.webtaskContext.secrets.version || "0.0.0"))

app.use(express.static(join(__dirname, staticDir)))

module.exports = wt.fromExpress(app)

// const testPort = 3000
// if (process.argv[2] === testPort.toString()) {
//   app.listen(testPort, () => console.log("Listening on "+testPort))
// }