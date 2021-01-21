import React, { useState } from 'react'
import "./style.scss"
import { FaCamera } from "react-icons/fa"
const Create = () => {
    const [ title, setTitle ] = useState("");
    const [ image, setImage ] = useState("");
    const handleImage = (e: any) => {
        setImage(e.target.files[ 0 ])
    }
    const createPost = (e: any) => {
        e.preventDefault();
        console.log(title, image);

    }
    return (
        <div className="create">
            <form onSubmit={createPost}>
                <div className="create__input">
                    <input
                        type="text"
                        className="create__inputt"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="What are in your mind..."
                        required

                    />
                </div>
                <div className="create__second">
                    <div className="create__second-a">
                        <label htmlFor="file">
                            <FaCamera className="camera" />
                        </label>
                        <input type="file"
                            className="file"
                            id="file"
                            onChange={handleImage}
                            required />
                    </div>
                    <div className="create__second-b">
                        <input type="submit" value="Create" className="btn-sweet" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Create
