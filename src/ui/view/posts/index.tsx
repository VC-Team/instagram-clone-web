import Actions from '@view/actions'
import Comments from "@view/comments"
import React from 'react'
import "./style.scss"
const Posts = () => {
    return (
        <div className="posts">
            <div className="posts__header">
                <div className="posts__header-avatar">
                    <img src="https://i.pinimg.com/236x/59/ff/51/59ff51e62283d9e7b6429b451d48c85a.jpg" alt="huy" />
                </div>
                <div className="posts__header-name">
                    Huy Kun
                </div>
            </div>
            <div className="posts__img">
                <img src="https://i.pinimg.com/564x/ac/47/f5/ac47f5b4fbfd53cb97e437ef7cf7141d.jpg" alt="kuns" />
            </div>
            <Actions />
            <Comments />
        </div>
    )
}

export default Posts
