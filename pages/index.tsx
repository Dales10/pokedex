export async function getStaticProps() {
  const maxPokemons = 251;
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  data.results.forEach((item: any, index: number) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    }
  }
}

const Home = ({ pokemons }: any) => {
  return (
    <>
      <h1 className="4xl font-bold">Pokedex</h1>
      <ul>
        {pokemons.map((pokemon: any) => {
          return <li key={pokemon.id}>{pokemon.name} - {pokemon.id}</li>
        })}
      </ul>
    </>
  );
};

export default Home;