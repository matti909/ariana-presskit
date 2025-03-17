import React from 'react'
import style from './Profile.module.scss'
import pic4 from '../../public/ariane4.jpg'
import Image from 'next/image'

const Profile = () => {
  return (
    <section className={style.contain}>
      <div>
        <p>
          Ariane ha desarrollado un enfoque
          sólido y versátil, perfeccionando su
          técnica tanto de forma autodidacta
          como a través de su formación en
          Levels Academy. Además, su
          compromiso con la escena
          underground la llevó a fundar Kill
          Sync, una productora que impulsa
          eventos de techno, hard techno y
          psytrance, consolidando su papel
          como una figura activa en la
          expansión del movimiento
          electrónico en su ciudad.
        </p>
      </div>
      <div>
        <Image src={pic4} alt='picture4' width={300} height={500} className={style.aspect} />
      </div>
    </section>
  )
}

export default Profile
