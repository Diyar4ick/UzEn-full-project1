import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "./api";
// const getTextSlice = createSlice({
//     name: 'text',
//     initialState: {
//         data: null
//     },
//     reducers: {
//         getText: (state, action) => {
//             state.data = action.payload
//         }
//     }
// })

// export const getTextInfo = (lng, page) => async (dispatch) => {
//     try {
//         const data = await getData(lng, page)
//         dispatch(getText(data))
//     } catch (err) {
//         console.error(err);
//     }
// }

export const getTextInfo = createAsyncThunk(
  'text/getTextInfo',
  async ({ lng, page }, { rejectWithValue }) => {
    try {
      const data = await getData(lng, page);
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  } 
);

const getTextSlice = createSlice({ 
  name: 'text',
  initialState: {
    data: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {
    // Редуктор для очистки данных при уходе со страницы (опционально)
    clearData: (state) => {
      state.data = null;
      state.status = 'idle';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTextInfo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTextInfo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload.data;
      })
      .addCase(getTextInfo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});


export const { clearData } = getTextSlice.actions
export default getTextSlice.reducer