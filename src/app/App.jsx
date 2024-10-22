import { useState } from "react";
import { useSelector } from "react-redux";
import AuthForm from "../features/auth/AuthForm";

function App() {
  //const [token, setToken] = useState(null);
  const token = useSelector((state) => state.auth.token);

  return token ? <h1>Home</h1> : <AuthForm />;
}
