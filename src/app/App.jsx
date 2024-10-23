import { useState } from "react";
import { useSelector } from "react-redux";
import AuthForm from "../features/auth/AuthForm";

  return token ? <h1>Home</h1> : <AuthForm />;
export default function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <h1>Full Stack University</h1>
      <p>Welcome to FullStack University</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum alias
        dolorum, perferendis officia quae blanditiis omnis esse maiores delectus
        doloribus natus ad. Expedita nemo dolorum debitis nobis et voluptatibus
        sint.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui explicabo,
        sed non temporibus, molestias accusantium quisquam laboriosam illo minus
        ipsa accusamus, dolore dolores blanditiis ea quo placeat commodi nobis
        voluptas?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        alias quod incidunt quos quam nulla assumenda. Natus, quasi deserunt.
        Voluptatibus, totam? Beatae quo quas consectetur eum repudiandae ad
        delectus illum.
      </p>
    </>
  );
}

