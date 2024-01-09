import { Navigate } from "react-router-dom";
import { getBearerToken } from "../lib/globals";

function Login() {

  if (getBearerToken()) {
    return <Navigate to="/blog" />;
  }

    return (
      <>
        <h1>Login</h1>
      </>
    )
  }
  
  export default Login
  