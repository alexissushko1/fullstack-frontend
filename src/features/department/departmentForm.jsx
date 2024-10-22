import { useState } from "react";
import {
  useAddDepartmentMutation,
  useUpdateDepartmentMutation,
} from "./departmentSlice";

export default function DepartmentForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [departmentEmail, setDepartmentEmail] = useState("");
  const [departmentPhone, setDepartmentPhone] = useState("");

  const [addDepartment, { isLoading, error }] = useUpdateDepartmentMutation();

  function postDepartment(event) {
    event.preventDefault();

    const imageUrl = "https://loremflickr.com/200/300/dog";
    addDepartment({
      name,
      description,
      image,
      departmentEmail,
      departmentPhone,
    });
  }

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
        {isLoading && <output>Uploading department information...</output>}
        {error && <output>{error.message}</output>}
      </form>
    </>
  );
}
