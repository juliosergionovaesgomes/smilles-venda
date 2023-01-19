import React from 'react'
import image from "@assets/images/Thinking-Man-Transparent.jpeg";
import { Link } from 'react-scroll';
const modulos = [
    {
        modulo: '1',
        title1: 'Introdução ao',
        title2: 'mundo das milhas'
    },
    {
        modulo: '2',
        title1: 'Programas',
        title2: 'e estratégias'
    },
    {
        modulo: '3',
        title1: 'Roteiros',
        title2: 'e emissões'
    },
    {
        modulo: '4',
        title1: 'Cartôes',
        title2: 'e benefícios',
    }
]
const ContentComponent = () => {
    return (
        <div className="w-full   h-full items-center flex-wrap flex justify-center  space-y-8">
            <div className="text-center w-full flex flex-col justify-center items-center ">
                <h1 className="  w-96 xl:w-2/5 uppercase text-xl lg:text-2xl font-bold text-center tracking-tighter">
                    O Que você vai aprender no treinamento?
                </h1>
            </div>
            <div className="flex  flex-wrap  justify-center items-center   gap-5 lg:gap-10 ">
                {
                    modulos.map((module, index) => <div key={index} className="w-56 h-96  flex  flex-col items-center justify-end ">
                        <div className="flex w-full h-full border rounded-lg shadow-sm border-neutral-800 flex-col relative items-center justify-end ">
                            <img src={image} alt="" className="h-full w-full object-cover object-center " />
                            <div className="flex w-full h-full flex-col items-center bg-neutral-900 bg-opacity-60 justify-end absolute z-50">
                                <span className="px-2 font-bold rounded-md  shadow-sm flex items-center justify-center  text-black text-sm " style={{ backgroundColor: "#f9004d" }}>MÓDULO {module.modulo}</span>
                                <div className="flex  flex-col items-center justify-center pb-2 " >
                                    <h4 className="text-center font-semibold text-lg leading-6">{module.title1}<br />{module.title2}</h4>
                                </div>
                            </div>
                        </div>
                        <Link className="w-full" activeClass="active" to="plans" spy smooth duration={500}>
                            <button className="w-full animate-pulse px-4 py-2 text-xs text-center mt-3 rounded-md border border-neutral-800 bg-neutral-900 " style={{ fontFamily: "SoulcraftGX", }}>Acessar</button>
                        </Link>
                    </div>
                    )
                }
            </div>
        </div>)
}

export default ContentComponent