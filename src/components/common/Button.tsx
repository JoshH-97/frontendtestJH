import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  href: string;
  onClick?: () => void;
}

function Button({ text, href, onClick }: ButtonProps) {
  return (
    <a
      href={href}
      className={styles.button}
      onClick={(event) => {
        if (onClick) {
          event.preventDefault();
          onClick();
        }
      }}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {text}
    </a>
  );
}

export default Button;
