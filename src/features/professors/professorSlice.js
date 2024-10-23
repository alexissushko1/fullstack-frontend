import api from "../app/api";

const professorApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProfessors: build.query({
      query: () => "/professors",
      transformResponse: (response) => response,
      transformErrorResponse: (response) => response.error,
      providesTags: ["Professor"],
    }),
    getProfessor: build.query({
      query: (id) => "/professors/" + id,
      transformResponse: (response) => response,
      transformErrorResponse: (response) => response.error,
      providesTags: ["Professor"],
    }),
    addProfessor: build.mutation({
      query: (professor) => ({
        url: "/professors",
        method: "POST",
        body: professor,
      }),
      transformResponse: (response) => response,
      transformErrorResponse: (response) => response.error,
      invalidatesTags: ["Professor"],
    }),
    updateProfessor: build.mutation({
      query: (id) => ({
        url: "/professors" + id,
        method: "PUT",
        body: professor,
      }),
      transformResponse: (response) => response,
      transformErrorResponse: (response) => response.error,
      invalidatesTags: ["Professor"],
    }),
    deleteProfessor: build.mutation({
      query: (id) => ({
        url: "/professors/" + id,
        method: "DELETE",
      }),
      transformErrorResponse: (response) => response.error,
      invalidatesTags: ["Professor"],
    }),
  }),
});

export const {
  useGetProfessorsQuery,
  useGetProfessorQuery,
  useAddProfessorMutation,
  useUpdateProfessorMutation,
  useDeleteProfessorMutation,
} = professorApi;
