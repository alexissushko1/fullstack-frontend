import { useSelector } from "react-redux";
import {
  useDeleteDepartmentMutation,
  useGetDepartmentQuery,
} from "./departmentSlice";
import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";

export default function DepartmentDetails(/*{
  selectedDepartmentId,
  setSelectedDepartmentId,
}*/) {
  const { id: selectedDepartmentId } = useParams();
  const { data: department, isLoading } =
    useGetDepartmentQuery(selectedDepartmentId);

  const [deleteDepartment] = useDeleteDepartmentMutation();
  const token = useSelector((state) => state.auth.token);
  const [deleted, setDeleted] = useState(false);

  const removeDepartment = async (id) => {
    if (!token) {
      console.error("No token found");
      return;
    }
    if (!department) {
      console.log("No department found");
      return;
    }
    //setSelectedDepartmentId();
    try {
      await deleteDepartment(id).unwrap();
      setDeleted(true);
    } catch (e) {
      console.error("Failed to delete department:", e);
    }
  };

  if (deleted) {
    return <Navigate to="/departments" />;
  }

  let $details;

  if (!selectedDepartmentId) {
    $details = <p>Select a department to see more details.</p>;
  } else if (isLoading) {
    $details = <p>Loading department information...</p>;
  } else {
    $details = (
      <>
        <h3>
          {department.name} #{department.id}
        </h3>
        <p>{department.description}</p>
        <h3>{department.image}</h3>
        <h4>{department.email}</h4>
        <h4>{department.phone}</h4>
        <button onClick={() => removeDepartment(department.id)}>
          Remove Department
        </button>
      </>
    );
  }

  return (
    <main>
      <h2>Department Details</h2>
      {$details}
    </main>
  );
}
