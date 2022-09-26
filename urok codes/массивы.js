const myObject = {//это объект
    0: 1,
    1: 2,
    2: 3,
    length: 3
}

console.log(myObject)

const myArray = [1, 2, 3]// по нормику 
console.log(myArray)

const myArray2 = new Array(1, 2, 3)
console.log(myArray2)

myArray === myArray2
const myArray3 = myArray2
console.log(myArray3)

console.log(myArray[0])
console.log(myArray[1])
console.log(myArray.length)

myArray.length = 5
console.log(myArray.length)

const massive = [1, 2, 3, 4]
console.log(massive)
console.log(massive.length)

massive[2] = 'abc'
console.log(massive)

massive[4] = true

console.log(massive)
console.log(massive.length)

const newMassive = [1, 2, 3]
newMassive.push(4)//подвинуть
console.log(newMassive)

newMassive.push(true)
console.log(newMassive)

newMassive.pop()//удаление
console.log(newMassive)

const removedElement = newMassive.pop() // возвращение?? 
console.log(newMassive)
console.log(removedElement)

newMassive.unshift(false)
console.log(newMassive)

newMassive.shift()//удаление первого элемента
console.log(newMassive)

const newRemovedElement = newMassive.shift()
console.log(newMassive)
console.log(newRemovedElement)

newMassive.unshift(1)

newMassive.forEach(el => console.log(el*2))//эта штука не меняет массив
console.log(newMassive)

const newMyMassive = newMassive.map(el => el * 3)
console.log(newMyMassive)
console.log(newMassive)
