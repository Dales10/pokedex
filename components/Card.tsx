import Image from "next/image";
import Link from "next/link";

const Card = ({ pokemon }: any) => {
    return (
        <div className="flex justify-center items-center flex-col py-8 px-4 mb-8 w-[23%] rounded-2xl border-2 border-[#E33D33] shadow-[5px_5px_12px_rgba(0,0,0,.5)] bg-gray-800 text-white">
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                width='120'
                height='120'
                alt={pokemon.name}
            />
            <p className="my-4 bg-[#E33D33] rounded-md p-1 flex text-white justify-center items-center">#{pokemon.id}</p>
            <h3 className="capitalize mb-4 text-base">{pokemon.name}</h3>
            <Link href={`/pokemon/${pokemon.id}`} legacyBehavior>
                <a className="bg-white text-gray-700 py-3 px-5 rounded-md font-bold transition duration-[400ms] hover:bg-[#E33D33] hover:text-white">Detalhes</a>
            </Link>
        </div>
    );
};

export default Card;