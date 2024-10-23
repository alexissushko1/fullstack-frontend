import { useGetDepartmentsQuery } from "./departmentSlice";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DepartmentList(/*{ setSelectedDepartmentId }*/) {
  const { data: departments = [], isLoading } = useGetDepartmentsQuery();
  const navigate = useNavigate();
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(null);

  const handleSeeDetails = (id) => {
    setSelectedDepartmentId(id);
    navigate(`/departments/${id}`);
  };
  return (
    <article>
      <h1>Departments</h1>
      <ul className="departments">
        {isLoading && <li>Loading departments...</li>}
        {departments.map((department) => (
          <li key={department.id}>
            <h2>{department.name}</h2>
            <figure>
              <h3>{department.description}</h3>
              <h2>{department.email}</h2>
              <h2>{department.phone}</h2>
              <img src={department.imageUrl} alt={department.name} />
            </figure>
            <button onClick={() => handleSeeDetails(department.id)}>
              See Details
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
}
