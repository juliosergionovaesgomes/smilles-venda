import React from 'react'
import image from "@assets/images/Thinking-Man-Transparent.jpeg";

const FirstComponent = () => {
    return (
        <div
            className="w-full h-full flex items-center justify-center flex-row lg:space-x-2 space-x-0"
            style={{ height: "calc(100vh - 80px)" }}
        >
            <div className="w-full max-h-full flex  items-start justify-center flex-col px-10 lg:px-20 space-y-8 absolute lg:static z-50 lg:z-0">
                <h1
                    className=" w-full  uppercase  text-start "
                    style={{ zIndex: 123121414 }}
                >
                    <h1 className="text-6xl  font-bold" >
                        O<span style={{ color: "#f9004d" }}> Código</span> <br /> das
                        Milhas
                    </h1>
                    <span className="text-2xl font-normal">
                        Aprenda viajar barato e não fique <br />
                        refém de tarifas flexíveis!
                    </span>
                </h1>
                <a href='#access'
                    className="text-sm uppercase   top-42 -bottom-32 font-bold text-black  rounded-lg p-4 hover:scale-90"
                    style={{ background: "#1ED760" }}
                >
                    Acessar conteúdo.
                </a>
            </div>
            <div className="w-full h-full  relative  lg:static ">
                <img
                    src={image}
                    alt=""
                    className="object-cover h-full w-full opacity-40"
                />
            </div>
        </div>
    )
}

export default FirstComponent