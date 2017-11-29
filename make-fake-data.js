#!/usr/bin/env node

const fs = require('fs')

//let rows = ["name,value"]

//rows.push(`thing1,${Math.round(Math.random()*1000)}`)
//rows.push(`thing2,${Math.round(Math.random()*1000)}`)

//const output = rows.join("\n")
var timeStamp = Math.floor(Date.now() / 1000);
var x=Math.round(Math.random()*1000);
var y=Math.round(Math.random()*1000);

if(fs.existsSync('data.txt')) {

let rows=[]
rows.push(`${timeStamp},${x},${y}`)
let output = rows.join("\n")
output=output.concat("\n")

fs.appendFileSync('data.txt',output)

}
else {

let rows=["timeStamp,x,y"]

rows.push(`${timeStamp},${x},${y}`)

let output=rows.join("\n")
output=output.concat("\n")

fs.writeFileSync('data.txt', output)
}


