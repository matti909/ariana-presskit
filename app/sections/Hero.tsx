import Logo from "../components/Logo";
import style from "./Hero.module.scss";

import Image from 'next/image'
import pic3 from '../../public/arianap3.jpg'

const Hero = () => {
  return <section className={style.pic}>
    <Image src={pic3} alt='ariane-3' fill objectFit='cover' className={style.aspect} />
    <div>

      <Logo />
    </div>
  </section>;
};

export default Hero;
