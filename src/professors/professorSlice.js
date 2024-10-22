import api from "../app/api";

const professorApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProfessors: build.query({
      query: () => "/professors",
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data.error,
      providesTags: ["Professor"],
    }),
    getProfessor: build.query({
      query: (id) => "/professors/" + id,
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data.error,
      providesTags: ["Professor"],
    }),
    addProfessor: build.mutation({
      query: (professor) => ({
        url: "/professors",
        method: "POST",
        body: professor,
      }),
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data.error,
      invalidatesTags: ["Professor"],
    }),
    updateProfessor: build.mutation({
      query: (id) => ({
        url: "/professors" + id,
        method: "PUT",
        body: professor,
      }),
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data.error,
      invalidatesTags: ["Professor"],
    }),
    deleteProfessor: build.mutation({
      query: (id) => ({
        url: "/professors/" + id,
        method: "DELETE",
      }),
      transformErrorResponse: (response) => response.data.error,
      invalidatesTags: ["Professor"],
    }),
  }),
});

export const {
  useGetProfessorsQuery,
  useGetProfessorQuery,
  useAddProfessorMutation,
  useDeleteProfessorMutation,
} = professorApi;
