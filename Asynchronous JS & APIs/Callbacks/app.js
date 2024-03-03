//login
//posts
//create post

//sipariş
//sipariş hazırlama

console.log("start")

const login = (username, password, callback) => {
    setTimeout(() => {
        callback({ username: username, email: "bedirhansgrc@gmail.com" })
    }, 1000)
}
const getPostsByUsername = (username, callback) => {
    setTimeout(() => {
        callback(["post 1", "post 2", "post 3"])
    }, 2000);
}

const getPostDetails = (post, callback) => {
    setTimeout(() => {
        callback("post details")
    }, 1000);
}


login("bedirhan", "s1234", user => {
    console.log(user.username)
    console.log(user.email)

    getPostsByUsername(user.username, (posts) => {
        console.log(posts)

        getPostDetails(posts[0], (details) => {
            console.log(details)
        })
    })
})
console.log("end")