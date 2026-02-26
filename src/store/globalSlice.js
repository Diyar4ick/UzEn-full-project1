import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const API_URL = import.meta.env.VITE_API_URL

export const fetchHeader = createAsyncThunk('global/fetchHeader', async (lng) => {
    const response = await axios.get(`${API_URL}/api/header?locale=${lng}&populate[blocks][populate]=*`)
    console.log(response);
    return response.data.data
})

export const fetchFooter = createAsyncThunk('global/fetchFooter', async (lng) => {
    const response = await axios.get(`${API_URL}/api/footer?locale=${lng}&populate[blocks][populate]=*`)
    console.log(response);
    return response.data.data
})
export const fetchDetail = createAsyncThunk('global/fetchDetail', async (lng) => {
    const response = await axios.get(`${API_URL}/api/detail?locale=${lng}&populate[blocks][populate]=*`)
    console.log(response);
    return response.data.data
})

const globalSlice = createSlice({
    name: 'global',
    initialState: {
        header: null,
        footer: null, 
        detail: null,  
        status: 'idle'
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchHeader.fulfilled, (state, action) => {
            state.header = action.payload
        })
        .addCase(fetchFooter.fulfilled, (state, action) => {
            state.footer = action.payload
        })
        .addCase(fetchDetail.fulfilled, (state, action) => {
            state.detail = action.payload
        })
    }
})

export default globalSlice.reducer