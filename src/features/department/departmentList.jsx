import { useGetDepartmentsQuery } from "./departmentSlice";

export default function DepartmentList({ setSelectedDepartmentId }) {
  const { data: departments = [], isLoading } = useGetDepartmentsQuery();

  return (
    <article>
      <h1>Professors</h1>
      <ul className="departments">
        {isLoading && <li>Loading departments...</li>}
        {departments.map((d) => (
          <li key={d.id}>
            <h2>{d.name}</h2>
            <figure>
              <h3>{d.description}</h3>
              <h2>{d.email}</h2>
              <h2>{d.phone}</h2>
              <img src={d.imageUrl} alt={d.name} />
            </figure>
            <button onClick={() => setSelectedDepartmentId(d.id)}>
              See Details
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
}
