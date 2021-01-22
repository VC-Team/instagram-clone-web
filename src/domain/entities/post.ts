class Post {
    author: string = ''
    caption: string = ''
    medias: Array<any> = []
    constructor(post) {
        Object.keys(this).forEach(key => {
            if (post[ key ]) {
                this[ key ] = post[ key ]
            }
        })
    }
}

export default Post