//create interface to receive inputs via terminal

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function getValue(value) {
    output = []
    for (let i = 0; i < value.length; i++) {
        /*if (isFinite(value[i]) && value[i] !== ' ') {
            let getNumber = parseInt(value[i])
            let intoBinary = getNumber.toString(2)
            output.push(intoBinary);
        }*/
        let textBinary = value[i].charCodeAt().toString(2);
        while (textBinary.length < 8)
            textBinary = "0" + textBinary;
        output.push(textBinary);
    }
    console.log(output.join(' '));
}

function getNumberBin(value) {
    input = value.split(' ')
    output = []
    for (let j = 0; j < input.length; j++) {
        let numberDecimal = parseInt(input[j], 2)
        let opa = String.fromCharCode(numberDecimal)
        output.push(opa)
    }
    console.log(output.join(''))
}

//console.log('\nConvert what you want into binary -> exit() in order to exit!\n')

const recursiveReadLineBinary = function() {
    readline.question(`Characters: `, value => {
        if (value === 'exit()') {
            return readline.close()
        }
        else if (value === 'change()') {
            recursiveReadLine()
        }
        else if (value.includes('0') || value.includes('1')) {
            getNumberBin(value)
        }
        else {
            console.log('Just binary numbers!')
        }
        recursiveReadLineBinary()
    })
}

const recursiveReadLine = function() {
    readline.question(`Characters: `, value => {
        if (value === 'exit()') {
            return readline.close()
        }
        else if (value === 'change()') {
            recursiveReadLineBinary()
        }
        else {
            getValue(value)
        }
        recursiveReadLine()
    })
}

const main = function() {
    readline.question('Characters to Binary -> 1, Binary to Characters -> 2, Change mode -> change(), in order to exit -> exit() : ', options => {
        if (options === 'exit()') {
            return readline.close()
        }
        else if (options === '1') {
            recursiveReadLine()
        }
        else {
            recursiveReadLineBinary()
        }
    })
}

main()