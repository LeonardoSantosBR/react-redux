import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeUser } from "../Redux/userSlice";

function Login() {
  const [name, setName] = useState('');
  const dispatch= useDispatch()

  const handleLogin =()=>{
     dispatch(changeUser(name))
  }

  return (
    <>
      <h1>Login</h1>
      <input type="text" placeholder="Nome" onChange={(e)=> setName(e.target.value)}/>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}

export default Login;
