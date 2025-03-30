import { useState } from 'react';
import { add } from '../utils/helpers';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
    } catch (error) {
      setResult(null);
      if (error instanceof Error) {
        alert(error.message); // Handle errors like negative numbers
      } else {
        alert('An unknown error occurred.');
      }
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Calculate Sum from String App!</h1>
        <p className={styles.description}>
          Enter a string of numbers to calculate their sum.
        </p>
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter numbers (e.g., 1,2,3)"
            className={styles.input}
          />
          <button onClick={handleCalculate} className={styles.button}>
            Calculate
          </button>
        </div>
        {result !== null && (
          <p className={styles.result}>The sum is: {result}</p>
        )}
      </main>
    </div>
  );
};

export default Home;