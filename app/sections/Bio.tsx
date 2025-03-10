import React from 'react'
import pic2 from '../../public/arianep2.jpg'
import Image from 'next/image'

const Bio = () => {
  return (
    <section className='grid grid-cols-2'>

      <div className='bg-transparent '>
        <Image src={pic2} height={300} width={300} alt='ariana' objectFit='containt' />
      </div>
      <div className='flex flex-col gap-5 py-10'>
        <h2 className='text-center text-4xl'>
          Biografia
        </h2>
        <p className='text-bold text-xl text-center py-4'>
          Ariana Amelia Sánchez, conocida artísticamente
          como Ariane, es una DJ emergente con una
          propuesta sonora en constante evolución. Nacida
          en Resistencia, Chaco, su vínculo con la música
          comenzó desde temprana edad, asistiendo a
          eventos y festivales que marcaron su pasión por
          la electrónica. Su fascinación por el género se
          consolidó en 2010, durante el auge del house y
          EDM, y en 2020 decidió dar el paso definitivo a la
          cabina, explorando el arte del DJing más allá de la

          pista de baile.
        </p>
      </div>
    </section>
  )
}

export default Bio;
