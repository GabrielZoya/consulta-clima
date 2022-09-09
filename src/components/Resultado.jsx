import useClima from "../hooks/useClima";

const Resultado = () => {
  const { resultado } = useClima();

  const { name, main } = resultado;
  const { temp, temp_min, temp_max } = main;

  //pasaje a grados kelvin
  const kelvin = 273.15;
  return (
    <div className="contenedor clima">
      <h2>El Clima de {name} es:</h2>
      <p>
        Temperatura Actual: {parseInt(temp - kelvin)}
        <span>&#x2103;</span>
      </p>
      <div className="temp_min_max">
        <p>
          Mínima: {parseInt(temp_min - kelvin)}
          <span>&#x2103;</span>
        </p>
        <p>
          Máxima: {parseInt(temp_max - kelvin)}
          <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};

export default Resultado;
