import * as express from 'express'
import { join } from 'path'
import { readFileSync } from 'fs'

const wt = require('webtask-tools')

const staticDir = "node_modules/dappform-filler/dist"

const app = express()

app.use(express.static(join(__dirname, staticDir)))

app.get('/package.json', (req, res) => {
  const packageJson = readFileSync(join(__dirname,'package.json'))
  const obj = JSON.parse(packageJson.toString())
  res.json(obj)
})

module.exports = wt.fromExpress(app)

// const testPort = 3000
// if (process.argv[2] === testPort.toString()) {
//   app.listen(testPort, () => console.log("Listening on "+testPort))
// }