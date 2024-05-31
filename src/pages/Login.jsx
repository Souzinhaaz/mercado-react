import { useState } from "react";
import { getItem, setItem } from "../services/LocalStorageFuncs";

export const Login = (props) => {
  const user = getItem('usuario');

  const [name, setName] = useState( user.name ||"");
  const [pass, setPass] = useState( user.pass || "");

  const cond = (name.length > 3 && pass.length > 5)

  const saveUser = (name, pass) => {
    // Isso é a mesma coisa que isso const push = props.history.push;
    const { history: { push } } = props;

    if (name === user.name && pass === user.pass) {
      push('/store');
      return;
    }
    
    setItem('usuario', {name, pass});
    push('/store');
  }

  return (
    <div>
      <p>Name</p>
      <input
        type="text"
        name="name"
        id="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <p>Password</p>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPass(e.target.value)}
        value={pass}
      />

      <br />
      <br />
      <button
        type="button"
        onClick={ () => saveUser(name,pass) }
        disabled={ !cond }
      >Sign In
      
      </button>
    </div>
  );
};
