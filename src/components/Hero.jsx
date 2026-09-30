import "../styles/Hero.css";

function Hero(props) {
  return (
    <section className="hero">
      <h1>{props.title}</h1>

      <p>{props.description}</p>

      <button id = "B1">{props.buttonText}</button>

      <button id = "B2"> {props.buttonText2}</button>
    </section>
  );
}

export default Hero;