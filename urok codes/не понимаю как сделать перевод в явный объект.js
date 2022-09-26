const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt
})

const firstPost = {
    id: 1,
    author: 'gavnoed'
}

newPost(firstPost)
console.log(newPost(firstPost)) 

const newPostSecond = (addedAtSecond = Date()) => {
    return addedAtSecond
}
    
const secondPost = {
    likes: 5,
    repost: 12
}
    
newPostSecond(secondPost)
console.log(newPostSecond(secondPost))