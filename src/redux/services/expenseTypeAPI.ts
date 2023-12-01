import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { type ExpenseType } from '../../utils';

// Define a service using a base URL and expected endpoints
export const expenseTypeAPI = createApi({
  reducerPath: 'expenseTypeAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.68.115:3001/' }),
  endpoints: (builder) => ({
    getExpenseTypes: builder.query<ExpenseType[], void>({
      query: () => 'expense-type',
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetExpenseTypesQuery } = expenseTypeAPI;
