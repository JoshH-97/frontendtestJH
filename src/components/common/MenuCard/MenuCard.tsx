import Button from "../Button";
import styles from "./MenuCard.module.css";

interface MenuCardProps {
  image: string;
  imageAlt: string;
  name: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  onButtonClick?: () => void;
}

function MenuCard({
  image,
  name,
  imageAlt,
  description,
  buttonText,
  buttonHref,
  onButtonClick,
}: MenuCardProps) {
  return (
    <article className={styles.card}>
      <img src={image} alt={imageAlt} className={styles.image} />

      <div className={styles.content}>
        <h3>{name}</h3>
        <p>{description}</p>

        {buttonText && buttonHref && (
          <Button
            text={buttonText}
            href={buttonHref}
            onClick={onButtonClick}
          />
        )}
      </div>
    </article>
  );
}

export default MenuCard;
