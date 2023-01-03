import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
    return (
        <nav className='flex justify-between items-center py-4 px-5 mb-8 bg-gray-800 text-white'>
            <div className='flex justify-center items-center'>
                <Image
                    src='/images/pokeball.png'
                    width='30'
                    height='30'
                    alt='pokeball'
                />
                <h1 className="4xl font-bold ml-2">Pokedex</h1>
            </div>
            <ul className='flex'>
                <li className='mr-5'>
                    <Link href='/' legacyBehavior>
                        <a
                            className='p-1 transition duration-[400ms] border-b-2 border-transparent hover:border-white'>
                            Home
                        </a>
                    </Link>
                </li>
                <li className='mr-5'>
                    <Link href='/about' legacyBehavior>
                        <a
                            className='p-1 transition duration-[400ms] border-b-2 border-transparent hover:border-white'>
                            Sobre
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;