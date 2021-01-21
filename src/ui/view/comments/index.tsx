import React, { useState } from 'react'
import "./style.scss"
import { FaRegHeart } from "react-icons/fa"
const Comments = () => {
    const [ activeLike, setActiveLike ] = useState(false)
    return (
        <div className="comments">
            <div className="comments__viewAllComment">
                <div className="comments__container-msg">Xem tất cả 97 bình luận</div>
            </div>
            <div className="comments__container">
                <div className="comments__container-a">
                    <div className="comments__container-name">Huy kun@2314</div>
                    <div className="comments__container-msg">Hay quá e ơi</div>
                </div>
                <div className="comments__container-b">
                    <FaRegHeart
                        className={`comment__icons ${ activeLike && "active" }`}
                        onClick={() => setActiveLike(!activeLike)}
                    />
                </div>
            </div>
            <div className="comments__dateTime">
                <div className="comments__container-msg">2 ngày trước</div>
            </div>
            <div className="comments__seaction">
                <form>
                    <input
                        type="text"
                        className="comment_input"
                        placeholder="Add a commnet ..."
                        name=""
                        id=""
                        required />
                </form>
            </div>

        </div>
    )
}

export default Comments
