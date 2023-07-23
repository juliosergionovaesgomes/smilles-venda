import React from 'react'
import { GiCoins, GiCommercialAirplane, GiTakeMyMoney } from 'react-icons/gi'
import { GoCreditCard } from 'react-icons/go'
import { Link } from 'react-scroll'

const BioComponent = () => {
    return (
        <div className="w-full h-screen flex  py-8 flex-wrap lg:flex-nowrap items-center justify-center  bg-neutral-black flex-row">
            <div className="w-full h-full   flex item-center justify-center flex-col py-10 text-center px-20  space-y-4 ">
                <h1
                    className=" text-2xl sm:text-3xl text-center font-bold "
                >
                    <span className="tracking-widest">
                        QUEM VAI TE ENSINAR TUDO ISSO?
                    </span>{" "}
                    <br />
                </h1>
                <p className="text-justify text-sm sm:text-lg leading-6">
                    O Minerador de milhas, Iago Novais,  expert em acúmulos de pontos e milhas, já
                    movimentou mais de 1 milhão de milhas nos últimos meses.
                    <br />
                    <br />
                    Este método o possibilitou de conhecer Portugal, França,
                    Inglaterra, Marrocos e Itália além de abrir portas para embarcar
                    em Classe Executiva para Cancún no México com tarifas mais baratas do que dos
                    viajantes da Classe Econômica.
                    <br />
                    <br />
                    Através disso, disponibilizou o método Minerador das Milhas, para que você
                    também aproveite desses benefícios de forma estratégica e sem
                    precisar pagar mais caro por isso.
                </p>
                <div className="w-full flex items-center justify-center pt-4">
                    <Link activeClass="active" to="plans" spy smooth duration={500}>
                        <button
                            className="z-50  text-sm uppercase font-bold   rounded-lg p-4 hover:scale-90 bg-primary text-white"
                        >
                            Acessar conteúdo.
                        </button>
                    </Link>
                </div>
            </div>
            <div className="w-full h-full lg:px-32 px-12 py-5  flex flex-col items-center justify-center">
                {[1, 2, 3, 4].map((element) => (
                    <div
                        key={element}
                        className={`w-full h-32 flex flex-row hover:delay-100 hover:transition-transform hover:translate-x-2 space-x-10 items-center justify-start   p-6  ${element === [1, 2, 3, 4].length
                            ? ""
                            : "border border-b-white  border-b-2 border-t-0 border-l-0 border-r-0 "
                            }`}
                    >
                        {(element === 1 && (
                            <GoCreditCard
                                className="text-5xl font-semibold text-primary"
                        
                            />
                        )) ||
                            (element === 2 && (
                                <GiCoins
                                    className="text-5xl font-semibold text-primary "
                                />
                            )) ||
                            (element === 3 && (
                                <GiCommercialAirplane
                                    className="text-5xl font-semibold  text-primary "
                                />
                            )) ||
                            (element === 4 && (
                                <GiTakeMyMoney
                                    className="text-5xl font-semibold text-primary "
                                />
                            ))}

                        {(element === 1 && (
                            <span>
                                <span className="text-2xl font-bold">Cartões</span> <br />{" "}
                                <span className="text-1xl">Os melhores cartões isentos de anuidades.</span>
                            </span>
                        )) ||
                            (element === 2 && (
                                <span>
                                    <span className="text-2xl font-bold">Pontos e milhas</span>{" "}
                                    <br /> <span className="text-1xl">Acumulos e multiplicações.</span>
                                </span>
                            )) ||
                            (element === 3 && (
                                <span>
                                    <span className="text-2xl font-bold">Passagens</span>{" "}
                                    <br /> <span className="text-1xl">Pesquisas e emissões.</span>
                                </span>
                            )) ||
                            (element === 4 && (
                                <span>
                                    <span className="text-2xl font-bold">Cashback</span>{" "}
                                    <br /> <span className="text-1xl">Retorno sobre suas compras.</span>
                                </span>
                            ))}
                    </div>
                ))}
            </div>

        </div>)
}

export default BioComponent