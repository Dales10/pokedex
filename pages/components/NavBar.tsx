import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
    return (
        <nav>
            <div>
                <Image src='/images/pokeball.png' width='30' height='30' alt='pokeball'/>
                <h1 className="4xl font-bold">Pokedex</h1>
            </div>
            <ul>
                <li>
                    <Link href='/' legacyBehavior>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/about' legacyBehavior>
                        <a>Sobre</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;