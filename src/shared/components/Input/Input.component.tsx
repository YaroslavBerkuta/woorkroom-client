import styles from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  wrapperStyle?: React.CSSProperties;
}

export const Input: React.FC<InputProps> = ({
  type = "text",
  error,
  icon,
  label,
  wrapperStyle,
  ...props
}) => {
  return (
    <div style={wrapperStyle}>
      <span className={`${styles.label} ${error && styles.error}`}>
        {label}
      </span>
      <div style={{ position: "relative" }}>
        <input
          className={`${styles.input} ${error && styles.error}`}
          type={type}
          {...props}
        />

        {icon && <span className={styles.passwordToggle}>{icon}</span>}
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
