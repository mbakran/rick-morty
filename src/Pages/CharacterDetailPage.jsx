import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

function CharacterDetailPage() {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then((data) => {
        setCharacter(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) return <Loader text="Učitavam detalje..." />;
  if (isError || !character)
    return <ErrorMessage text="Ups! Ne mogu dohvatiti detalje lika." />;

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        ← Back
      </Link>

      <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
        <img
          src={character.image}
          alt={character.name}
          style={{ width: 160, height: 160, borderRadius: 12 }}
        />

        <div style={{ display: "grid", gap: 6 }}>
          <h2 style={{ margin: 0 }}>{character.name}</h2>
          <div>
            <b>Species:</b> {character.species}
          </div>
          <div>
            <b>Gender:</b> {character.gender}
          </div>
          <div>
            <b>Origin:</b> {character.origin?.name}
          </div>
          <div>
            <b>Location:</b> {character.location?.name}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetailPage;
