import styles from "./style.module.scss";

export const Header = ({ setHome }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>
        Nu <span className={styles.span}>Kenzie</span>
      </h1>
      
    </header>
  );
};
