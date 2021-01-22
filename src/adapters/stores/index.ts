import { configureStore } from "@reduxjs/toolkit"
import profileStore from "./user"

const store = configureStore({
    reducer: profileStore.reducer,
});

export default store