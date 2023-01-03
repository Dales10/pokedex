import Image from "next/image";
import Card from "../components/Card";

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
      <div className="flex justify-center items-center mb-8">
        <h1 className="4xl font-bold text-[#E33D33] text-center text-[3rem] mr-2">
          Pokedex
        </h1>
        <Image
          src='/images/pokeball.png'
          width='50'
          height='50'
          alt='Image of pokeball'
        />
      </div>
      <div className="flex flex-wrap justify-between items-center max-w-[1100px] mx-auto">
        {pokemons.map((pokemon: any) => {
          return <Card key={pokemon.id} pokemon={pokemon} />
        })}
      </div>
    </>
  );
};

export default Home;