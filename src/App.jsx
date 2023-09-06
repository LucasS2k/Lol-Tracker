import "./App.css";
import { GlobalStyles } from "./styles/GlobalStyles";
import Search from "./components/Search";
import { LA2 } from "./constants/regionURLs";
import { API_KEY } from "./constants/apiKey";
import React, { useState } from "react";
import axios from "axios";
import SummonerSearch from "./components/Search";

function App() {
  return (
    <>
      <SummonerSearch />
    </>
  );
}

export default App;
