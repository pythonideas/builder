const { watch } = require('fs')
const child_process = require('child_process')

function spawnSync(command, args){
    console.log("spawn sync", command, args)
    
    const result = child_process.spawnSync(command, args)
    
    console.log(`stdout ${result.stdout}`)
    console.log(`stderr ${result.stderr}`)
    console.log(`status ${result.status}`)
}

watch("src", (event, filename) => {
    console.log("src", event, filename)
    
    spawnSync("npm", ["run", "compile"])
})

watch("dist", (event, filename) => {
    console.log("dist", event, filename)
})
