
import React, { useState, useEffect } from "react"
import Logo from '@assets/images/Logo_Prancheta 1.png'
import { Link } from "react-scroll"
const FixHeaderComponent = () => {
    const [scrollPoY, setScrollPoY] = useState(false)
    const styleTop = `text-black text-md hover:text-white hover:scale-95 `
    const styleBottom = `text-white text-md hover:text-primary `

    useEffect(() => {
        window.addEventListener("scroll", () =>
            setScrollPoY(window.pageYOffset > 200)
        );

    }, [window.scrollY])

    return (
        <header id="header" className={`w-full h-20  sm:fixed md:fixed top-0  right-0 left-0  py-12  px-40  ${scrollPoY ? "bg-[#000000] transition-all duration-150" : "bg-primary/80"} z-50 flex  flex-col sm:flex-row items-center  justify-between space-x-3 `
        } >
            <Link to="/" className="">
                <img src={Logo} alt="" className="w-60" />
            </Link>
            <ul className={" font-semibold flex gap-x-8  z-50 "} >
                <li className="hover:scale-90 cursor-pointer">
                    <Link className={`${scrollPoY ? styleBottom : styleTop}`} activeClass="active" to="home" spy smooth duration={500}>
                        Home
                    </Link>
                </li>
                <li className="hover:scale-90 cursor-pointer" >
                    <Link className={`${scrollPoY ? styleBottom : styleTop}`} activeClass="active" to="public" spy smooth duration={500}>
                        Mentoria
                    </Link>
                </li>
                <li className="hover:scale-90 cursor-pointer" >
                    <Link className={`${scrollPoY ? styleBottom : styleTop}`} activeClass="active" to="about" spy smooth duration={500}>
                        Travel Pro
                    </Link>
                </li>
                <li className="hover:scale-90 cursor-pointer">
                    <Link className={`${scrollPoY ? styleBottom : styleTop}`} activeClass="active" to="content" spy smooth duration={500}>
                        conteúdo
                    </Link>
                </li>
                <li className="hover:scale-90 cursor-pointer" >
                    <Link className={`${scrollPoY ? styleBottom : styleTop}`} activeClass="active" to="contact" spy smooth duration={500}>
                        Contato
                    </Link>
                </li>
            </ul>

        </header >
    )

}

export default FixHeaderComponent