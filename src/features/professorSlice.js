import api from "../store/api";

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
  }),
});

export const { useGetProfessorsQuery, useGetProfessorQuery } = professorApi;
