import { useSelector } from "react-redux";

function User() {
    const {user}= useSelector(state=> state.user);
  return (
    <>
      <h1>Usuário: {user}</h1>
    </>
  );
}

export default User;
