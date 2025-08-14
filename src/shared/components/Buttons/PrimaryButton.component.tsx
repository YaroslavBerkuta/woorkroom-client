import styles from "./PrimaryButton.module.scss";

interface PrimaryButtonProps {
  onClick: () => void;
  label: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  wrapperStyle?: React.CSSProperties;
}

export const PrimaryButton = ({
  onClick,
  label,
  rightIcon,
  leftIcon,
  wrapperStyle,
}: PrimaryButtonProps) => {
  return (
    <div className={styles.wrapper} onClick={onClick} style={wrapperStyle}>
      {leftIcon}
      <button>{label}</button>
      {rightIcon}
    </div>
  );
};
