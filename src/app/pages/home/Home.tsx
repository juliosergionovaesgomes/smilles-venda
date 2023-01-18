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

            <footer className="h-20 w-full text-center">
                <h1 className="font-medium"> Copyright &copy; 2023-2025, Todos os direitos reservados  por<a style={{ color: "#f9004d" }} href="https://ocodigodasmilhas.com"> o codigo das milhas.</a></h1>
            </footer>

        </div >
    );
};

export default Home;
