let a = 15
if (a>10) {
    a += 15
}
console.log(a)

const profile = {
    age: 20,
    totalFriends: 572
}

if (!profile.name) {
    console.log('Name not found')
}

let b = 14
if (b<8) {
    b += 16
} else {
    b -= 15
}

console.log(b)

const age = 18

if (age>30) {
    console.log('can rabota brigadirom')
} else if (age>=20) {
    console.log('can be stroitel')
} else {
    console.log('only pyaterochka')
}


const ageTwo = 16

if (ageTwo >= 18) {
    console.log('is adult')
}

if (ageTwo >= 12 && ageTwo < 18) {
    console.log('is teenager')
}

if (ageTwo < 12) {
    console.log('is child')
}


const slojenieNumberPositive = (c, d) => { 
    if (typeof c !== 'number' || typeof d !== 'number') {
        return 'one of the arguments is not a number'
    }

    if(c <= 0 || d <= 0) {
        return "number not positive"
    }

    return c + d 
}

slojenieNumberPositive(10, 14)
console.log(slojenieNumberPositive(10,14))


 const month = 3

 switch(month) {
    case 12:
        console.log('decabr')
        break
    case 1:
        console.log('yanvar')
        break
    case 2: 
        console.log('fevral')
        break
    default:
        console.log('already ne zima')
 }

const value = 11 

value 
 ? console.log('Условие истинно')
 : console.log('условие гавно')


