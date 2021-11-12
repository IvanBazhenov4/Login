import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import {Box, Grid, Paper, styled, Button} from "@mui/material";


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
  const [checkBox, setCheckBox] = useState(true);
  const handleChange = () => {
    setCheckBox(!checkBox);
  };
  const [formValid, setFormValid] = useState(false);
  useEffect(() => {
    if (nameErroros || adressErroros || numberErroros||checkBox) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameErroros, adressErroros, numberErroros,checkBox]);

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
        <img src={logo} className="App-logo" alt="logo" />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={4}/>
          <Grid item xs={4}>
            <Item style={{width: 360}}><h2 style={{display: 'flex'}}>Регистрация</h2>
              <h5 style={{display: 'flex'}}>
              Уже есть аккаунт?
              <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Войти
              </a>
            </h5></Item>
          </Grid>
          <Grid item xs={4}/>
          <Grid item xs={4}/>
          <Grid item xs={4}>
            <Item style={{width: 360}}><h5 style={{display: 'flex'}}>Имя</h5>
              {nameHole && nameErroros && (
                  <div style={{ color: "red" }}>{nameErroros}</div>
              )}
              <input
                  style={{display: 'flex',width: 360}}
                  onChange={(e) => nameHandler(e)}
                  value={name}
                  onBlur={(e) => blurHandler(e)}
                  name="name"
                  type="text"
                  placeholder="Введите ваше имя..."
              /></Item>
          </Grid>
          <Grid item xs={4}/>
          <Grid item xs={4}/>
          <Grid item xs={4}>
            <Item style={{width: 360}}><h5 style={{display: 'flex'}}>Emailу</h5>
              {adressHole && adressErroros && (
                  <div style={{ color: "red" }}>{adressErroros}</div>
              )}
              <input
                  style={{display: 'flex',width: 360}}
                  onChange={(e) => adressHandler(e)}
                  value={adress}
                  onBlur={(e) => blurHandler(e)}
                  name="adress"
                  type="text"
                  placeholder="Введите ваш почтовый адресс..."
              /></Item>
          </Grid>
          <Grid item xs={4}/>
          <Grid item xs={4}/>
          <Grid item xs={4}>
            <Item style={{width: 360}}><h5 style={{display: 'flex'}}>Номер телефона</h5>
              {numberHole && numberErroros && (
                  <div style={{ color: "red" }}>{numberErroros}</div>
              )}
              <input
                  style={{display: 'flex',width: 360}}
                  onChange={(e) => numberHandler(e)}
                  value={number}
                  onBlur={(e) => blurHandler(e)}
                  name="number"
                  type="text"
                  placeholder="Введите ваш номер телефона..."
              /></Item>
          </Grid>
          <Grid item xs={4}/>
          <Grid item xs={4}/>
          <Grid item xs={4}>
            <Item style={{width: 360}}><h5 style={{display: 'flex'}}>Язык</h5>
              <select style={{display: 'flex',width: 360}}>
                <option value="value1">Русский</option>
                <option value="value1">American</option>
                <option value="value1">Español</option>
                <option value="value1">中国人</option>
              </select></Item>
          </Grid>
          <Grid item xs={4}/>
          <Grid item xs={4}/>
          <Grid item xs={4}>
            <Item style={{width: 360}}><h5 style={{display: 'flex'}}>
                <input
                    onChange={handleChange}
                type='checkbox'/>
                Условия
                <a
                    className="App-link"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  соглашения
                </a>
                пользователя
              </h5></Item>
          </Grid>
          <Grid item xs={4}/>
          <Grid item xs={4}/>
          <Grid item xs={4}>
            <Item style={{width: 360}}><Button disabled={!formValid} type="submit">
              <h4 style={{display: 'flex',width: 360}}>Регистрация</h4>
            </Button></Item>
          </Grid>
          <Grid item xs={4}/>


        </Grid>
      </Box>
    </div>

  );
}

export default App;
