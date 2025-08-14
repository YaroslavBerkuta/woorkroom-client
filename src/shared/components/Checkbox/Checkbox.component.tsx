import React from "react";
import styles from "./Checkbox.module.scss";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onCheckedChange?: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  onCheckedChange,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCheckedChange?.(e.target.checked);
  };

  return (
    <label className={styles.checkboxContainer}>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={handleChange}
        className={styles.hiddenCheckbox}
        {...props}
      />
      <span className={styles.customCheckbox}>
        {props.checked && <span className={styles.checkmark} />}
      </span>
      <span className={styles.label}>{label}</span>
    </label>
  );
};
