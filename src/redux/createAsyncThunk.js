import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchSignUp, fetchLogin, fetchAddContractor } from "./admin/databaseSlice";
import { showToast } from "./errorSlice/errorSlice";

// SIGN_UP
export const asyncThunkSignUp = createAsyncThunk("post/asyncThunkSignUp", async (payload, { dispatch }) => {
    await axios.post(`${import.meta.env.VITE_BASE_URL + import.meta.env.VITE_SIGN_UP}`, payload)
        .then(res => {
            if (res.status !== 201) return
            dispatch(fetchSignUp({ ...res?.data?.data, isPageRedirect: true }))
            dispatch(showToast({ type: "success", message: "SignUp Successfully" }))
        }).catch(err => {
            dispatch(fetchSignUp([]))
            dispatch(showToast({ type: "error", message: "Something Went Wrong !" }))
            console.log(err);
        })
})

// LOGIN
export const asyncThunkLogin = createAsyncThunk("post/asyncThunkLogin", async (payload, { dispatch }) => {
    await axios.post(`${import.meta.env.VITE_BASE_URL + import.meta.env.VITE_LOGIN}`, payload)
        .then(res => {
            if (res.status !== 201) return
            dispatch(fetchLogin(res?.data?.Token))
            dispatch(showToast({ type: "success", message: "Login Successfully" }))
        }).catch(() => {
            dispatch(fetchLogin([]))
            dispatch(showToast({ type: "error", message: "Something Went Wrong !" }))
        })
})

// ADD_CONTRACTOR
export const asyncThunkAddContractor = createAsyncThunk("post/asyncThunkAddContractor", async (payload, { dispatch }) => {
    const { usertoken } = JSON.parse(localStorage.getItem('token'))
    // console.log(usertoken)
    const headers = { 'Authorization': `Bearer ${usertoken}` };
    usertoken ?
        await axios.post(`${import.meta.env.VITE_BASE_URL + import.meta.env.VITE_ADD_CONTRACTOR}`, payload, { headers })
            .then(res => {
                console.log("res", res)
                if (res.status !== 201) return
                dispatch(fetchAddContractor(res?.data?.data))
                dispatch(showToast({ type: "success", message: "Contractor Added Successfully" }))
            }).catch(() => {
                dispatch(fetchAddContractor([]))
                dispatch(showToast({ type: "error", message: "Something Went Wrong !" }))
            })
        :
        dispatch(showToast({ type: "error", message: "token expired ! please signin again" }))
})

// GET_CONTRACTOR
export const asyncThunkGetContractor = createAsyncThunk("post/asyncThunkGetContractor", async (payload, { dispatch }) => {
    const { usertoken } = JSON.parse(localStorage.getItem('token'))
    const headers = { 'Authorization': `Bearer ${usertoken}` };
    usertoken ?
        await axios(`${import.meta.env.VITE_BASE_URL + import.meta.env.VITE_GET_CONTRACTOR + '?page=' + payload}`, { headers })
            .then(res => {
                console.log("res", res)
                if (res.status !== 200) return
                dispatch(fetchAddContractor(res?.data))
                // dispatch(showToast({ type: "success", message: "Contractor Added Successfully" }))
            }).catch(() => {
                dispatch(fetchAddContractor([]))
                dispatch(showToast({ type: "error", message: "Something Went Wrong !" }))
            })
        :
        dispatch(showToast({ type: "error", message: "token expired ! please signin again" }))
})
