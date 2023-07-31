import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchSignUp, fetchLogin, fetchAddContractor, fetchContractorById, fetchApprovedContractorById } from "./admin/databaseSlice";
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
            console.error(err);
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
    const headers = { 'Authorization': `Bearer ${usertoken}` };
    usertoken ?
        await axios.post(`${import.meta.env.VITE_BASE_URL + import.meta.env.VITE_ADD_CONTRACTOR}`, payload, { headers })
            .then(res => {
                if (res.status !== 201) return
                // dispatch(fetchAddContractor([res?.data?.data]))
                dispatch(showToast({ type: "success", message: "Contractor Added Successfully" }))
            }).catch(() => {
                // dispatch(fetchAddContractor([]))
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
                if (res.status !== 200) return
                console.log("res", res)

                dispatch(fetchAddContractor(res?.data))
                // dispatch(showToast({ type: "success", message: "Contractor Added Successfully" }))
            }).catch((error) => {
                console.error(error);
                dispatch(fetchAddContractor([]))
                dispatch(showToast({ type: "error", message: error.response.data.message + ' !' }))
            })
        :
        dispatch(showToast({ type: "error", message: "token expired ! please signin again" }))
})

// APPROVE_CONTRACTOR
export const asyncThunkApproveContractor = createAsyncThunk("get/asyncThunkApproveContractor", async (payload, { dispatch }) => {
    const { usertoken } = JSON.parse(localStorage.getItem('token'))
    const headers = { 'Authorization': `Bearer ${usertoken}` };
    usertoken ?
        await axios.patch(`${import.meta.env.VITE_BASE_URL + import.meta.env.VITE_APPROVE_CONTRACTOR}`, payload, { headers })
            .then(res => {
                if (res.status !== 201) return
                dispatch(fetchApprovedContractorById({ ...res?.data, isAproved: true }))
                dispatch(showToast({ type: "success", message: "Successfully approved contractor" }))
            }).catch((error) => {
                dispatch(fetchApprovedContractorById({ ...error, isAproved: false }))
                dispatch(showToast({ type: "error", message: "Something Went Wrong !" }))
            })
        :
        dispatch(showToast({ type: "error", message: "token expired ! please signin again" }))
})

// GET_DETAILS_OF_CONTRACTOR
export const asyncThunkGetDitailsOfContractor = createAsyncThunk("get/asyncThunkGetDitailsOfContractor", async (payload, { dispatch }) => {
    const { usertoken } = JSON.parse(localStorage.getItem('token'))
    const headers = { 'Authorization': `Bearer ${usertoken}` };
    usertoken ?
        await axios(`${import.meta.env.VITE_BASE_URL + import.meta.env.VITE_GET_DETAILS_OF_CONTRACTOR + '?contractorId=' + payload?.contractorId}`, { headers })
            .then(res => {
                if (res.status !== 200) return
                dispatch(fetchContractorById(res?.data?.data))
                // dispatch(showToast({ type: "success", message: "Contractor Added Successfully" }))
            }).catch(() => {
                dispatch(fetchContractorById([]))
                dispatch(showToast({ type: "error", message: "Something Went Wrong !" }))
            })
        :
        dispatch(showToast({ type: "error", message: "token expired ! please signin again" }))
})

// SEARCH_CONTRACTOR
export const asyncThunkSearchContractors = createAsyncThunk("get/asyncThunkSearchContractors", async (payload, { dispatch }) => {
    const { usertoken } = JSON.parse(localStorage.getItem('token'))
    const headers = { 'Authorization': `Bearer ${usertoken}` };
    usertoken ?
        await axios(`${import.meta.env.VITE_BASE_URL + import.meta.env.VITE_SEARCH_CONTRACTOR + '?searchQuery=' + payload}`, { headers })
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

