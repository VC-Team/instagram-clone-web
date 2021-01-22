import React, { useState } from 'react'
import "./style.scss"
import { FaRegPaperPlane, FaRegHeart, FaRegComment, FaRegBookmark } from "react-icons/fa"
const Actions = () => {
    const [ activeLike, setActiveLike ] = useState(false);
    const [ activeSave, setActiveSave ] = useState(false);
    return (
        <div className="Actions">
            <div className="actions">
                <div className="actions__list-a">
                    <span
                        className={`action__list_like ${ activeLike && "active" } action`}
                        onClick={() => setActiveLike(!activeLike)}
                    >
                        <FaRegHeart className="action__icons" />
                    </span>
                    <span className="action__list_message action">
                        <FaRegComment className="action__icons" />
                    </span>
                    <span className="action__list_message action">
                        <FaRegPaperPlane className="action__icons" />
                    </span>
                </div>
                <div className="action-b">
                    <span
                        className={`action-b-save ${ activeSave && "active" } action`}
                        onClick={() => setActiveSave(!activeSave)}
                    >
                        <FaRegBookmark className="action__icons" />
                    </span>
                </div>
            </div>
            <div className="view">
                <span className="view__number">26.666.666 lượt xem</span>
            </div>
            <div className="status">
                <div className="status-name">Huy_kun@3214</div>
                <div className="status-msg">
                    Xuân đến xuân đi xuân lại đến.
                    Xuân đi xuân đến xuân lại đi.
                    Xuân đến xong đi, xong lại đến.
                    Xuân đi rồi đến, đến rồi đi... 😂</div>
            </div>
        </div>
    )
}

export default Actions
