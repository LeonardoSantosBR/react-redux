import { useDispatch } from "react-redux";
import { logout } from "../Redux/userSlice";

function Logout() {
    const dispatch= useDispatch()

    const handleLogout= ()=>{
        dispatch(logout())
    }

  return (
    <>
      <button onClick={handleLogout}>Deslogar</button>
    </>
  );
}

export default Logout;
