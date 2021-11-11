import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [number, setNumber] = useState("");
  const [nameHole, setNameHole] = useState(false);
  const [adressHole, setAdressHole] = useState(false);
  const [numberHole, setNumberHole] = useState(false);
  const [nameErroros, setNameErroros] = useState("Empty name!");
  const [adressErroros, setAdressErroros] = useState("Empty adress!");
  const [numberErroros, setNumberErroros] = useState("Empty number!");
  const [formValid, setFormValid] = useState(false);
  useEffect(() => {
    if (nameErroros || adressErroros || numberErroros) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameErroros, adressErroros, numberErroros]);

  const nameHandler = (e) => {
    setName(e.target.value);
    const rN =
      /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
    if (!rN.test(String(e.target.value).toLowerCase())) {
      setNameErroros("Invalid name");
    } else {
      setNameErroros("");
    }
  };

  const adressHandler = (e) => {
    setAdress(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setAdressErroros("Invalid adress");
    } else {
      setAdressErroros("");
    }
  };
  const numberHandler = (e) => {
    setNumber(e.target.value);
    const rn = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (!rn.test(String(e.target.value).toLowerCase())) {
      setNumberErroros("Invalid number");
    } else {
      setNumberErroros("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setNameHole(true);
        break;
      case "adress":
        setAdressHole(true);
        break;
      case "number":
        setNumberHole(true);
        break;
    }
  };
  return (
    <div className="App">
      <form style={{}}>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ width: 1260 }}>Регистрация</h1>
        <h5 style={{ width: 1250 }}>
          Уже есть аккаунт?
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Войти
          </a>
        </h5>
        <h5 style={{ width: 1200 }}>Имя</h5>
        {nameHole && nameErroros && (
          <div style={{ color: "red" }}>{nameErroros}</div>
        )}
        <input
          onChange={(e) => nameHandler(e)}
          value={name}
          onBlur={(e) => blurHandler(e)}
          name="name"
          type="text"
          placeholder="Enter your name..."
        />
        <h5 style={{ width: 1200, align: "left" }}>Email</h5>
        {adressHole && adressErroros && (
          <div style={{ color: "red" }}>{adressErroros}</div>
        )}
        <input
          onChange={(e) => adressHandler(e)}
          value={adress}
          onBlur={(e) => blurHandler(e)}
          name="adress"
          type="text"
          placeholder="Enter your adress..."
        />
        <h5 style={{ width: 1200 }}>Номер телефона</h5>
        {numberHole && numberErroros && (
          <div style={{ color: "red" }}>{numberErroros}</div>
        )}
        <input
          onChange={(e) => numberHandler(e)}
          value={number}
          onBlur={(e) => blurHandler(e)}
          name="number"
          type="text"
          placeholder="Enter your number..."
        />
        <h5 style={{ width: 1200 }}>Язык</h5>
        <select defaultValue="Language ">
          <option value="">Language</option>
          <option value="value1">Russian</option>
          <option value="value1">American</option>
          <option value="value1">Spanish</option>
          <option value="value1">Chinese</option>
        </select>
        <div style={{ display: "flex" }} >
          <input type="checkbox" />
          <h5>
            Accepted
            <a
              className="App-link"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              licence
            </a>
            user
          </h5>
        </div>
        <button disabled={!formValid} type="submit">
          Registration
        </button>
      </form>
    </div>
  );
}

export default App;
