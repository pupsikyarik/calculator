const krytoi = {
    popular: true,
    subsOnTwitch: 47
}
const countryPropertyName = 'country'
krytoi[countryPropertyName] = 'everywhere'
console.log(krytoi)

const rabotyaga = {
    popular: true,
    info: {
        kryt: true,
        subNaPapicha: 'five let'
    }
}
console.log(rabotyaga.info.subNaPapicha)
delete rabotyaga.info['subNaPapicha']
console.log(rabotyaga.info)