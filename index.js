const { watch } = require('fs')
const child_process = require('child_process')
const chalk = require('chalk')

function spawnSync(command, args){
    console.log(chalk.blue(command), args, chalk.yellow(new Date().toLocaleString()))
    
    const result = child_process.spawnSync(command, args)
    
    console.log(chalk.green(`${result.stdout}`))
    console.log(chalk.red(`${result.stderr}`))
    console.log(chalk.blue(`status ${result.status}`))
}

function watchAll(names, callback){
    for(const name of names){
        watch(name, (event, filename) => {
            console.log(chalk.magenta(event), chalk.blue(filename), chalk.yellow(new Date().toLocaleString()))

            callback()
        })
    }
}

watchAll(["src"], _ => spawnSync("npm", ["run", "compile"]))

watchAll(["dist"], _ => {})
