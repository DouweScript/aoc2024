import * as read from './readfile.js'

let data = read.readFile("inputs/day3.txt")[0]
let muls = data.split("mul")
let sum = 0
muls.forEach((mul) => {
    let x = mul.slice(0,9)
    if(x.charAt(0) == '(' && x.includes(')') && x.includes(',')){
        let numbers = x.split(')')[0].split(('('))[1]
        let firstNumber = parseInt(numbers.split(',')[0])
        let secondNumber = parseInt(numbers.split(',')[1])

        if(Number.isInteger(firstNumber) && Number.isInteger(secondNumber)){
            sum = sum + firstNumber * secondNumber
        }
    }
})

console.log(sum)

let x = data.split("don't()")
let dontSum = 0;

for (let i=1; i<x.length; i++){
    let text = x[i]
    if(text.includes('do()')){
        let dontText = text.split("do()")[0]
        let number = dontText.split("mul")
        number.forEach((x) => {
            let temp = x.slice(0,9)
            if(temp.charAt(0) == '(' && temp.includes(')') && temp.includes(',')){
                let numbers = temp.split(')')[0].split(('('))[1]
                let firstNumber = parseInt(numbers.split(',')[0])
                let secondNumber = parseInt(numbers.split(',')[1])
        
                if(Number.isInteger(firstNumber) && Number.isInteger(secondNumber)){
                    dontSum = dontSum + firstNumber * secondNumber
                }
            }
        })
    }

    if(!text.includes('do()')){
        let number = text.split("mul")
        number.forEach((x) => {
            let temp = x.slice(0,9)
            if(temp.charAt(0) == '(' && temp.includes(')') && temp.includes(',')){
                let numbers = temp.split(')')[0].split(('('))[1]
                let firstNumber = parseInt(numbers.split(',')[0])
                let secondNumber = parseInt(numbers.split(',')[1])
        
                if(Number.isInteger(firstNumber) && Number.isInteger(secondNumber)){
                    dontSum = dontSum + firstNumber * secondNumber
                }
            }
        })
    }
}

console.log(sum - dontSum)