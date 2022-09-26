const objectA = {
    a: 10,
    b: false
}
const copyOfA = objectA
copyOfA.a = 20
objectA.c = 256

console.log(objectA)

const objectB = {
    a: false,
    b: 256
} 
const copyOfB = objectB
copyOfB.b = 512
objectB.c = 64

console.log(objectB)