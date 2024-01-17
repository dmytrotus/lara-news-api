import { configureStore } from '@reduxjs/toolkit'
import accessTokenReducer from './reducers/accessTokenReducer'

const store = configureStore({
  reducer: {
    accessToken: accessTokenReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;