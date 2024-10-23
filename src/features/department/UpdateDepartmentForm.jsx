import { useState } from "react";
import { useUpdateDepartmentMutation } from "./departmentSlice";

export default function UpdateDepartmentForm({}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("https://loremflickr.com/200/300/dog");

  const [updateDepartment, { isLoading: isUpdating, error: updatingError }] =
    useUpdateDepartmentMutation();

  const putDepartment = async (event) => {
    event.preventDefault();
    const updatedDepartmentData = {
      id: departmentEmail.id,
      name,
      description,
      image,
    };
    console.log("Updating department:", updatedDepartmentData);
    try {
      const response = await updateDepartment(updatedData).unwrap();
      console.log("Department updated:", response);
    } catch (e) {
      console.error("Failed to update department", e);
    }
  };

  return (
    <>
      <h2>Add a Department</h2>
      <form onSubmit={postDepartment}>
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
          Department Email
          <input
            name="departmentEmail"
            value={departmentEmail}
            onChange={(e) => setDepartmentEmail(e.target.value)}
          />
        </label>
        <label>
          Department Phone
          <input
            name="departmentPhone"
            value={departmentPhone}
            onChange={(e) => setDepartmentPhone(e.target.value)}
          />
        </label>

        <button type="submit">Update Department</button>
        {isUpdating && <output>Uploading department information...</output>}
        {updatingError && <output>{updatingError.message}</output>}
      </form>
    </>
  );
}
