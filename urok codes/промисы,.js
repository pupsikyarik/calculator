const myPromise = new Promise ((resolve, reject) =>{
 // тут результат этой функции в виде ассинхроного че-то там 
} )

myPromise.then(value => {
//тут действие если промис успешно выполнен, валюе это результат resolve

})

myPromise.catch(error => {
    //действие если промис не выполнен error результат reject 
})