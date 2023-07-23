import React from "react";
import { Bio, Conteudo, Duvidas, FirstSection, Footer, Garantia, Planos, Public } from "@app/components";
import { Element } from "react-scroll";
import InfoModel from "@app/components/modal/InfoModal";
import { FixHeader } from "@app/components/header";
const Home = () => {
    return (
        <div className="text-white w-full flex items-center justify-center flex-col ">
            {/* Home */}
            <FixHeader />
            <Element className="section w-full" name="home" >
                <FirstSection />
            </Element>
            {/* Publico alvo  */}
            <Element className="section" name="public">
                <Public />
            </Element>

            {/* Biografia */}
            <Element className="section" name="about">
                <Bio />
            </Element>
            {/* Conteúdo */}
            <Element className="section" name="content">
                <Conteudo />
            </Element>

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
            <InfoModel />

        </div >
    );
};

export default Home;
