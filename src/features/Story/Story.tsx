
import styles from "./Story.module.css";
import storyImage from "../../assets/images/asignpostimage.jpg";
import offerImage from "../../assets/images/apizzaimage.jpg";
import Button from "../../components/common/Button";

type ModalType = "map" | "newsletter" | "article" | "menu" | null;

interface StoryProps {
  onOpenModal: (modal: ModalType) => void;
}

function Story({ onOpenModal }: StoryProps) {
  return (
    <section id="story" className={styles.story}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.content}>
            <h2>Our Story</h2>

            <p>
              Phasellus ultrices, massa vel commodo maximus, ex metus accumsan
              ante, id maximus turpis augue id lacus. Nullam porttitor mauris
              nec fermentum fermentum. Pellentesque habitant morbi
            </p>

            <div className={styles.buttons}>
              <Button text="Twitter" href="https://x.com/" />
              <Button text="Instagram" href="https://www.instagram.com/" />
              <Button text="Facebook" href="https://www.facebook.com/" />
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <img src={storyImage} alt="Our restaurant" />
          </div>
        </div>
      </div>

      <div className={styles.offerRow}>
        <div className={styles.offerContent}>
          <span>Exclusive offer</span>
          <h2>Sign up to our newsletter for exclusive offers</h2>
          <Button
            text="Read more"
            href="#newsletter"
            onClick={() => onOpenModal("newsletter")}
          />
        </div>

        <div className={styles.offerImage}>
          <img src={offerImage} alt="Freshly prepared pizza" />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.content}>
            <h2 id="find-us">Our Story</h2>

            <p>
              Phasellus ultrices, massa vel commodo maximus, ex metus accumsan
              ante, id maximus turpis augue id lacus. Nullam porttitor mauris
              nec fermentum fermentum. Pellentesque habitant morbi
            </p>

            <div className={styles.buttons}>
              <Button
                text="View Map"
                href="#map"
                onClick={() => onOpenModal("map")}
              />
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <img src={storyImage} alt="Our restaurant" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
