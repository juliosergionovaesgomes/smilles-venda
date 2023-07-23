import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Logo from '@assets/images/Logo_Prancheta 1.png'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
export default function MyModal() {
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="absolute top-0 right-0  z-10  " onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed left-0 right-0 inset-0  w-full" />
                    </Transition.Child>

                    <div className="fixed right-0 inset-0 overflow-y-auto w-full  ">
                        <div className="flex w-full h-full  items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-2/4 h-2/3 flex bg-background   p-0 transform overflow-hidden rounded-2xl border  border-primary z-90 text-left align-middle shadow-lg  shadow-primary transition-all">
                                    <div className='w-full flex items-center justify-center bg-background bg-[#000] rounded-md'>
                                        <img src={Logo} alt="" className='w-80' />
                                    </div>
                                    <div className='w-full flex items-center flex-col  bg-primary rounded-sm '>
                                        <div className='w-full flex items-center justify-end p-6'>
                                            <button className='focus:outline-none focus:border-none' onClick={() => setIsOpen(false)}>
                                                <AiOutlineClose className='text-3xl text-white hover:scale-75' />
                                            </button>
                                        </div>

                                        <div className=' w-full h-full px-8  text-white  flex flex-col items-center justify-center space-y-8'>
                                            <h1></h1>
                                            <p className='text-start leading-5 font-medium text-md'>
                                                A Travel Pro Mentoria com Acessos Limitados é uma oportunidade valiosa para aqueles que desejam se destacar
                                                no setor de viagens e turismo, permitindo que eles obtenham insights valiosos, orientação personalizada e aprimoramento contínuo de suas habilidades.
                                            </p>

                                            <Link activeClass="active" to="plans" spy smooth duration={500} className='w-full'>
                                                <button
                                                    className="text-sm uppercase  top-42 -bottom-32 font-bold text-white bg-primary border border-white  rounded-lg p-4 hover:scale-90"
                                                >
                                                    Acessar conteúdo.
                                                </button>
                                            </Link>
                                        </div>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
