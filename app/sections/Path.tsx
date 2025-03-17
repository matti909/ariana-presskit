import React from 'react'
import pic5 from '../../public/pic5.jpg'
import Image from 'next/image'
import style from './Path.module.scss'

const Path = () => {
  return (
    <section className={style.container}>
      <Image src={pic5} alt='pic4' width={300} height={500} className={style.pic} />
      <div>
        <p>
          En tan solo tres años de trayectoria, ha
          logrado posicionarse como una de las
          artistas más relevantes de la escena
          underground local, llevando su música a
          ciudades como Buenos Aires, Corrientes,
          Formosa, Sáenz Peña y Misiones. Su
          energía en cabina y su técnica depurada
          le han permitido compartir escenario con
          referentes como Bruno Brugnoli, Pluj,
          Franco Musachi, Another, WearsPrada,

          Franzizca y Anita B Queen.
        </p>


      </div>
    </section>
  )
}

export default Path
