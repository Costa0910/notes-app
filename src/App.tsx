import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./App.css";

function App() {
  const navigate = useNavigate();
  const user = false;

  useEffect(() => {
    if (user) {
      navigate("/auth", { replace: true });
    }
  }, [user, navigate]);
  return <h1>Welcome to Notes App</h1>;
}

export default App;
