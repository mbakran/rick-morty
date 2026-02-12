import { Routes, Route, Link } from "react-router";
import CharacterPage from "./Pages/CharacterPage";
import CharacterDetailPage from "./Pages/CharacterDetailPage";
import styles from "./styles/app.module.css";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <Link to="/" className={styles.brand}>
          Rick & Morty
        </Link>
      </header>

      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<CharacterPage />} />
          <Route path="/character/:id" element={<CharacterDetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
