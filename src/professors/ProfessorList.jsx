import { Link } from "react-router-dom";

import { useGetProfessorsQuery } from "./professorSlice";

import AddProfessorForm from "./AddProfessor";

import "./professors.css";

export default function ProfessorList() {
  const { data: professors = [] } = useGetProfessorsQuery();

  return (
    <>
      <h1>Professors</h1>
      <div className="ProfessorGroup">
        <div className="ListofProfessors">
          <ul>
            {professors.map((p) => (
              <li key={p.id}>
                <h2>{p.name}</h2>
                <h3>{p.email}</h3>
                <p>{p.bio}</p>
                <Link to={`/professors/${p.id}`}>See details</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="AddProfessor">
          <AddProfessorForm />
        </div>
      </div>
    </>
  );
}
