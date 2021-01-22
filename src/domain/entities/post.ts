import Comment from "./comment"
import User from "./user"

class Post {
    _id: string = ''
    author: string = ''
    caption: string = ''
    medias: Array<any> = []
    totalLike: number = 0
    totalComment: number = 0
    listComment: Array<Comment> = [new Comment({})]
    topFollowingLikeToo: Array<User> = [new User({})]

    constructor(post) {
        Object.keys(this).forEach(key => {
            if (post[key]) {
                this[key] = post[key]
            }
        })
    }
}

export default Post