import { useState } from "react";

function Form() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  function submit(e) {
    e.preventDefault();
    console.log(user);
    console.log(pass);
  }

  return (
    <>
      <form onSubmit={submit} className="form">
        <label htmlFor="user">Usuario</label>
        <input
          type="text"
          id="user"
          name="user"
          placeholder="Ingrese su usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <label htmlFor="pass">Contraseña </label>
        <input
          type="password"
          id="pass"
          name="pass"
          placeholder="Ingrese su contraseña"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <input type="submit" value="Enviar" />
      </form>
    </>
  );
}

export default Form;
