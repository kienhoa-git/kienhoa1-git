var data = {
     users: [
        {
            id: 1,
            name: 'neko',
        },
        {
            id: 2,
            name: 'hentai',
        },
        {
            id: 3,
            name: 'z',
        },
    ],
     comments: [
        {
            id:1,
            user_id: 1,
            content: 'chưa ra viddeo =(('
        },
        {
            id:2,
            user_id: 2,
            content: 'đợi tí'
        }
    ]
}
function getComment() {
    return new Promise((resolve)=>{
          setTimeout(()=>{resolve(comment)},1000)
    })
}
function getUserById(userIds) {
    return new Promise((resolve)=>{
          var user = users.filter((user)=>{
            return userIds.includes(user.id)
          })
          setTimeout(()=>{resolve(user)},1000)
    })
}
getComment()
   .then((comments)=>{
    var userIds = comments.map((user)=>{return user.user_id})
    return getUserById(userIds)
           .then((users)=>{
            return {
                users : users,
                comments : comments
            }
           })
    })
    .then(data =>{
        var commentBlock = document.querySelector('.courses-list')
        var html = ''
        data.comments.forEach(comment => {
            var player = data.users.find(user =>{
                return user.id === comment.id
            })
        })
        html += `<li>${userId.name}: ${comment.content}</li>`
        commentBlock.innerHTML = html
    })