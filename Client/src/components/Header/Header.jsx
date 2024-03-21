import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.header} role="banner">
      <div className={styles.container}>
        <h1 className={styles.title} tabIndex="0">My Notes</h1>
        <p className={styles.subtitle} tabIndex="0">Organize your thoughts</p>
      </div>
    </header>
  );
}

export default Header;
