import styles from "../styles/Layout.module.scss";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <main className={styles.wrapper}>
      <Header />

      {children}
    </main>
  );
};

export default Layout;
