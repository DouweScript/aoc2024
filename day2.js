import * as read from './readfile.js'

//part1
let array = read.readFile('inputs/day2.txt')
let safeSum = 0
let unsafeNumbers = []
array.forEach((report) =>{
    let numbersInReport = report.split(' ').map(x => parseInt(x))
    if(checkAllIncreasingOrDecreasing(numbersInReport) && checkSafety(numbersInReport)){
        safeSum++
    }

    //need for part2
    if(!checkAllIncreasingOrDecreasing(numbersInReport) || !checkSafety(numbersInReport)){
        unsafeNumbers.push(numbersInReport)
    }
})

console.log(safeSum)

//part 2
let newSafeSum = 0
unsafeNumbers.forEach((report) => {
    let safe = false
    for(let i=0; i<report.length; i++){
        const removed = report.slice(0, i).concat(report.slice(i + 1));
        if(checkAllIncreasingOrDecreasing(removed) && checkSafety(removed)){
            safe = true
            newSafeSum++
            break
        }
    }
})

console.log(newSafeSum + safeSum)

//functions need in part 1 and part 2
function checkSafety(array){
    for(let i=0; i<array.length-1; i++){
        let x = Math.abs(array[i] - array[i+1])
        if(x > 3){
            return false
        }
    }
    return true
}

function checkAllIncreasingOrDecreasing(array){
    if(array[0] > array[array.length-1]){
        array = array.reverse()
    }

    for(let i=0; i<array.length-1; i++){
        if(array[i] >= array[i+1]){
            return false
        }
    }
    return true
}