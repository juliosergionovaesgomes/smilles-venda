import React from 'react'
import image from '../../../assets/images/Thinking-Man-Transparent.jpeg'
import aboutBk from '../../../assets/images/aboutbk.jpg'
import { AiOutlineCheckCircle } from 'react-icons/ai'
const Home = () => {
    return (
        <div className="text-white w-full flex items-center justify-center flex-col overflow-y-auto ">
            <div className='w-full h-full flex items-center justify-center flex-row space-x-2 py-2' style={{ height: 'calc(100vh - 80px)' }}>
                <div className="w-full h-full flex items-start justify-center flex-col px-20 space-y-8">
                    <h1 className='text-5xl w-full  uppercase font-black text-start ' style={{ zIndex: 123121414 }}>
                        Aprenda viajar barato e não fique  <span style={{ color: '#f9004d' }}>preso a tarifas</span>  flexíveis!
                    </h1>
                    <button className='text-sm uppercase font-bold text-black  rounded-lg p-3' style={{ background: '#1DB954' }}>Acessar conteúdo.</button>

                </div>
                <div className="w-full h-full">
                    <img src={image} alt="" className='object-cover h-full w-full opacity-40' />
                </div >
            </div >
            <div className="w-full h-screen flex items-center justify-start  bg-neutral-900 flex-col ">
                <img src={aboutBk} alt="" className='absolute z-10 object-cover w-full h-full opacity-5' />
                <h1 className="text-2xl w-1/3  text-white font-black mt-24 text-center" style={{ zIndex: 9999 }}>ESSE TREINAMENTO FOI FEITO <span style={{ color: '#f9004d' }}>EXCLUSIVAMENTE</span> PARA VOCÊ QUE:</h1>
                <div className='p-10 flex items-center justify-center flex-row   w-4/5 h-80 z-50'>
                    <ul className="mt-20">
                        <li className='flex items-center justify-center flex-row space-x-2 py-2  text-lg'><AiOutlineCheckCircle style={{ color: '#f9004d' }} /><p>Teste ashfiuhfoiuahsofi haaihf oaishfoia hsfiahsfoahfo ahsfoaihsfaishfasoih</p></li>
                        <li className='flex items-center justify-center flex-row space-x-2 py-2  text-lg'><AiOutlineCheckCircle style={{ color: '#f9004d' }} /><p>Teste ashfiuhfoiuahsofi haaihf oaishfoia hsfiahsfoahfo ahsfoaihsfaishfasoih</p></li>
                        <li className='flex items-center justify-center flex-row space-x-2 py-2  text-lg'><AiOutlineCheckCircle style={{ color: '#f9004d' }} /><p>Teste ashfiuhfoiuahsofi haaihf oaishfoia hsfiahsfoahfo ahsfoaihsfaishfasoih</p></li>
                        <li className='flex items-center justify-center flex-row space-x-2 py-2  text-lg'><AiOutlineCheckCircle style={{ color: '#f9004d' }} /><p>Teste ashfiuhfoiuahsofi haaihf oaishfoia hsfiahsfoahfo ahsfoaihsfaishfasoih</p></li>
                        <li className='flex items-center justify-center flex-row space-x-2 py-2  text-lg'><AiOutlineCheckCircle style={{ color: '#f9004d' }} /><p>Teste ashfiuhfoiuahsofi haaihf oaishfoia hsfiahsfoahfo ahsfoaihsfaishfasoih</p></li>
                        <li className='flex items-center justify-center flex-row space-x-2 py-2  text-lg'><AiOutlineCheckCircle style={{ color: '#f9004d' }} /><p>Teste ashfiuhfoiuahsofi haaihf oaishfoia hsfiahsfoahfo ahsfoaihsfaishfasoih</p></li>

                    </ul>
                </div>
                <button className='text-sm uppercase mt-20 font-bold text-black  rounded-lg p-3' style={{ background: '#1DB954' }}>Acessar conteúdo.</button>
            </div>

        </div >
    );
}

export default Home