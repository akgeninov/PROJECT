import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../feature/user/userSlice";

export const store = configureStore({
  reducer: {
    userSlice,
  },
});
