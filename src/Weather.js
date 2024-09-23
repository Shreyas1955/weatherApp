import axios from "axios";
import { useState } from "react";
import p1 from "./cover.jpg";
import { useNavigate } from "react-router-dom";

export default function Weather() {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const hName = (event) => setName(event.target.value);

  const search = () => {
    nav(`/Main/${name}`); // Navigate to the Main page with the city name as a route parameter
  };

  return (
    <>
      <center>
        <div className="container">
          <img src={p1} alt="background" />
          <div className="content">
            <h1 className="title">Welcome to SkyCast</h1>
            <div className="search-box">
              <input
                type="text"
                placeholder="Enter city"
                onChange={hName}
                value={name}
              />
              <button onClick={search}>Search</button>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
