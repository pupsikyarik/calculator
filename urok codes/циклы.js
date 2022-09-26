for (let i = 0; i < 5; i++ ) {
    console.log(i)
}

const myArray = ['jopa', 4, true]
myArray.forEach((element, index) => {
    console.log(element, index)
})

let a = 0
while (a < 5) {
    console.log(a)
    a++
}

console.log('jopa')

let b = 3
do {
    console.log(b)
    b++
} while (b <= 5)

const myObject = { //фор ин прост
    x: 10, 
    y: true,
    z: 'asdas'
}

for (const key in myObject) {
    console.log(key, myObject[key])
}

console.log('razdelenie')

const mySecondObject = {
    a: 213,
    b: false,
    c: 'pasdpsdap'
}

Object.keys(mySecondObject).forEach(key => {// переменная и её значение
    console.log(key, mySecondObject[key])
})

console.log('second razdelenie')

const thirdObject = {
    a: 16,
    b: 'stroitels',
    c: 64
}

Object.values(thirdObject).forEach(value => {//тип просто значения
    console.log(value)
})

console.log('tretiu razdelenie:)')

const myArrayTwo = [true, 10, 'abc', null]

for (const key in myArrayTwo) {
    console.log(myArrayTwo[key])
}

const nadpis = 'privet'

for (const letter of nadpis) {// не для объектов
    console.log(letter)
}

for (const element of myArrayTwo) {
    console.log(element)
}