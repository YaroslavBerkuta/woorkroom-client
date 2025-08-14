import { Checkbox, Icon, Input, PrimaryButton } from "@/shared";
import styles from "./LoginForm.module.scss";
import { useState } from "react";
import z from "zod";
import { useForm } from "@tanstack/react-form";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { Field, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
    validators: {
      onSubmit: z.object({
        email: z.string().email({
          message: "Invalid email address",
        }),
        password: z.string().min(6, {
          message: "Password must be at least 6 characters long",
        }),
        remember: z.boolean(),
      }),
    },
    onSubmit: () => { },
  });

  return (
    <div className={styles.form}>
      <Field
        name="email"
        children={(field) => (
          <Input
            placeholder="write your email"
            type="text"
            name={field.name}
            onChange={(e) => field.handleChange(e.target.value)}
            label="Email Address"
            wrapperStyle={{ marginBottom: "30px" }}
            error={field.state.meta.errors
              .map((error) => error?.message)
              .join(", ")}
          />
        )}
      />

      <Field
        name="password"
        children={(field) => (
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
            onChange={(e) => field.handleChange(e.target.value)}
            value={field.state.value}
            error={field.state.meta.errors
              .map((error) => error?.message)
              .join(", ")}
          />
        )}
      />

      <div className={styles.checkBoxWrapper}>
        <Field
          name="remember"
          children={(field) => (
            <Checkbox
              label="Remember me"
              name={field.name}
              checked={field.state.value}
              onCheckedChange={(e) => field.handleChange(e)}
            />
          )}
        />

        <p>Forgot Password?</p>
      </div>
      <PrimaryButton
        onClick={() => handleSubmit()}
        label="Sign In"
        rightIcon={<Icon icon="arow-right" size={24} color="#fff" />}
        wrapperStyle={{ margin: "0 auto" }}
      />
    </div>
  );
};
