class Comment {
    author: string = ''
    postId: string = ''
    parentId: string = ''
    content: string = ''
    tags: Array<string> = []
    constructor(post) {
        Object.keys(this).forEach(key => {
            if (post[ key ]) {
                this[ key ] = post[ key ]
            }
        })
    }
}

export default Comment