#!/usr/bin/env node

const fs = require('fs')

let rows = ["name,value"]

rows.push(`thing1,${Math.round(Math.random()*1000)}`)
rows.push(`thing2,${Math.round(Math.random()*1000)}`)

const output = rows.join("\n")
fs.writeFileSync('data.txt', output)
