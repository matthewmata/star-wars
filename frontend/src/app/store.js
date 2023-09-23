import { configureStore } from "@reduxjs/toolkit";

import { starWarsApi } from "../features/api/starWarsApiSlice";
import selectReducer from "../features/select/selectSlice";
export const store = configureStore({
  reducer: {
    [starWarsApi.reducerPath]: starWarsApi.reducer,
    select: selectReducer,
  },
  // Add the RTK Query API middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(starWarsApi.middleware),
});
