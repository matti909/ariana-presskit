import React from 'react'
import pic from '../../public/946d4b30-535d-44ec-8f57-01ab6b02df0c.webp'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
      <Image src={pic} alt="" width={859} height={859} />
    </div>
  )
}

export default Hero;
