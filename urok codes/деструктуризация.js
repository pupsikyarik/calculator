const vkProfile = {
    name: 'vovan',
    totalLikes: 127,
    totalComenti: 42
}

const { name, totalLikes } = vkProfile
const { totalComenti } = vkProfile

console.log(name)
console.log(totalComenti)

const fruits = [ 'Yabloko', 'Mandarin' ]

const [ fruitOne, fruitTwo ] = fruits
console.log(fruitOne)
console.log(fruitTwo)

const odnoklasskiProfile= { 
    name: 'kiruxa',
    likeTotal:32,
    stenaOpen: false
}

const odnoklasskiInfo = ({ name, likeTotal}) => {
    if(!likeTotal) {
        return `User ${name} netu likes`
    }
    return `User ${name} estb ${likeTotal} likes`
}

odnoklasskiInfo(odnoklasskiProfile)
console.log(odnoklasskiInfo(odnoklasskiProfile))