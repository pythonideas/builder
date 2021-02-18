const { watch } = require('fs')

watch("src", (event, filename) => {
    console.log(event, event)
})
