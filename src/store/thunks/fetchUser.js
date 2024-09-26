import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchUsers = createAsyncThunk('users/fetch', async (user) => {
  const response = await axios.post(`http://localhost:5000/users`,user)
  let users = await {data:response.data.data ,message: response.data.message};

  // let userData;
  // await users.map((x) => {
  //   if (x.email === user.email) {
  //     userData = x;
  //   }
  // });

  // DEV ONLY!!!
  await pause(1000);

  // return userData;
  return users;
});

// DEV ONLY!!!
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers };
