import styles from "./index.module.scss";
import logo from "@/assets/images/logo.svg";
import illustration from "@/assets/images/illustration.svg";
import { LoginForm } from "./components";

function LoginPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="logo" className={styles.logo} />
          <p>Woorkroom</p>
        </div>
        <h1>
          Your place to work <br /> Plan. Create. Control.
        </h1>
        <div className={styles.illustrationContainer}>
          <img src={illustration} alt="illustration" />
        </div>
      </div>
      <div className={styles.right}>
        <p>Sign In to Woorkroom</p>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
