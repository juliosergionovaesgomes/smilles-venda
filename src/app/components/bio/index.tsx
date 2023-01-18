import React from 'react'
import { GiCoins, GiCommercialAirplane, GiTakeMyMoney } from 'react-icons/gi'
import { GoCreditCard } from 'react-icons/go'

const BioComponent = () => {
    return (
        <div className="w-full h-full flex   flex-wrap lg:flex-nowrap items-center justify-center  bg-neutral-black flex-row">
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
                    Sou Iago Novais, expert em acúmulos de pontos e milhas, já
                    movimentei mais de 1 milhão de milhas nos ultimos 4 meses.
                    <br />
                    <br />
                    Com este método, me possibilitei de conhecer Portugal, França,
                    Inglaterra, Marrocos e Itália além de me abrir portas para embarcar
                    de Classe Executiva para o México com tarifas mais baratas do que de
                    viajantes da Classe Econômica.
                    <br />
                    <br />
                    Através disso, criei o método O Código das MIlhas, para que você
                    também aproveite desses benefícios de forma estratégica sem sem
                    precisar pagar mais caro por isso.
                </p>
                <div className="w-full flex items-center justify-center pt-4">
                    <button
                        className="z-50  text-sm uppercase font-bold text-black  rounded-lg p-4 hover:scale-90"
                        style={{ background: "#1ED760" }}
                    >
                        Acessar conteúdo.
                    </button>
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
                                className="text-5xl font-semibold "
                                style={{ color: "#f9004d" }}
                            />
                        )) ||
                            (element === 2 && (
                                <GiCoins
                                    className="text-5xl font-semibold "
                                    style={{ color: "#f9004d" }}
                                />
                            )) ||
                            (element === 3 && (
                                <GiCommercialAirplane
                                    className="text-5xl font-semibold "
                                    style={{ color: "#f9004d" }}
                                />
                            )) ||
                            (element === 4 && (
                                <GiTakeMyMoney
                                    className="text-5xl font-semibold "
                                    style={{ color: "#f9004d" }}
                                />
                            ))}

                        {(element === 1 && (
                            <span>
                                <span className="text-2xl font-bold">Pré Imersão</span> <br />{" "}
                                <span className="text-1xl">Nivelamento</span>
                            </span>
                        )) ||
                            (element === 2 && (
                                <span>
                                    <span className="text-2xl font-bold">Pré Imersão</span>{" "}
                                    <br /> <span className="text-1xl">Nivelamento</span>
                                </span>
                            )) ||
                            (element === 3 && (
                                <span>
                                    <span className="text-2xl font-bold">Pré Imersão</span>{" "}
                                    <br /> <span className="text-1xl">Nivelamento</span>
                                </span>
                            )) ||
                            (element === 4 && (
                                <span>
                                    <span className="text-2xl font-bold">Pré Imersão</span>{" "}
                                    <br /> <span className="text-1xl">Nivelamento</span>
                                </span>
                            ))}
                    </div>
                ))}
            </div>

        </div>)
}

export default BioComponent