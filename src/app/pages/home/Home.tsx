import React from "react";
import { Bio, Conteudo, Duvidas, FirstSection, Garantia, Planos, Public } from "@app/components";
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
            <Planos />
            {/* Garantia */}
            <Garantia />
            {/* Dúvidas Frequents */}
            <Duvidas />

        </div >
    );
};

export default Home;
