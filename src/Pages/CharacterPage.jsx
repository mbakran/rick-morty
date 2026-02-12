import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard/CharacterCard";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

function CharacterPage() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then((data) => {
        setCharacters(data.results || []);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loader text="Učitavam likove..." />;
  if (isError) return <ErrorMessage text="Ups! Ne mogu dohvatiti likove." />;

  return (
    <div style={{ display: "grid", gap: 12 }}>
      {characters.map((c) => (
        <CharacterCard key={c.id} character={c} />
      ))}
    </div>
  );
}

export default CharacterPage;
