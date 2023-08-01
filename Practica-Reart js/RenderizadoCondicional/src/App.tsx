import { useState } from "react";
import "./App.css";

function App() {
  const [loginStatus, setLoginStatus] = useState(true);

  const handleLogin = () => {
    setLoginStatus(true);
  };

  const handleLogout = () => {
    setLoginStatus(false);
  };

  return (
    <div>
      {loginStatus ? (
        <>
          <p> "Inicia sesión para ver contenido privado"</p>
          <button className="button" onClick={handleLogout}>
            Login
          </button>
        </>
      ) : (
        <>
          <p>"Esta página solo puedo verla por que estoy logueado"</p>
          <button className="button" onClick={handleLogin}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}

export default App;
