import { createSlice } from "@reduxjs/toolkit";

export const errorReducer = createSlice({
  name: "error",
  initialState: {
    errorType: "",
    message: "",
    errorShow: false,
    loading:false
  },
  reducers: {
    showToast: (state, action) => {
      switch (action.payload.type) {
        case "error":
          state.errorType = "error";
          state.errorShow = true;
          state.message = action.payload.message;
          break;

        case "success":
          state.errorType = "success";
          state.errorShow = true;
          state.message = action.payload.message;
          break;

        case "warning": {
          state.errorType = "warning";
          state.errorShow = true;
          state.message = action.payload.message;
          break;
        }
        default: {
          state.errorType = "";
          state.errorShow = false;
          state.message = "";
          break;
        }
      }
    },
    hideToast: (state, action) => {
        state.errorType = "";
        state.errorShow = false;
        state.message = "";
    },
    setLoading: (state, { payload })=>{
      state.loading = payload.value
    }
  },
});

export const { showToast, hideToast } = errorReducer.actions;

export default errorReducer.reducer;
