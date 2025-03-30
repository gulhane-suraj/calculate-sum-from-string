import Header from '../components/Header';
import styles from '../styles/Home.module.css';
// import '../styles/globals.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Calculate sum from string App!</h1>
        <p className={styles.description}>
          This is the homepage of your Calculate sum from string App application.
        </p>
      </main>
    </div>
  );
};

export default Home;