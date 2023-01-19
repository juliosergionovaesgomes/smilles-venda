import React, { useRef } from 'react'
import mokup from "@assets/images/mokup.png";

const PlansComponent = ({ }) => {

    return (
        <div id="access" className="w-full h-screen  my-20 flex  flex-col text-white items-center justify-center px-10  text-center">
            <img src={mokup} alt="" className="object-contain w-96 " />
            <div className="flex w-full items-center justify-center flex-col space-y-4">
                <h1 className="text-3xl lg:text-4xl  font-bold leading-10 text-center" >Tudo isso de <span className='line-through' style={{ color: "#f9004d" }}>R$297,00</span></h1>
                <div>
                    <span className="text-lg space-x-1">
                        <span className="font-bold text-md">por 12<small>X</small> de</span>

                        <span className="font-bold text-3xl" style={{ color: "#1ED760" }}>R$9,74</span>
                        <span className="font-bold">no cartão</span></span>
                    <br />
                    <span className="text-lg font-bold">ou <span>R$97,00</span> à vista</span>
                </div>
                <a href='https://pay.kiwify.com.br/TdpNeKa' target={"_blank"}
                    className="z-50  text-sm uppercase font-bold text-black  rounded-lg p-4 hover:scale-90"
                    style={{ background: "#1ED760" }}
                >
                    Acessar conteúdo.
                </a>
                <p className="w-2/2 text-center text-base  pb-10 lg:text-lg">Você terá acesso vitalício ao curso podendo assistir aonde<br /> e quando quiser com suporte a todas as aulas. </p>
            </div>
        </div>)
}

export default PlansComponent
// 