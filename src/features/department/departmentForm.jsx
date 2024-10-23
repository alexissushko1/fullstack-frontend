import { useState } from "react";
import { useAddDepartmentMutation } from "./departmentSlice";

export default function DepartmentForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("https://loremflickr.com/200/300/dog");
  const [departmentEmail, setDepartmentEmail] = useState("");
  const [departmentPhone, setDepartmentPhone] = useState("");
  //const [professorIds, setProfessorIds] = useState("");

  const [addDepartment, { isLoading: isAdding, error: addingError }] =
    useAddDepartmentMutation();

  const postDepartment = async (event) => {
    event.preventDefault();
    const departmentData = {
      name,
      description,
      image,
      departmentEmail,
      departmentPhone,
      professorIds: [1],
    };

    console.log("Posting department data:", departmentData);
    try {
      const response = await addDepartment(departmentData).unwrap();
      console.log("Department added:", response);
    } catch (e) {
      console.error("Failed to add department:", e);
    }
  };
  /*
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
  */

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

        <button type="submit">Add Department</button>
        {isAdding && <output>Uploading department information...</output>}
        {addingError && <output>{addingError.message}</output>}
      </form>
    </>
  );
}
