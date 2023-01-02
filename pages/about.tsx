import Image from "next/image";

const About = () => {
    return (
        <div className="text-center">
            <h1 className="4xl font-bold text-3xl mb-4">
                Sobre o projeto
            </h1>
            <p className="mb-6 max-w-[500px] mx-auto leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quidem modi ab voluptatem officia dignissimos aspernatur, ea autem reiciendis. Veniam assumenda odit quibusdam hic autem eius ad fugit voluptatum magni?
            </p>
            <Image
                src='/images/Full_Form_Zygard.png'
                width='300'
                height='300'
                alt='Image of the Pokémon Zygard'
                className="m-auto"
            />
        </div>
    );
};

export default About;
