import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { faker } from '@faker-js/faker';

const addUser = createAsyncThunk('users/add', async (user) => {
  const response = await axios.post('http://localhost:5000/signup', user);

  return await response.data;
});

export { addUser };
