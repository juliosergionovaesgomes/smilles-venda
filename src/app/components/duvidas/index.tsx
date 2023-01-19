import React from 'react'
import { GiCoins, GiCommercialAirplane, GiTakeMyMoney } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import { IoIosArrowUp } from "react-icons/io";



const duvidas = [
    {
        title: 'Quando será disponibilizado as aulas ?',
        description: 'As aulas serão disponibilziadas imediatamente após aprovação do pagamento.'
    },
    {
        title: 'Por quanto tempo tenho acesso ao curso?',
        description: 'Seu acesso ao curso será vitalício onde poderá tirar suas dúvidas pela própria plataforma.'
    },
    {
        title: 'Sou iniciante, esse curso é para mim?',
        description: 'Sim, no curso você aprende os conceitos básicos de milhas e tudo que você precisa para montar um roteiro perfeito, inclusive, emissões com a Latam, Smiles e Tudo Azul sempre fazendo a comparação em dinheiro.'
    },
    {
        title: 'Preciso de um cartão de crédito para aplicar as estratégias ?',
        description: 'Não! Você vai aprender a usar os gastos do seu dia a dia para acumular milhas mesmo sem cartões de crédito.'
    },
    {
        title: "Vou precisar assinar clubes de vantagens ?",
        description: "Você vai aprender os benefícios das assinaturas dos clubes e os melhores momentos para transferir e multiplicar suas milhas."
    }
]


const DuvidasComponents = () => {
    return (
        <div className="w-full  min-h-screen flex flex-col justify-center items-center space-y-12 px-4 lg:px-40 py-10 text-center my-8">
            <h1 className="font-bold text-4xl ">Dúvidas frequentes:</h1>
            <div className="lg:w-2/3 px-2 space-y-2">
                {duvidas.map(item =>
                    <Disclosure >
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium ">
                                    <span className="text-black text-lg">{item.title}</span>
                                    <IoIosArrowUp
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
    )
}

export default DuvidasComponents