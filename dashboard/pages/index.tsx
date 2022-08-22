import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  
  return (
    <div className={styles.container}>
      <p>Hello and welcome to MyChat</p>
      <p>
        Have a account? <a href="/login">Login</a>
      </p>
      <p>
        Register yourself <a href="/register">Here</a>
      </p>
    </div>
  );
};

export default Home;
