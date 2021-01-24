import Post from '@entities/post'
import Actions from '@view/actions'
import Comments from "@view/comments"
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import uselistPosts from 'src/ui/viewModels/uselistPosts'
import "./style.scss"
const Posts = () => {
    const listPostsStore = useSelector((state: any) => state.listPosts)
    const { listPosts, getlistPosts } = uselistPosts(listPostsStore)

    useEffect(() => {
        getlistPosts.execute({ limit: 10, skip: 0 })
    }, [])

    return (
        <div className="posts">
            {
                listPosts.map((post: Post) => {
                    return <div key={post._id}>
                        <div className="posts__header">
                            <div className="posts__header-avatar">
                                <img src={post.author.avatar} alt="huy" />
                            </div>
                            <div className="posts__header-name">
                                {post.author.userName}
                            </div>
                        </div>
                        <div className="posts__img">
                            <img src={post.medias[0]} alt="kuns" />
                        </div>
                        <Actions key={post._id} post={post} />
                        <Comments />
                    </div>
                })
            }
        </div>
    )
}

export default Posts
