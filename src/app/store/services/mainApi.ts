import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define your API endpoints
const api = createApi({
	reducerPath: 'mainApi',
	baseQuery: fetchBaseQuery({ baseUrl: '' }),
	endpoints: builder => ({
		// Define your endpoint
	}),
});

// Export hooks for usage in components
export const {} = api;
