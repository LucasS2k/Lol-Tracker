import React, { useState } from "react";
import axios from "axios";

const API_KEY = "RGAPI-e0ebbbdf-dbb0-4436-a47e-9daa92702852";

function SummonerSearch() {
  const [summonerName, setSummonerName] = useState("");
  const [summonerData, setSummonerData] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = `https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`;
      const response = await axios.get(apiUrl);
      setSummonerData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Tracker</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Ingrese nombre de invocador"
          value={summonerName}
          onChange={(e) => setSummonerName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {summonerData && (
        <div>
          <h2>Información</h2>
          <p>Nombre: {summonerData.name}</p>
          <p>Nivel: {summonerData.summonerLevel}</p>
          <p>Icono: {summonerData.profileIconId}</p>
        </div>
      )}
    </div>
  );
}

export default SummonerSearch;
