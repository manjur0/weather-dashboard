import Logo from "../../assets/logo.svg";

const Logos = () => {
  return (
    <div>
      <a href="./index.html">
        <img className="h-9" src={Logo} alt="Weather App" />
      </a>
    </div>
  );
};

export default Logos;
