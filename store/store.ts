import { configureStore } from "@reduxjs/toolkit";
import search_city from "./SearchCity";

export default configureStore({
	reducer: {
		search_city: search_city,
	},
});