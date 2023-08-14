import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchSignUp, fetchLogin, fetchAddContractor, fetchContractorById, fetchApprovedContractorById, fetchForgotPassword, fetchResetPassword } from "./admin/databaseSlice";
import { showToast } from "./errorSlice/errorSlice";

// SIGN_UP
export const asyncThunkSignUp = createAsyncThunk("post/asyncThunkSignUp", async (payload, { dispatch }) => {
    await axios.post(`${import.meta.env.VITE_BASE_URL + import.meta.env.VITE_SIGN_UP}`, payload)
        .then(res => {
            if (res.status !== 201) return
            dispatch(fetchSignUp({ ...res?.data?.data, isPageRedirect: true }))
            dispatch(showToast({ type: "success", message: "SignUp Successfully" }))
        }).catch(err => {
            console.error(err)
            dispatch(fetchSignUp([]))
            dispatch(showToast({ type: "error", message: err?.response?.data?.message ? err?.response?.data?.message : "Something Went Wrong !" }))
            console.error(err);
        })
})

// LOGIN
export const asyncThunkLogin = createAsyncThunk("post/asyncThunkLogin", async (payload, { dispatch }) => {
    const reqData = {
        email: payload.email,
        password: payload.password,
    };
    await axios.post(`${import.meta.env.VITE_BASE_URL + import.meta.env.VITE_LOGIN}`, reqData)
        .then(res => {
            if (res.status !== 201) return
            dispatch(fetchLogin(res?.data?.Token))
            payload.setAuthScreen(false);
            dispatch(showToast({ type: "success", message: "Login Successfully" }))
            payload.navigateAfterLogin();
        }).catch((error) => {
            dispatch(fetchLogin([]))
            payload.setAuthScreen(false);
            dispatch(showToast({ type: "error", message: error?.response?.data?.message }))
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
            }).catch((error) => {
                console.error(error)
                // dispatch(fetchAddContractor([]))
                dispatch(showToast({ type: "error", message: error?.response?.data?.error }))
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
export const asyncThunkApproveContractor = createAsyncThunk("patch/asyncThunkApproveContractor", async (payload, { dispatch }) => {
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

// DECLINE_CONTRACTOR
export const asyncThunkDeclineContractor = createAsyncThunk("patch/asyncThunkDeclineContractor", async (payload, { dispatch }) => {
    const { usertoken } = JSON.parse(localStorage.getItem('token'))
    const headers = { 'Authorization': `Bearer ${usertoken}` };
    usertoken ?
        await axios.patch(`${import.meta.env.VITE_BASE_URL + import.meta.env.VITE_DECLINE_CONTRACTOR}`, payload, { headers })
            .then(res => {
                if (res.status !== 201) return
                // dispatch(fetchApprovedContractorById({ ...res?.data, isAproved: true }))
                dispatch(showToast({ type: "success", message: "Successfully decline contractor" }))
            }).catch((error) => {
                console.error(error)
                // dispatch(fetchApprovedContractorById({ ...error, isAproved: false }))
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
                !res?.data?.data?.profileId &&
                    dispatch(showToast({ type: "warning", message: "Contractor Has Not Fill The Form." }))
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
        await axios(`${import.meta.env.VITE_BASE_URL + import.meta.env.VITE_SEARCH_CONTRACTOR + `?searchQuery=${payload?.searchQuery}&page=${payload?.page}&limit=${payload?.limit}`}`, { headers })
            .then(res => {
                if (res.status !== 200) return
                let modifiedRes = {
                    status: res?.data?.status,
                    data: [...res.data.data],
                    page: res.data.pageInfo.currentPage,
                    limit: res.data.pageInfo.limit,
                    totalContractors: res.data.pageInfo.totalResults,
                    totalPages: res.data.pageInfo.totalPages
                }
                dispatch(fetchAddContractor(modifiedRes))
                dispatch(showToast({ type: "success", message: "Contractor Searched Successfully" }))
            }).catch((error) => {
                console.error(error)
                dispatch(showToast({ type: "error", message: error?.response?.data?.message }))
            })
        :
        dispatch(showToast({ type: "error", message: "token expired ! please signin again" }))
})

// FORGOT_PASSWORD
export const asyncThunkForgotPassword = createAsyncThunk("post/asyncThunkForgotPassword", async (payload, { dispatch }) => {
    await axios.post(`${import.meta.env.VITE_BASE_URL + import.meta.env.VITE_FORGOT_PASSWORD}`, payload)
        .then(res => {
            if (res.status !== 200) return
            dispatch(fetchForgotPassword([{ ...res.data, isEmailSend: true }]))
            dispatch(showToast({ type: "success", message: res.data.Messgae }))
        }).catch((error) => {
            console.error(error)
            dispatch(fetchForgotPassword([{ isEmailSend: false }]))
            dispatch(showToast({ type: "error", message: error?.response?.data?.message }))
        })
})

// RESET_PASSWORD
export const asyncThunkResetPassword = createAsyncThunk("post/asyncThunkResetPassword", async (payload, { dispatch }) => {
    await axios.post(`${import.meta.env.VITE_BASE_URL + import.meta.env.VITE_RESET_PASSWORD + `/${payload?.Token}`}`, payload?.inputValue)
        .then(res => {
            if (res.status !== 200) return
            dispatch(fetchResetPassword([{ ...res.data, isPasswordChanged: true }]))
            dispatch(showToast({ type: "success", message: res.data.Messgae }))
        }).catch((error) => {
            console.error(error)
            dispatch(fetchResetPassword([{ isPasswordChanged: false }]))
            dispatch(showToast({ type: "error", message: error?.response?.data?.msg }))
        })
})

