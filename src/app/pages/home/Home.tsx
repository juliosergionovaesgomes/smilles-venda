import React from "react";
import image from "../../../assets/images/Thinking-Man-Transparent.jpeg";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GoCreditCard } from "react-icons/go";
import { GiCoins, GiCommercialAirplane, GiTakeMyMoney } from "react-icons/gi";
const Home = () => {
    return (
        <div className="text-white w-full flex items-center justify-center flex-col ">
            {/* Home */}
            <div
                className="w-full h-full flex items-center justify-center flex-row space-x-2 py-2"
                style={{ height: "calc(100vh - 80px)" }}
            >
                <div className="w-full h-full flex  items-start justify-center flex-col px-20 space-y-8">
                    <h1
                        className=" w-full   uppercase  text-start "
                        style={{ zIndex: 123121414 }}
                    >
                        <h1 className="text-6xl" style={{ fontFamily: "SoulcraftGX" }}>
                            O<span style={{ color: "#f9004d" }}> Código</span> <br /> das
                            Milhas
                        </h1>
                        <span className="text-2xl font-normal">
                            Aprenda viajar barato e não fique <br />
                            refém de tarifas flexíveis!
                        </span>
                    </h1>
                    <button
                        className="text-sm uppercase   top-42 -bottom-32 font-bold text-black  rounded-lg p-4 hover:scale-90"
                        style={{ background: "#1ED760" }}
                    >
                        Acessar conteúdo.
                    </button>
                </div>
                <div className="w-full h-full">
                    <img
                        src={image}
                        alt=""
                        className="object-cover h-full w-full opacity-40"
                    />
                </div>
            </div>

            {/* Publico alvo  */}
            <div className="w-full h-screen flex  items-center justify-center space-y-6   bg-neutral-900 flex-col ">
                <h1
                    className="text-4xl w-full  text-white font-black  text-center"
                    style={{ fontFamily: "SoulcraftGX" }}
                >
                    ESSE TREINAMENTO FOI FEITO <br />
                    <span style={{ color: "#f9004d" }}>EXCLUSIVAMENTE</span> PARA VOCÊ
                    QUE:
                </h1>
                <div className="px-10 flex items-center justify-center flex-row   ">
                    <ul className=" text-lg ">
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
                <button
                    className="text-sm uppercase font-bold text-black  rounded-lg p-4  hover:scale-90"
                    style={{ background: "#1ED760" }}
                >
                    Acessar conteúdo.
                </button>
            </div>
            {/* Biografia */}
            <div className="w-full h-auto flex  flex-wrap sm:flex-nowrap  sm:h-screen items-center justify-center  bg-neutral-black flex-row">
                <div className="w-full h-full   flex item-center justify-center flex-col py-10 text-center px-20  space-y-4 ">
                    <h1
                        className="text-3xl text-center "
                        style={{ fontFamily: "SoulcraftGX" }}
                    >
                        <span className="tracking-widest">
                            QUEM VAI TE ENSINAR TUDO ISSO?
                        </span>{" "}
                        <br />
                    </h1>
                    <p className="text-justify text-base">
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
                <div className="w-full h-full px-32 py-5  flex flex-col items-center justify-center">
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
            </div>

            {/* Conteúdo */}
            <div className="w-full h-screen flex  items-center justify-between  py-20 space-x-4 flex-col">
                <h1 className="uppercase text-2xl font-semibold">
                    O Que você vai aprender no curso <b style={{ color: "#f9004d" }}>O Código das Milhas</b> ?
                </h1>
                <div className="flex flex-wrap space-x-10  bg-blend-multiply">
                    {/* Card 1 */}
                    <div className="w-56 h-80  flex  flex-col items-center justify-end space-y-2">
                        <div className="flex w-full h-full border border-neutral-800 flex-col relative items-center justify-end ">
                            <img src={image} alt="" className="h-full w-full object-cover object-center" />
                            <div className="flex w-full h-full flex-col items-center bg-neutral-900 bg-opacity-60 justify-end absolute z-50">
                                <div className="px-1 text-black font-bold bg-yellow-300 border border-yellow-300 shadow-sm shadow-yellow-300">
                                    <span className="text-sm">Modulo I</span>
                                </div>
                                <div className="flex  flex-col items-center justify-center  space-y-2 py-2 pb-3" >
                                    <h4 className="text-center font-semibold text-2xl leading-6	 ">Introdução ao <br />Código das Milhas</h4>
                                    <span className="text-xs font-thin">O <b style={{ color: "#f9004d" }}>Código</b> das Milhas</span>
                                </div>
                            </div>
                        </div>
                        <button className="w-full px-4 py-2 text-xs bg-neutral-800 hover:scale-90" style={{ fontFamily: "SoulcraftGX", backgroundColor: "#1ED760" }}>Acessar</button>
                    </div>
                    {/* Card 2 */}
                    <div className="w-56 h-80  flex  flex-col items-center justify-end space-y-2">
                        <div className="flex w-full h-full border border-neutral-800 flex-col relative items-center justify-end ">
                            <img src={image} alt="" className="h-full w-full object-cover object-center" />
                            <div className="flex w-full h-full flex-col items-center bg-neutral-900 bg-opacity-60 justify-end absolute z-50">
                                <div className="px-1 text-black font-bold bg-yellow-300 border border-yellow-300 shadow-sm shadow-yellow-300">
                                    <span className="text-sm">Modulo II</span>
                                </div>
                                <div className="flex  flex-col items-center justify-center  space-y-2 py-2 pb-3" >
                                    <h4 className="text-center font-semibold text-2xl leading-6	 ">Introdução ao <br />Código das Milhas</h4>
                                    <span className="text-xs font-thin">O <b style={{ color: "#f9004d" }}>Código</b> das Milhas</span>
                                </div>
                            </div>
                        </div>
                        <button className="w-full px-4 py-2 text-xs bg-neutral-800 hover:scale-90" style={{ fontFamily: "SoulcraftGX", backgroundColor: "#1ED760" }}>Acessar</button>
                    </div>
                    {/* Card 3 */}
                    <div className="w-56 h-80  flex  flex-col items-center justify-end space-y-2">
                        <div className="flex w-full h-full border border-neutral-800 flex-col relative items-center justify-end ">
                            <img src={image} alt="" className="h-full w-full object-cover object-center" />
                            <div className="flex w-full h-full flex-col items-center bg-neutral-900 bg-opacity-60 justify-end absolute z-50">
                                <div className="px-1 text-black font-bold bg-yellow-300 border border-yellow-300 shadow-sm shadow-yellow-300">
                                    <span className="text-sm">Modulo III</span>
                                </div>
                                <div className="flex  flex-col items-center justify-center  space-y-2 py-2 pb-3" >
                                    <h4 className="text-center font-semibold text-2xl leading-6	 ">Introdução ao <br />Código das Milhas</h4>
                                    <span className="text-xs font-thin">O <b style={{ color: "#f9004d" }}>Código</b> das Milhas</span>
                                </div>
                            </div>
                        </div>
                        <button className="w-full px-4 py-2 text-xs bg-neutral-800 hover:scale-90" style={{ fontFamily: "SoulcraftGX", backgroundColor: "#1ED760" }}>Acessar</button>
                    </div>
                    {/* Card 4 */}
                    <div className="w-56 h-80  flex  flex-col items-center justify-end space-y-2">
                        <div className="flex w-full h-full border border-neutral-800 flex-col relative items-center justify-end ">
                            <img src={image} alt="" className="h-full w-full object-cover object-center" />
                            <div className="flex w-full h-full flex-col items-center bg-neutral-900 bg-opacity-60 justify-end absolute z-50">
                                <div className="px-1 text-black font-bold bg-yellow-300 border border-yellow-300 shadow-sm shadow-yellow-300">
                                    <span className="text-sm">Modulo IV</span>
                                </div>
                                <div className="flex  flex-col items-center justify-center  space-y-2 py-2 pb-3" >
                                    <h4 className="text-center font-semibold text-2xl leading-6	 ">Introdução ao <br />Código das Milhas</h4>
                                    <span className="text-xs font-thin">O <b style={{ color: "#f9004d" }}>Código</b> das Milhas</span>
                                </div>
                            </div>
                        </div>
                        <button className="w-full px-4 py-2 text-xs bg-neutral-800 hover:scale-90" style={{ fontFamily: "SoulcraftGX", backgroundColor: "#1ED760" }}>Acessar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
