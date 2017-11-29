#!/usr/bin/env node

const fs = require('fs')

var timeStamp = Math.floor(Date.now() / 1000)
var x=Math.round(Math.random()*1000)
var y=Math.round(Math.random()*1000)

if(fs.existsSync('data.txt')) { // data file exists; append data to it

let rows=[]
rows.push(`${timeStamp},${x},${y}`)
let output = rows.join("\n")
output=output.concat("\n")
fs.appendFileSync('data.txt',output)

}

else { // data file doesn't exist; need to create the file and add header to top

let rows=["timeStamp,x,y"]
rows.push(`${timeStamp},${x},${y}`)
let output=rows.join("\n")
output=output.concat("\n")
fs.writeFileSync('data.txt', output)

}


