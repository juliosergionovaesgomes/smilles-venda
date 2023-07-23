import React from 'react'
import { routes } from '@src/routes/route'
import { RouterProvider } from 'react-router-dom'
import { FixHeader } from '../header'
import backgroundURL from '@assets/images/Home.png'
import InfoModel from '../modal/InfoModal'
const LayoutComponent = () => {
  return (
    <div className='w-full  bg-background bg-[#000] bg-cover bg-no-repeat' >
      {/* header  */}
      s      {/* content */}
      <RouterProvider router={routes} />

    </div>
  )
}

export default LayoutComponent