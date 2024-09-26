import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// DEV ONLY!!!
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const transactionApi = createApi({
  reducerPath: 'transactions',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
    fetchFn: async (...args) => {
      // REMOVE FOR PRODUCTION
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      // Remove Transaction
      removeTransaction: builder.mutation({
        invalidatesTags: (result, error, transaction) => {
          return [{ type: 'Transaction', _id: transaction._id }];
        },
        query: (transaction) => {
          return {
            url: `/transactions/${transaction._id}`,
            method: 'DELETE',
          };
        },
      }),

      // Add transaction
      addTransaction: builder.mutation({
        invalidatesTags: (result, error, tData) => {
          return [{ type: 'Transaction', id: tData.id }];
        },
        query: (tData) => {
          return {
            url: `/transactions/${tData.id}`,
            method: 'POST',
            body: {
              id: tData.id,
              transactionType: tData.transactionType,
              transactionAmount: tData.transactionAmount,
              transactionDesc: tData.transactionDesc,
              transactionDate: tData.transactionDate
            },
          };
        },
      }),

      // fetchTransactions: builder.query({
      //   providesTags: (result, error, user) => {
      //     console.log("res",result,"user",user);//geting data
      //     const tags = result.map((transaction) => {
      //       // console.log("tags tr id:",transaction._id);
      //       return { type: 'Transaction', ...transaction };
      //     });
      //     tags.push({ type: 'UsersTransaction', ...user });
      //     console.log("tags",tags);
      //     return tags;
      //   },
      //   query: (data) => {
      //     console.log("querydataid:", data.id);
      //     return {
      //       url: `/transactions/${data.id}`,
      //       method: 'GET',
      //     };
      //   },
      // }),



      // fetch Transactions
      fetchTransactions: builder.query({
        // The `providesTags` function specifies cache tags associated with the query result.
        providesTags: (result, error, user) => {
          // Log the `result` (array of transactions) and `user` object.
          // console.log("result", result);
          // console.log("user", user);

          // Create an array to store the cache tags.
          const tags = [];

          // Map over the `result` array to transform each transaction object.
          result.forEach((transaction) => {
            // Create a new object with a `type` property and spread the transaction properties.
            const transactionWithTag = { type: 'Transaction', ...transaction };
            // Push the transformed transaction object to the `tags` array.
            tags.push(transactionWithTag);
          });

          // Transform the `user` object by adding a `type` property.
          const userWithTag = { type: 'UserTransaction', ...user };
          // Push the transformed user object to the `tags` array.
          tags.push(userWithTag);


          // Return the cache tags.
          return tags;
        },

        // The `query` function defines the HTTP request configuration for fetching transactions.
        query: (data) => {
          // Log the `id` property from the `data` object.
          // console.log("query data id:", data.id);

          // Return the HTTP request configuration.
          return {
            url: `/transactions/${data.id}`,
            method: 'GET',
          };
        },
      }),

    };
  },
});

export const {
  useFetchTransactionsQuery,
  useAddTransactionMutation,
  useRemoveTransactionMutation

} = transactionApi;
export { transactionApi };
