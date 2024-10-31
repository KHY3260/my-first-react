import { useState } from "react";
import MedalList from "./components/MedalList";
import "./app.css";
import MedalForm from "./components/MedalForm";

function App() {
  const [countries, setCountries] = useState([]);
  const [medals, setMedals] = useState({
    country: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMedals({
      ...medals,
      [name]: name === "country" ? value : Number(value),
    });
  };

  const addCountry = (event) => {
    event.preventDefault();
    setCountries([...countries, medals]);
    resetFields();
  };

  const updateCountry = (event) => {
    event.preventDefault();
    const updatedCountries = countries.map((item) =>
      item.country === medals.country ? medals : item
    );
    setCountries(updatedCountries);
    resetFields();
  };

  const resetFields = () => {
    setMedals({ country: "", gold: 0, silver: 0, bronze: 0 });
  };

  const deleteCountry = (countryName) => {
    setCountries(countries.filter((item) => item.country !== countryName));
  };

  return (
    <div className="Olympic-Container">
      <h1>2024 파리 올림픽</h1>
      <MedalForm
        medals={medals}
        handleInputChange={handleInputChange}
        addCountry={addCountry}
        updateCountry={updateCountry}
      />
      <MedalList countries={countries} deleteCountry={deleteCountry} />
    </div>
  );
}

export default App;
