import styles from "./Hero.module.sass";

export const Hero = () => {
  const { Hero } = styles;
  return (
    <section className={Hero}>
      <h1>Future World</h1>
      <h2>Empowering Your Tomorrow, Today!</h2>
    </section>
  );
};
