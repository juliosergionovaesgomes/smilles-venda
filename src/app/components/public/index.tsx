import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const PublicComponent = () => {
    return (
        <div className="w-full  h-screen flex  items-center justify-center space-y-6  flex-col ">
            <h1
                className=" text-2xl sm:text-4xl w-full  text-white font-bold  text-center"
            >
                ESSE TREINAMENTO FOI FEITO <br />
                <span style={{ color: "#f9004d" }}>EXCLUSIVAMENTE</span> PARA VOCÊ
                QUE:
            </h1>
            <div className="px-10 flex items-center justify-center flex-row   ">
                <ul className="text-sm sm:text-lg">
                    <li className="flex items-center justify-start flex-row space-x-2 py-2  ">
                        <AiOutlineCheckCircle style={{ color: "#f9004d" }} />
                        <p>É iniciante e não sabe como começar a acumular milhas.</p>
                    </li>
                    <li className="flex items-center justify-start flex-row space-x-2 py-2  ">
                        <AiOutlineCheckCircle style={{ color: "#f9004d" }} />
                        <p>Sonha viajar o mundo, mesmo que isso não pareça possível.</p>
                    </li>
                    <li className="flex items-center justify-start flex-row space-x-2 py-2  ">
                        <AiOutlineCheckCircle style={{ color: "#f9004d" }} />
                        <p>
                            Quer descobrir os códigos das compras online com descontos e
                            cashbacks.
                        </p>
                    </li>
                    <li className="flex items-center justify-start flex-row space-x-2 py-2  ">
                        <AiOutlineCheckCircle style={{ color: "#f9004d" }} />
                        <p>
                            Quer descobrir como usar os gastos do dia a dia em seu favor.
                        </p>
                    </li>
                    <li className="flex items-center justify-start flex-row space-x-2 py-2  ">
                        <AiOutlineCheckCircle style={{ color: "#f9004d" }} />
                        <p>
                            Quer descobrir os benefícios dos cartões de crédito e conseguir
                            seu primeiro alta-renda.
                        </p>
                    </li>
                </ul>
            </div>
            <div
                className="text-sm uppercase font-bold text-black  rounded-lg p-4  hover:scale-90"
                style={{ background: "#1ED760" }}
            >
                Acessar conteúdo.
            </div>
        </div>)
}

export default PublicComponent