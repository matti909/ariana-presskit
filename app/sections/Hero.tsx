import Logo from "../components/Logo";
import style from "./Hero.module.scss";

const Hero = () => {
  return <section className={style.pic}>
    <div>
      <Logo />
    </div>
  </section>;
};

export default Hero;
