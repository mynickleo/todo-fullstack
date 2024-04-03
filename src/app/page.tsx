import styles from "./page.module.css";
import ToDoWrapper from "../components/ToDoWrapper"

export default function Home() {
  return (
    <>
      <header className={styles.header}>
          <a href = "#">ABOUT US</a>
          <a href = "#">CONTACT</a>
      </header>

      <div className={styles.blur}></div>

      <div className={styles.todoContent}>
        <h1 className={styles.h1}>Create your ToDo</h1>
        <ToDoWrapper />
      </div>

      <footer className={styles.footer}>
          <p>Next.js Todo app by mynickleo</p>
      </footer>
    </>
  );
}
