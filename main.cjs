function getNumber(value) {
    const intValue = parseInt(value)
    const finalValue = intValue.toString(2)
    console.log(finalValue);
}

function getText(value) {
    output = []
    for (let i = 0; i < value.length; i++) {
        let bin = value[i].charCodeAt().toString(2);
        while (bin.length < 8)
            bin = "0" + bin;
        output.push(bin);
    }
    console.log(output.join(" "));
}

console.log('\nConvert what you want into binary -> exit() in order to exit!\n')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const recursiveReadLine = function() {
    readline.question(`Characters: `, value => {
        if (value === 'exit()') {
            return readline.close()
        }
        else if (isNaN(value)) {
            getText(value)
        } else {
            getNumber(value)
        }
        recursiveReadLine()
    })
}

recursiveReadLine()