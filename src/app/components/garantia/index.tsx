import React from 'react'
import selo from "@assets/images/selo.png";

const GarantiaComponent = () => {
  return (

    <div className="w-full  min-h-screen py-4 flex flex-col lg:flex-row  lg:flex-nowrap justify-center items-center">

      <img src={selo} alt="Selo de Garantia" className="w-80 h-80 animate-pulse" />
      <div className=" px-12 lg:px-0 lg:w-2/5 space-y-4">
        <h4 className="text-3xl lg:text-4xl font-bold ">Você conta com a garantia <br /> incondicional de 7 dias</h4>
        <p className="text-justify text-sm lg:text-md leading-5">Se por qualquer motivo você não gostar, achar que não é para você,
          <b className="text-md"> NÃO TEM PROBLEMA!</b> Basta solicitar o reembolso e seu dinheiro vai ser
          devolvido integralmente.
        </p>
        <p className="text-justify text-sm lg:text-mdleading-5">
          Agora só depende de você, ou você entra e aprende ou vai continuar assistindo
          na plateia.
        </p>
        <p className="text-sm lg:text-md leading-1 "> Te espero na mina.</p>
      </div>
    </div>
  )
}

export default GarantiaComponent