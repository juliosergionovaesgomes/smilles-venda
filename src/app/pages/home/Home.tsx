import React from "react";
import image from "../../../assets/images/Thinking-Man-Transparent.jpeg";
import mokup from "../../../assets/images/mokup.png";
import selo from "../../../assets/images/selo.png";
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GoCreditCard } from "react-icons/go";

const modulos = [
    {
        modulo: '1',
        title1: 'Introdução ao',
        title2: 'Mundo das Milhas'
    },
    {
        modulo: '2',
        title1: 'Introdução ao',
        title2: 'Código das Milhas'
    },
    {
        modulo: '3',
        title1: 'Introdução ao',
        title2: 'Código das Milhas'
    },
    {
        modulo: '4',
        title1: 'Introdução ao',
        title2: 'Código das Milhas',
    }
]


const duvidas = [
    {
        title: 'Quero aprender apenas a viajar barato, esse curso serve para mim?',
        description: 'Claro! Você vai aprender os códigos das viagens baratas com acúmulos de milhas de forma estratégica e montar seu roteiro sem desperdiçar seu dinheiro e/ou milhas.'
    },
    {
        title: 'Por quanto tempo tenho acesso ao curso?',
        description: 'Seu acesso será vitalício ao curso onde poderá tirar suas dúvidas pela própria plataforma.'
    },
    {
        title: 'Sou iniciante, esse curso é para mim?',
        description: 'Sim, no curso você aprende os conceitos básicos de milhas e tudo que você precisa para montar um roteiro perfeito, inclusive, emissões com a Latam, Smiles e Tudo Azul sempre fazendo a comparação em dinheiro.'
    },
    {
        title: 'Dentro do curso, você ensina exemplos na prática?',
        description: 'Sim! Durante o conteúdo vocês irão terão acesso à todas estratégias de acúmulos, roteiros e emissões na prática.'
    }
]
import { GiCoins, GiCommercialAirplane, GiTakeMyMoney } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
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
                        <h1 className="text-6xl font-bold" >
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
            <div className="w-full h-screen flex  items-center justify-center space-y-6  flex-col ">
                <h1
                    className="text-4xl w-full  text-white font-bold  text-center"
                >
                    ESSE TREINAMENTO FOI FEITO <br />
                    <span style={{ color: "#f9004d" }}>EXCLUSIVAMENTE</span> PARA VOCÊ
                    QUE:
                </h1>
                <div className="px-10 flex items-center justify-center flex-row   ">
                    <ul className="text-lg">
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
            </div>
            {/* Biografia */}
            <div className="w-full h-auto flex  flex-wrap sm:flex-nowrap  sm:h-screen items-center justify-center  bg-neutral-black flex-row">
                <div className="w-full h-full   flex item-center justify-center flex-col py-10 text-center px-20  space-y-4 ">
                    <h1
                        className="text-3xl text-center font-bold "
                    >
                        <span className="tracking-widest">
                            QUEM VAI TE ENSINAR TUDO ISSO?
                        </span>{" "}
                        <br />
                    </h1>
                    <p className="text-justify text-lg leading-6">
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
            <div className="w-full  h-screen items-center flex-wrap flex justify-center  space-x-4 space-y-20 flex-col bg ">
                <div className="text-center">
                    <h1 className="uppercase text-2xl font-bold">
                        O Que você vai aprender no curso O Código das Milhas ?
                    </h1>
                    <h6 className="text-lg   ">afwfawfçojafçojaçofjjf o</h6>
                </div>
                <div className="flex flex-wrap  justify-center items-center  gap-10">
                    {
                        modulos.map(module => <div className="w-56 h-96  flex  flex-col items-center justify-end ">
                            <div className="flex w-full h-full border rounded-lg shadow-sm border-neutral-800 flex-col relative items-center justify-end ">
                                <img src={image} alt="" className="h-full w-full object-cover object-center " />
                                <div className="flex w-full h-full flex-col items-center bg-neutral-900 bg-opacity-60 justify-end absolute z-50">
                                    <span className="px-2 font-bold rounded-md  shadow-sm flex items-center justify-center  text-black text-sm " style={{ backgroundColor: "#f9004d" }}>MÓDULO {module.modulo}</span>
                                    <div className="flex  flex-col items-center justify-center pb-2 " >
                                        <h4 className="text-center font-semibold text-lg leading-6">{module.title1}<br />{module.title2}</h4>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full animate-pulse px-4 py-2 text-xs mt-3 rounded-md border border-neutral-800 bg-neutral-900 " style={{ fontFamily: "SoulcraftGX", }}>Acessar</button>
                        </div>
                        )
                    }
                </div>
            </div>

            {/* Planos  */}
            <div className="w-full h-screen flex  flex-col text-white items-center justify-center px-10  text-center">
                <img src={mokup} alt="" className="object-contain w-96 " />
                <div className="flex w-full items-center justify-center flex-col space-y-4">
                    <h1 className="text-4xl  font-bold leading-10 text-center" >Tudo isso por um <br />preço justo!</h1>
                    <div>
                        <span className="text-lg space-x-1">
                            <span className="font-bold text-md">12<small>X</small> de</span>

                            <span className="font-bold text-3xl" style={{ color: "#f9004d" }}>R$9,74</span>
                            <span className="font-bold">no cartão</span></span>
                        <br />
                        <span className="text-lg font-bold">ou <span>R$97,00</span> à vista</span>
                    </div>
                    <button
                        className="z-50  text-sm uppercase font-bold text-black  rounded-lg p-4 hover:scale-90"
                        style={{ background: "#1ED760" }}
                    >
                        Acessar conteúdo.
                    </button>
                    <p className="w-2/2 text-center text-lg">Você terá um ano de acesso ao curso podendo assistir aonde<br /> e quando quiser com suporte a todas as aulas. </p>
                </div>
            </div>

            {/* Garantia */}

            <div className="w-full h-screen flex flex-row justify-center items-center">

                <img src={selo} alt="" className="w-80 h-80 animate-pulse" />
                <div className="w-2/5 space-y-4">
                    <h4 className="text-4xl font-bold ">Você conta com a garantia <br /> incondicional de 7 dias</h4>
                    <p className="text-justify text-md leading-5">Se por qualquer motivo você não gostar, achar que não é para você,
                        <b className="text-md"> NÃO TEM PROBLEMA!</b> Basta solicitar o reembolso e seu dinheiro vai ser
                        devolvido integralmente.
                    </p>
                    <p className="text-justify text-md leading-5">
                        Agora só depende de você, ou você entra e aprende ou vai continuar assistindo
                        na plateia .
                    </p>
                    <p className="text-md leading-1 "> Te espero no Código das Milhas.</p>
                </div>
            </div>

            {/* Garantia */}
            <div className="w-full h-screen flex flex-col justify-center items-center space-y-12 px-40 py-10 text-center">
                <h1 className="font-bold text-4xl ">Dúvidas frequentes:</h1>
                <div className="w-2/3 px-2 space-y-2">
                    {duvidas.map(item =>
                        <Disclosure >
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium ">
                                        <span className="text-black text-lg">{item.title}</span>
                                        <ChevronUpIcon
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4  text-lg text-white">
                                        <p className="text-justify "> {item.description}</p>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    )}
                </div>
            </div>
        </div >
    );
};

export default Home;
