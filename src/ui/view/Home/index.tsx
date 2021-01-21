import Create from "@view/create"
import Posts from "@view/posts"
import SlideBar from "@view/slideBar"
import Stories from "@view/stories"
import React from "react"

const Home = props => {
    return (
        <>
            <Stories />
            <Create />
            <Posts />
            <SlideBar />
        </>

    )
}

export default Home