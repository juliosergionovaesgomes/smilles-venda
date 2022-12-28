import React from 'react'
import { routes } from '../../../routes/route'
import { RouterProvider } from 'react-router-dom'
import { FixHeader } from '../header'
import backgroundURL from '../../../assets/images/Home.png'
const LayoutComponent = () => {
  return (
    <div className='w-full ' style={{ backgroundImage: `url(${backgroundURL})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundColor: ' #1a1a1a' }}>
      {/* header  */}
      <div className='w-full' style={{ height: '80px' }}>
        <FixHeader />
      </div>
      {/* content */}
      <RouterProvider router={routes} />
    </div>
  )
}

export default LayoutComponent