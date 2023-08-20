import React from 'react'
import { Outlet } from 'react-router-dom'
import 'assets/images/kyc/images-kycM.jpg'
import './_index.scss'

const LayoutKYCComponent = () => {
  return (
    <div className="bg-cover bg-left layoutM_heigh dark">
        <div className='backdrop-blur-sm h-full w-full dark:bg-black'>
        <Outlet />
      </div>
    </div>
  )
}

export default LayoutKYCComponent