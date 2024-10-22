import api from "../app/api";

/** API endpoints */
const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    me: builder.query({
      query: "users/me",
      providesTags: ["Me"],
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: "users/register",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Me"],
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "users/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Me"],
    }),
  }),
});
export const { useMeQuery, useLoginMutation, useRegisterMutation } = authApi;
