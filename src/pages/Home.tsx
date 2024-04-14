import { useFetchData } from "../api/apiUtils";

export default function Home() {
  const pokemonIds = [172, 4, 147];

  const { data, isLoading, error } = useFetchData(
    `https://pokeapi.co/api/v2/pokemon/${pokemonIds[0]}/`
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: </div>;
  if (!data || data.length === 0) return <div>No data available</div>;

  console.log(data);

  return <>메인</>;
}
