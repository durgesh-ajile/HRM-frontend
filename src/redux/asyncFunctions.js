import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { decrement, increment } from "./counter/counterSlice";


export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (payload, { dispatch }) => {
    await axios(`${'https://jsonplaceholder.typicode.com/posts'}`)
        .then(res => {
            console.log('[RESPONSE CHECK]', res)
            dispatch(increment(res.data.data))
        }).catch(err => {
            console.log(err);
            dispatch(decrement())
        })
})