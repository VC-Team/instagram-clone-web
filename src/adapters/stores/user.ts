import { createSlice } from '@reduxjs/toolkit'
import User from 'src/domain/entities/user'

const profileStore = createSlice({
    name: 'user',
    initialState: new User({}),
    reducers: {
        fetch: (state, action) => {
            return new User(action.payload)
        },
    },
})

export default profileStore