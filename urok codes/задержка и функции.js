function sum(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}

console.log(sum(15,4))

const brawler = {
    age: 12,
    name: 'andruxa'
}
function increasebrawlerage(brawler) {
    brawler.age += 2
    return brawler
}

increasebrawlerage(brawler)
console.log(brawler.age)

function printkryt() {
    console.log('kryt')
}
setTimeout(printkryt, 3000)// 3к милисекунд и оно появится

const a = 10

function myFn() {
    function innerFN(){
        console.log(a)
    }
    innerFN()
}

myFn()

let c
let b 

function mySecondFn() {
    let b
    c = true
    b = 60
    console.log(b)
    return mySecondFn
}

mySecondFn()

console.log(c)
console.log(b)