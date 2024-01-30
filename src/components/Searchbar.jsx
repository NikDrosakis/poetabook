import { React, useState } from "react";
import { TextField } from '@mui/material';
import List from "./List"
import styled from 'styled-components';
import "../App.css";
const Maindiv = styled.div`{
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
}`;
function Searchbar() {
  return (
    <Maindiv>
      <h1 style={{margin:"10px",color:"rgb(1, 1, 59)"}}>Search</h1>
      <div style={{width:"30%"}}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List />
    </Maindiv>
  );
}

export default Searchbar;