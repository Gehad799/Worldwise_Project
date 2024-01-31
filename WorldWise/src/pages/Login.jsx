import { useEffect, useState } from "react";
import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
function Login() {
  const [email, setEmail] = useState("gehad@example.com");
  const [password, setPassword] = useState("gehad");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) login(email, password);
  }
  useEffect(
    function () {
      if (isAuthenticated) navigate("/app", { replace: true });
    },
    [isAuthenticated, navigate]
  );
  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label>Email Address:</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className={styles.row}>
          <label>Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setEmail(e.target.value)}
            value={password}
          />
        </div>
        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}
export default Login;
