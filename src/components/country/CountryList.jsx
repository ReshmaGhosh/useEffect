import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryItem from "./CountryItem";
import { v4 as uuidv4 } from "uuid";

export default function CountryList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://restcountries.com/v3.1/all";
  async function getData() {
    const response = await axios.get(url);
    const data = await response.data;
    setIsLoading(false);
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <p>is Loading...</p>;
  } else {
    return (
      <div className="body">
        <h1>Country List</h1>

        <div className="mapList">
          {data.map((country, index) => (
            <CountryItem key={uuidv4()} country={country} index={index} />
          ))}
        </div>
      </div>
    );
  }
}
