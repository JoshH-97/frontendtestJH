import styles from "./Footer.module.css";
import logo from "../../../assets/icons/izza.svg";
import facebookIcon from "../../../assets/icons/facebook.svg";
import instagramIcon from "../../../assets/icons/insta.svg";
import twitterIcon from "../../../assets/icons/twitter.svg";
import linkedinIcon from "../../../assets/icons/linkedin.svg";

function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <img src={logo} alt="Logo" />
          <p>
            © IZZA is a complay limited by gurantee registered in England and
            Wales
          </p>
        </div>

        <div className={styles.details}>
          <div className={styles.contact}>
            <h3>Contact Us</h3>
            <div className={styles.divider}></div>
            <p>01234 567890</p>
          </div>

          <div className={styles.social}>
            <h3>Follow Us</h3>
            <div className={styles.divider}></div>

            <div className={styles.socialIcons}>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebookIcon} alt="Facebook" />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramIcon} alt="Instagram" />
              </a>

              <a
                href="https://www.x.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterIcon} alt="X (Twitter)" />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </div>
          </div>

          <p className={styles.credit}>Made by Williams Commerce</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
