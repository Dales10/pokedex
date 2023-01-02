import { ReactNode } from "react";
import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";

type LayoutProps = {
    children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
                <title>Pokedex</title>
            </Head>
            <NavBar />
            <main>

            </main>
            <Footer />
        </>
    );
};

export default Layout;