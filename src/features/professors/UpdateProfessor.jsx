import { useNavigate } from "react-router-dom";
import { useUpdateProfessorMutation } from "./professorSlice";
import { useState } from "react";

export default function UpdateProfessorForm() {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    profileImage: "",
    email: "",
    phone: "",
    departmentId: 0,
  });

  const navigate = useNavigate();

  // useUpdateProfessorMutation();
  async function changeProfessor(event) {
    event.preventDefault();
    if (isLoading) {
      return "Loading...";
    }
    try {
      const professor = await useUpdateProfessorMutation(formData);
      console.log(professor);
      navigate(`/professors/${formData.id}`);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <form onSubmit={changeProfessor}>
      <h2>Update a Professor</h2>
      <label>
        Name
        <input
          type="text"
          name="name"
          // value={formData.name}
          onChange={(e) => setFormData({ name: e.target.value })}
        />
      </label>
      <label>
        Bio
        <input
          type="text"
          name="bio"
          value={formData.bio}
          onChange={(e) => setFormData({ bio: e.target.value })}
        />
      </label>
      <label>
        ProfileImage
        <input
          type="text"
          name="profileImage"
          value={formData.profileImage}
          onChange={(e) => setFormData({ profileImage: e.target.value })}
        />
      </label>
      <label>
        Email
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ email: e.target.value })}
        />
      </label>
      <label>
        Phone
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ phone: e.target.value })}
        />
      </label>
      <label>
        DepartmentId
        <input
          type="int"
          name="departmentId"
          value={formData.departmentId}
          onChange={(e) => setFormData({ departmentId: e.target.value })}
        />
      </label>
      <button>Update Professor</button>
    </form>
  );
}
