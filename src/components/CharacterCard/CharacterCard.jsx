import { Link } from "react-router";
import styles from "./CharacterCard.module.css";

function CharacterCard({ character }) {
  return (
    <Link to={`/character/${character.id}`} className={styles.card}>
      <img
        className={styles.avatar}
        src={character.image}
        alt={character.name}
      />
      <div className={styles.body}>
        <div className={styles.name}>{character.name}</div>
        <div className={styles.meta}>
          <div>
            <b>Species:</b> {character.species}
          </div>
          <div>
            <b>Gender:</b> {character.gender}
          </div>
          <div>
            <b>Location:</b> {character.location?.name}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CharacterCard;
