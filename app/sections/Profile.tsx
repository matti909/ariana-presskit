import React from 'react'
import pic3 from '../../public/arianap3.jpg'
import Image from 'next/image'
import style from './Profile.module.scss'

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
        <Image src={pic3} alt='ariane-3' width={400} height={500} objectFit='cover' />
      </div>
    </section>
  )
}

export default Profile
