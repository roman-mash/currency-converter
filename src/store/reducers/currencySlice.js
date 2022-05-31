import { createSlice } from '@reduxjs/toolkit';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    base: 'rub',
    list: {},
  },
  reducers: {
    changeBase(state, action) {
      state.base = action.payload;
    },
    uploadList(state, action) {
      state.list = action.payload;
    },
  },
});

export default currencySlice.reducer;
export const { changeBase, uploadList } = currencySlice.actions;
