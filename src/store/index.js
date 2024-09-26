import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersReducer } from './slices/usersSlice';
import { transactionApi } from './apis/transactionApi';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [transactionApi.reducerPath]: transactionApi.reducer,

  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(transactionApi.middleware)
  },
});

setupListeners(store.dispatch);

export * from './thunks/fetchUser';
export * from './thunks/addUser';
export * from './thunks/logout';


export {
  useFetchTransactionsQuery,
  useAddTransactionMutation,
  useRemoveTransactionMutation
} from './apis/transactionApi';

