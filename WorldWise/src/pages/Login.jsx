import { useState } from "react";
import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
function Login() {
  const [email, setEmail] = useState("gehad@example.com");
  const [password, setPassword] = useState("gehad");
  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form}>
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
          <button>Login</button>
        </div>
      </form>
    </main>
  );
}
export default Login;
