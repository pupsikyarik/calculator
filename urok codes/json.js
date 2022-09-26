const name = 'yarik'
const mmrdota = 1200

const userProfile = {
    name,
    mmrdota,
    hours: 2000
}
console.log(userProfile)

const cityGreetings = {
    country: 'tolyati',
    cityGreetingsTwo () {
        console.log('Greetings!')
    }
}
console.log (cityGreetings.country)
cityGreetings.cityGreetingsTwo()

const vkpage = {
    ava: 'krytaya',
    likes: 4
}
JSON.stringify(vkpage) 
console.log(JSON.stringify(vkpage))

const vkpageStringified = JSON.stringify(vkpage)
JSON.parse(vkpageStringified)
console.log (JSON.parse(vkpageStringified))


