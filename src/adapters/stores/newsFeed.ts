import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Post from 'src/domain/entities/post'

type IStore = {
    [postId: string]: Post
}

const profileStore = createSlice({
    name: 'newsFeed',
    initialState: {} as IStore,
    reducers: {
        fetchListPost: (state, action: PayloadAction<Array<Post>>) => {
            if (!Array.isArray(action.payload)) return state

            const newState = {}

            action.payload.forEach(item => {
                const post = new Post(item)
                newState[post._id] = post
            })

            return newState
        },
        updateListPost: (state, action: PayloadAction<Array<Post>>) => {
            if (!Array.isArray(action.payload)) return state

            const newState = { ...state }

            action.payload.forEach(item => {
                const post = new Post(item)
                newState[post._id] = {
                    ...newState[post._id],
                    ...post
                }
            })

            return newState
        },
        deleteListPost: (state, action: PayloadAction<Array<Post>>) => {
            if (!Array.isArray(action.payload)) return state

            const newState = { ...state }

            action.payload.forEach(item => {
                const post = new Post(item)
                delete newState[post._id]
            })

            return newState
        },
        fetchListComment: (state, action: PayloadAction<Post>) => {
            if (!Array.isArray(action.payload)) return state

            const newState = { ...state }
            const newPost = new Post(action.payload)

            newState[newPost._id].listComment = newPost.listComment

            return newState
        },
        updateListComment:  
    },
})

export default profileStore