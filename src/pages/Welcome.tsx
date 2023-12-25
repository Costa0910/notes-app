// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Welcome = () => {
  const navigate = useNavigate();
  const user = false;

  useEffect(() => {
    if (user) {
      navigate("/dashboard", { replace: true });
    }
  }, [user, navigate]);

  return (
    <div className="welcome">
      <h1>Welcome to Notes App</h1>
      <p>Use the navigation above to get started</p>
      <a>join our community</a>
    </div>
  );
};

export default Welcome;
