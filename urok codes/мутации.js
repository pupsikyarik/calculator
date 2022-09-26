const pivo = {
    piloliter: 0.75,
    whatpivo: 'baltika'
}

const pivo2 = Object.assign({}, pivo)
pivo2.vkusno = true
console.log(pivo)
console.log(pivo2)

const pudgeplayer = { 
    age:32,
    games: 'mnogo'
}
const techiesplayer = {...pudgeplayer}
techiesplayer.age = 12
console.log(pudgeplayer)
console.log(techiesplayer)


const rabotyaga = {
    rabota: 'zavod',
    deneg: 18075,
     info: {
        dotaplayer: true
     }
}
const officegay = JSON.parse(JSON.stringify(rabotyaga))
officegay.name = 'Ivan'
officegay.rabota = 'rostelekom'
console.log(rabotyaga)
console.log(officegay)