import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  selectedOptions: string[];
}

const initialState: UserState = {
  selectedOptions: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSelectedOptions: (state, action: PayloadAction<string[]>) => {
      state.selectedOptions = action.payload;
    },
  },
});

export const { setSelectedOptions } = userSlice.actions;
export default userSlice.reducer;
