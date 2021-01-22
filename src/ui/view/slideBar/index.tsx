import React, { useState } from 'react'
import { useHistory } from 'react-router';
import "./style.scss"
const SlideBar = () => {
    const history = useHistory();
    const [ state ] = useState([
        {
            id: 1,
            image: "https://i.pinimg.com/236x/1a/55/7e/1a557e2d4558d7f6c69f66818d998f0d.jpg",
            name: "Huy kun nguyen"
        },
        {
            id: 2,
            image: "https://i.pinimg.com/236x/80/5d/4a/805d4aa6922f8b0b6b0266038331f168.jpg",
            name: "Huy kun nguyen"
        },
        {
            id: 3,
            image: "https://i.pinimg.com/236x/14/48/40/1448407d6447841443f4a9e27fa761a9.jpg",
            name: "Huy kun nguyen"
        },
        {
            id: 4,
            image: "https://i.pinimg.com/236x/05/81/59/058159927363c75da86d755a4136a603.jpg",
            name: "Huy kun nguyen"
        },
    ])
    return (
        <div className="sidebar">
            <div className="sidebar__user">
                <div className="sidebar__user-avator" onClick={() => history.push("/profile")}>
                    <img src="https://i.pinimg.com/236x/59/ff/51/59ff51e62283d9e7b6429b451d48c85a.jpg" alt="kun" />
                </div>
                <div className="sidebar__user-name">Huy kun</div>
            </div>
            <div className="sidebar__list">
                <div className="sidebar__show_friend">
                    <h3>Gợi ý cho bạn</h3>
                    <span><a href="#">Xem tất cả</a></span>
                </div>

                {state.map((user, index) => {
                    return (
                        <div className="sidebar__list-user" key={index}>
                            <div className="sidebar__list-a">
                                <div className="sidebar__list-a-img">
                                    <img src={user.image} alt={user.name} />
                                </div>
                                <div className="sidebar__list-a-name">{user.name}</div>
                            </div>
                            <div className="sidebar__list-b">
                                <a href="#">Follow</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SlideBar
