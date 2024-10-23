import api from "../../app/api";

/*
Define endpoints:
1. get departments
2. get department
3. add a department
4. update a department
5. delete a department
*/

const departmentApi = api.injectEndpoints({
  endpoints: (build) => ({
    getDepartments: build.query({
      query: () => "departments",
      providesTags: ["Department"],
      transformResponse: (response) => response,
      transformErrorResponse: (response) => response.data.error,
    }),
    getDepartment: build.query({
      query: (id) => "departments/" + id,
      providesTags: ["Department"],
      transformResponse: (response) => response,
      transformErrorResponse: (response) => response.data.error,
    }),
    addDepartment: build.mutation({
      query: ({
        name,
        description,
        image,
        departmentEmail,
        departmentPhone,
        professorIds,
      }) => ({
        url: "departments",
        method: "POST",
        body: {
          name,
          description,
          image,
          departmentEmail,
          departmentPhone,
          professorIds,
        },
      }),
      invalidatesTags: [{ type: "Department", id: "LIST" }],
      transformResponse: (response) => response.newDepartment,
      transformErrorResponse: (response) => response.data.error,
    }),
    updateDepartment: build.mutation({
      query: ({ id, department }) => ({
        url: "departments/" + id,
        method: "PUT",
        body: department,
      }),
      invalidatesTags: ["Department"],
      transformResponse: (response) => response.updatedDepartment,
      transformErrorResponse: (response) => response.data.error,
    }),
    deleteDepartment: build.mutation({
      query: (id) => ({
        url: "departments/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["Department"],
      transformErrorResponse: (response) => response.data.error,
    }),
  }),
});

export const {
  useGetDepartmentsQuery,
  useGetDepartmentQuery,
  useAddDepartmentMutation,
  useUpdateDepartmentMutation,
  useDeleteDepartmentMutation,
} = departmentApi;
