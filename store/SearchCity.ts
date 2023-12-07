import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: ""
};

const city_object = createSlice({
    name: "search_city",
    initialState: initialState,
    reducers: {
        updateCity: (state, action) => {
            state.name = action.payload;
        },
    },
});

export const {updateCity} = city_object.actions;

export default city_object.reducer;