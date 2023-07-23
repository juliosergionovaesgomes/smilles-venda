import React, { useEffect, useState } from 'react'
import image from "@assets/images/Thinking-Man-Transparent.jpeg";
import logo from "@assets/images/Logo_Prancheta 1.png";
import { Link } from 'react-scroll';

const FirstComponent = () => {
    const [dias, setDias] = useState<number>()
    const [horas, setHoras] = useState<number>()
    const [minutos, setMinutos] = useState<number>()
    const [segundos, setSegundos] = useState<number>()
    const [mes] = useState(11)
    const [diaDefault] = useState(31)
    const contador = () => {
        let now = new Date();
        let eventDate = new Date(now.getFullYear(), mes, diaDefault);

        let currentTime = now.getTime();
        let eventTime = eventDate.getTime();
        let remTime = eventTime - currentTime;


        let s = Math.floor(remTime / 1000)
        let m = Math.floor(s / 60)
        let h = Math.floor(m / 60)
        let d = Math.floor(h / 24)

        h %= 24
        m %= 60;
        s %= 60;

        h = h < 10 ? 0 + h : h;
        m = m < 10 ? 0 + m : m;
        s = s < 10 ? 0 + s : s;


        setHoras(h)
        setMinutos(m)
        setDias(d)
        setSegundos(s)
        setTimeout(contador, 1000);
    }


    useEffect(() => {
        contador()
    }, [])
    return (
        <div
            className="w-full p-0  h-screen max-h-sm flex-col flex items-center justify-between  "
        >
            <div className='w-full flex items-center justify-center' style={{ height: "calc(100% - 80px)" }}> teste </div>
            <div className='w-full bg-background bg-cover bg-primary h-40 flex items-center justify-center gap-3'>

                <div>
                    <p className='text-2xl'>
                        As vagas para a mentoria já estão se esgotando, aproveite e garanta a sua vaga até:
                    </p>
                </div>

                <div className='flex gap-3'>
                    <span className=" px-4 py-4 flex item-center bg-background justify-center flex-col text-center  -space-y-2">
                        <h6 className="sm:text-1xl text-base font-normal">Dias</h6>
                        <h1 className="sm:text-4xl  text-lg font-extrabold">{dias}</h1>
                    </span>
                    <span className=" px-4 py-4 flex item-center bg-background justify-center flex-col text-center  -space-y-2">
                        <h6 className="sm:text-1xl text-base font-normal">Horas</h6>
                        <h1 className="sm:text-4xl  text-lg font-extrabold">{horas}</h1>
                    </span>
                    <span className=" px-4 py-4 flex item-center bg-background justify-center flex-col text-center  -space-y-2">
                        <h6 className="sm:text-1xl text-base font-normal">Minutos</h6>
                        <h1 className="sm:text-4xl  text-lg font-extrabold">{minutos}</h1>
                    </span>
                    <span className=" px-4 py-4 flex item-center bg-background justify-center flex-col text-center  -space-y-2">
                        <h6 className="sm:text-1xl text-base font-normal">Segundos</h6>
                        <h1 className="sm:text-4xl  text-lg font-extrabold">{segundos}</h1>
                    </span>
                </div>

            </div>
        </div >
    )
}

export default FirstComponent