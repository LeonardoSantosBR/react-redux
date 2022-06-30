import WelcomeUser from "./components/welcome";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { Login, Logout } from "./redux/userSlice";

function App() {
  const [name, setName]= useState('')
  const user= useSelector(state=> state)
  const dispatch= useDispatch()



  function handleLogin(){
    dispatch(Login(name))
  }

  function handleLogout(){
    dispatch(Logout())
  }

  return (
    <>
      <WelcomeUser />
      <h2>Qual seu nome?</h2>
      <input type="text" onChange={e=> setName(e.target.value)}/>
      <br/>
      <button onClick={handleLogin}>LOGAR</button>
      <br/>
      <button onClick={handleLogout}>DESLOGAR</button>

      <h2>usuário</h2>
    </>
  );
}

export default App;
