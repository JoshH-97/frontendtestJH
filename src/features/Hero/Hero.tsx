
import styles from './Hero.module.css';

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            There is always
            <br />
            time for pizza...
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
