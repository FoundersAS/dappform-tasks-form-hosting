import * as express from 'express'
import { join } from 'path'

const wt = require('webtask-tools')

const staticDir = "node_modules/dapp-form/docs/"

const app = express()

app.use(express.static(join(__dirname, staticDir)))

module.exports = wt.fromExpress(app)