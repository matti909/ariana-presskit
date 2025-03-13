import Image from 'next/image'
import React from 'react'
import logo from '../../public/ariane-logo.png'

const Logo = () => {
  return (

    <Image src={logo} alt='ariane-logo' width={400} height={50} />
  )
}

export default Logo
