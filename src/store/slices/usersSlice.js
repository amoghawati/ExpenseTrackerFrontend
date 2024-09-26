import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/fetchUser';
import { logout } from '../thunks/logout';
import { addUser } from '../thunks/addUser';
// import { addUser } from '../thunks/addUser';
// import { removeUser } from '../thunks/removeUser';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isLoading: false,
    data: {},
    message:"",
    error: null,
  },
  extraReducers(builder) {
    //fetch users
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.message = action.payload.message;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    //logout
    builder.addCase(logout.fulfilled, (state,action) => {
        state.isLoading = false;
        state.data=action.payload.data;
        state.message=action.payload.message;
        state.error=action.payload.error;
    });
    //add user
    builder.addCase(addUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data=action.payload.data;
      state.message = action.payload.message;
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // builder.addCase(removeUser.pending, (state, action) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(removeUser.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.data = state.data.filter((user) => {
    //     return user.id !== action.payload.id;
    //   });
    // });
    // builder.addCase(removeUser.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.error;
    // });
  },
});

export const usersReducer = usersSlice.reducer;
