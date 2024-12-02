import * as read from './readfile.js'

//part1
let array = read.readFile('inputs/day1.txt')
let leftArray = []
let rightArray = []

array.forEach((data) => {
    let left = parseInt(data.split("  ")[0])
    let right = parseInt(data.split("  ")[1])
    leftArray.push(left)
    rightArray.push(right)
})

leftArray.sort(function(a, b){return a - b});
rightArray.sort(function(a, b){return a - b});

let sum = 0;
for(let i=0; i<array.length; i++){
    let diffirence = Math.abs(leftArray[i] - rightArray[i])
    sum = sum + diffirence
}

console.log(sum)

//part2
//cheated a bit by making a set first and saw that there weren't duplicate elements
let sim = 0;

leftArray.forEach((location) => {
    let sum = 0
    rightArray.forEach((rightLocation) =>{
        if(location == rightLocation){
            //console.log(location)
            sum = sum + 1
        }
    })

    sim = sim + sum * location
})

console.log(sim)
