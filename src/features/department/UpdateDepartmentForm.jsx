import { useState } from "react";
import { useUpdateDepartmentMutation } from "./departmentSlice";

export default function UpdateDepartmentForm({ department }) {
  const [name, setName] = useState(department.name);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("https://loremflickr.com/200/300/dog");
  const [updateDepartment, { isLoading: isUpdating, error: updatingError }] =
    useUpdateDepartmentMutation();

  const putDepartment = async (event) => {
    event.preventDefault();
    const updatedDepartmentData = {
      name,
      description,
      image,
    };

    console.log("Updating department:", updatedDepartmentData);

    try {
      const response = await updateDepartment({
        id: department.id,
        department: updatedDepartmentData,
      }).unwrap();
      console.log("department updated:", response);
    } catch (e) {
      console.error("Failed to update department", e);
    }
  };

  return (
    <>
      <h2>Update a Department</h2>
      <form onSubmit={putDepartment}>
        <label>
          Name
          <input
            name="departmentName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Description
          <input
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Image
          <input
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          Department Id
          <input name="departmentId" onChange={(e) => setId(e.target.value)} />
        </label>
        <button type="submit">Update Department</button>
        {isUpdating && <output>Uploading department information...</output>}
        {updatingError && <output>{updatingError.message}</output>}
      </form>
    </>
  );
}
