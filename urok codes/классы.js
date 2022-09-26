class Coment {
    constructor(text){
        this.text = text
        this.votesQty = 0
    }
    upvote() {
        this.votesQty += 1 
    }
    static mergeComents(first, second) {
        return `${first} ${second}`
    }
}

const firstComment = new Coment ('hahah ti lox)))')

firstComment.upvote()
console.log(firstComment)

console.log(firstComment instanceof Coment)

class NumbersArray extends Array {
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }
}

const myArray = new NumbersArray(2, 5, 7)

console.log(myArray)
myArray.sum()
console.log(myArray.sum())