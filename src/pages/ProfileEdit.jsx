import React, { useState } from "react";
import { getItem, setItem } from "../services/LocalStorageFuncs";

export const ProfileEdit = (props) => {
  const user = getItem("usuario");
  const [name, setName] = useState( user.name ||"");
  const [email, setEmail] = useState( user.email ||"");
  const [pass, setPass] = useState( user.pass ||"");
  const [img, setImg] = useState( user.img ||"");
  const [cpf, setCpf] = useState( user.cpf ||"");

  const cond =
    name.length > 3 &&
    email.includes("@") &&
    email.length > 8 &&
    pass.length > 8 &&
    img.length > 4 &&
    cpf.length === 12;

  const saveChanges = () => {
    setItem("usuario", {name, email, pass, img, cpf});
    const { history: { push } } = props;
    push('/profile');
  }

  return (
    <div>
      <p>Name</p>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={({target:{value}}) => setName(value)}
      />
      <p>Email</p>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={({target:{value}}) => setEmail(value)}
      />
      <p>Password</p>
      <input
        type="password"
        name="password"
        id="password"
        value={pass}
        onChange={({target:{value}}) => setPass(value)}
      />
      <p>Image Url</p>
      <input
        type="text"
        name="image"
        id="image"
        value={img}
        onChange={({target:{value}}) => setImg(value)}
      />
      <p>CPF</p>
      <input
        type="text"
        name="cpf"
        id="cpf"
        value={cpf}
        onChange={({target:{value}}) => setCpf(value)}
      />
      <br /> <br />
      <button type="button" disabled={!cond} onClick={saveChanges}>
        Save Changes
      </button>
    </div>
  );
};
