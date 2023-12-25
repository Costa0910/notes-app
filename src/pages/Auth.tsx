import { useState } from "react";
import { FieldType } from "../types/InputTypes";
import "./auth.css";

const Auth = () => {
  const [Login, setLogin] = useState<boolean>(false);
  const [formData, setFormData] = useState<FieldType>({
    email: "",
    password: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Login) {
      console.log("Login");
      console.log(formData);
    } else {
      console.log("Register");
      console.log(formData);
    }
  };

  return (
    <div className="auth">
      <h1>Welcome to Notes App</h1>
      <p>
        {Login
          ? "Please login to continue"
          : "Please create an account to continue"}
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            value={formData.email}
          />
        </div>
        <div className="form__password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            required
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            value={formData.password}
          />
        </div>
        <button type="submit">{Login ? "Login" : "Register"}</button>
        <p>
          {Login ? "Don't have an account?" : "Already have an account?"}
          <button type="button" onClick={() => setLogin((prev) => !prev)}>
            {Login ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Auth;
