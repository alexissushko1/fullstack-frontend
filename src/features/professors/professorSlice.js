import api from "../../app/api";

const professorApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProfessors: build.query({
      query: () => "/professors",
      transformResponse: (response) => response,
      transformErrorResponse: (response) => response.error,
      providesTags: ["Professor"],
    }),
    getProfessor: build.query({
      query: (id) => (id ? `/professors/${id}` : null),
      transformResponse: (response) => response,
      transformErrorResponse: (response) => response.error,
      providesTags: [
        "Professor",
        (result, error, id) => [{ type: "Professor", id }],
      ],
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
      query: ({ professorId, professor }) => ({
        url: professorId ? `/professors/${professorId}/change` : null,
        method: "PUT",
        body: professor,
      }),
      transformResponse: (response) => response,
      transformErrorResponse: (response) => response.error,
      invalidatesTags: [
        "Professor",
        (result, error, { id }) => [{ type: "Professor", id }],
      ],
    }),
    deleteProfessor: build.mutation({
      query: (id) => ({
        url: id ? `/professors/${id}` : null,
        method: "DELETE",
      }),
      transformErrorResponse: (response) => response.error,
      invalidatesTags: [
        "Professor",
        (result, error, id) => [{ type: "Professor", id }],
      ],
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

export default professorApi;
