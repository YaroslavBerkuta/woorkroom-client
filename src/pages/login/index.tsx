import styles from "./index.module.scss";
import logo from "@/assets/images/logo.svg";
import illustration from "@/assets/images/illustration.svg";
import { Checkbox, Icon, Input } from "@/shared";
import { useState } from "react";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

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
        <div className={styles.form}>
          <Input
            placeholder="write your email"
            type="text"
            name="email"
            label="Email Address"
            style={{ marginBottom: "30px" }}
          />
          <Input
            placeholder="write your password"
            type={showPassword ? "text" : "password"}
            name="password"
            label="Password"
            icon={
              <Icon
                onClick={() => setShowPassword((prev) => !prev)}
                icon="eye-open"
                color={showPassword ? "#3F8CFF" : "#7D8592"}
                size={24}
              />
            }
          />
          <div className={styles.checkBoxWrapper}>
            <Checkbox
              label="Remember me"
              name="remember"
              checked={false}
              onCheckedChange={(e) => console.log(e)}
            />
            <p>Forgot Password?</p>
          </div>
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
