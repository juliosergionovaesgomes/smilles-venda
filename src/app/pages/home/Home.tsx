import React from "react";
import { Bio, Conteudo, Duvidas, FirstSection, Footer, Garantia, Planos, Public } from "@app/components";
import { Element } from "react-scroll";
const Home = () => {
    return (
        <div className="text-white w-full flex items-center justify-center flex-col ">
            {/* Home */}
            <FirstSection />
            {/* Publico alvo  */}
            <Public />
            {/* Biografia */}
            <Bio />
            {/* Conteúdo */}
            <Conteudo />
            {/* Planos  */}
            <Element className="section" name="plans">
                <Planos />
            </Element>
            {/* Garantia */}
            <Garantia />
            {/* Dúvidas Frequents */}
            <Duvidas />
            {/* Footer - Rodapé*/}
            <Footer />
        </div >
    );
};

export default Home;
