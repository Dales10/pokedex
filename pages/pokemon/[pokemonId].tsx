import Image from "next/image";
import styles from '../../styles/Pokemon.module.scss';

export const getStaticPaths = async () => {
    const maxPokemons = 251;
    const api = 'https://pokeapi.co/api/v2/pokemon/';

    const res = await fetch(`${api}/?limit=${maxPokemons}`);
    const data = await res.json();

    const paths = data.results.map((pokemon: any, index: number) => {
        return {
            params: {pokemonId: (index + 1).toString()},
        }
    });

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context: any) => {
    const id = context.params.pokemonId;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    return {
        props: {pokemon: data},
    }
}

const Pokemon = ({ pokemon }: any) => {
    return (
        <div className="text-center">
            <h1 className="text-4xl capitalize bg-gray-800 text-white p-1 my-3 mx-auto w-80">{pokemon.name}</h1>
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                width='200'
                height='200'
                alt={pokemon.name}
                className='m-auto'
            />
            <div>
                <h3 className="my-[.6rem] mx-auto text-xl">Número:</h3>
                <p>#{pokemon.id}</p>
            </div>
            <div>
                <h3 className="my-[.6rem] mx-auto text-xl">Tipo:</h3>
                <div className="flex items-center justify-center">
                    {pokemon.types.map((item: any, index: number) => {
                        return <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`}>
                            {item.type.name}
                        </span>
                    })}
                </div>
            </div>
            <div className="flex items-center justify-center mt-2">
                <div className="my-4 px-4 flex justify-center items-center flex-col">
                    <h4 className="border-r border-[#ccc]">Altura:</h4>
                    <p>{pokemon.height * 10} cm</p>
                </div>
                <div className="my-4 px-4 flex justify-center items-center flex-col">
                    <h4>Peso</h4>
                    <p>{pokemon.weight/ 10} kg</p>
                </div>
            </div>
        </div>
    );
};

export default Pokemon;
