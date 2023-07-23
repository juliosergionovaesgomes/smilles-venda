import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { Link } from 'react-scroll'

const PublicComponent = () => {
    return (
        <div className="w-full  h-screen flex  items-center justify-center space-y-6  flex-col ">
            <h1
                className=" text-5xl sm:text-5xl w-full  text-white font-bold  text-center"
            >
                ESSE TREINAMENTO FOI FEITO <br />
                <span className='text-primary'>EXCLUSIVAMENTE</span> PARA VOCÊ
                QUE:
            </h1>
            <div className="px-10 flex items-center justify-center flex-row">
                <ul className="text-2xl sm:text-2xl">
                    <li className="flex items-center justify-start flex-row space-x-2 py-2  ">
                        <AiOutlineCheckCircle className='text-primary' />
                        <p>É iniciante e quer começar do absoluto zero.</p>
                    </li>
                    <li className="flex items-center justify-start flex-row space-x-2 py-2  ">
                        <AiOutlineCheckCircle className='text-primary' />
                        <p>Já conhece o básico e precisa aprimorar seu conhecimento.</p>
                    </li>
                    <li className="flex items-center justify-start flex-row space-x-2 py-2  ">
                        <AiOutlineCheckCircle className='text-primary' />
                        <p>
                            Quer viajar em alta temporada sem pagar a mais por isso.
                        </p>
                    </li>
                    <li className="flex items-center justify-start flex-row space-x-2 py-2  ">
                        <AiOutlineCheckCircle className='text-primary' />
                        <p>
                            Quer visitar as salas vip's dos aeroportos gratuitamente.
                        </p>
                    </li>
                    <li className="flex items-center justify-start flex-row space-x-2 py-2  ">
                        <AiOutlineCheckCircle className='text-primary' />
                        <p>
                            Quer descobrir os benefícios dos cartões de crédito e conseguir
                            seu primeiro alta-renda.
                        </p>
                    </li>
                </ul>
            </div>
            <Link activeClass="active" to="plans" spy smooth duration={500}>
                <button
                    className="text-sm uppercase font-bold text-white  rounded-lg p-4 bg-primary hover:scale-90"
                >
                    Acessar conteúdo.
                </button>
            </Link>
        </div>)
}

export default PublicComponent