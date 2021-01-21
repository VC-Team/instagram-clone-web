import React, { useState } from 'react'
import "./style.scss"
const Stories = () => {
    const [ state ] = useState([
        {
            id: 1,
            image: "https://i.pinimg.com/236x/59/ff/51/59ff51e62283d9e7b6429b451d48c85a.jpg",
            name: 'huy kun'
        },
        {
            id: 2,
            image: "https://i.pinimg.com/236x/4d/e3/28/4de3281c277a1996915cc87df7153946.jpg",
            name: 'huy kun'
        },
        {
            id: 3,
            image: "https://i.pinimg.com/236x/86/43/e6/8643e6f966375033338ad2b76c3d205c.jpg",
            name: 'huy kun'
        },
        {
            id: 4,
            image: "https://i.pinimg.com/236x/01/8c/a3/018ca32ed248b012f84e109a93484a26.jpg",
            name: 'huy kun'
        },
        {
            id: 5,
            image: "https://i.pinimg.com/236x/26/ce/e8/26cee8e3b7f6074a41b9da0815489229.jpg",
            name: 'huy kun'
        },
        {
            id: 6,
            image: "https://i.pinimg.com/236x/78/b4/8a/78b48a265937ab08e24de19c0960aef2.jpg",
            name: 'huy kun'
        },
        {
            id: 7,
            image: "https://i.pinimg.com/236x/37/fe/fe/37fefe579913a4974f300e76c46794ef.jpg",
            name: 'huy kun'
        },
        {
            id: 8,
            image: "https://i.pinimg.com/236x/7c/f3/3d/7cf33d0197bd5fb0bdd750f60748683c.jpg",
            name: 'huy kun'
        },
        {
            id: 9,
            image: "https://i.pinimg.com/236x/83/38/c3/8338c322e5d537216cf6ba76b166b217.jpg",
            name: 'huy kun'
        },

    ])
    return (
        <div className="stories">
            {
                state.map((user, index) => {
                    return (
                        <div className="stories__info" key={index} >
                            <div className="stories__img">
                                <span>
                                    <img src={user.image} alt="user" />
                                </span>
                            </div>
                            <div className="stories__name">
                                {user.name}
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Stories
