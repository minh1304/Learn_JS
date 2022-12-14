var users = [
    {
        id: 1,
        name: 'Kien Dam'
    },
    {
        id: 2,
        name: 'Son Dang'
    },
    {
        id: 3,
        name: 'Hung Dam '
    }
    // ...user

];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Hôm nay tôi đi học'
        
    },
    {
        id: 2,
        user_id: 2,
        content: 'ahihih'
    },
    {
        id: 3,
        user_id: 3,
        content: 'i love UIT'
    }
];

//1: lấy comment
//2: Từ comment lấy ra user_id
//3: Từ user_id lấy ra id tương ứng 




function getComment() {
    return new Promise(resolve =>{
        resolve(comments)

    })
}
function getusersByID(userIds) {
    return new Promise(resolve=>{
        var result = users.filter(user =>{
            return userIds.includes(user.id)
        });
        resolve(result)

    })
}
getComment()
    .then(comments =>{
        var userIds = comments.map(comment=>{
            return comment.user_id;
        })
        return getusersByID(userIds)
            .then(users =>{
                return {
                    users: users,
                    comments: comments,
                }
            })

    })
    .then(data=>{
        var commentBlock = document.getElementById('comment_block');
        var html = '';
        data.comments.forEach(comment => {
            var user = data.users.find(user=>{
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content} </li>`;
            
        });
        commentBlock.innerHTML = html;
    })
    