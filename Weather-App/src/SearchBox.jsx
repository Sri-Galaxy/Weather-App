import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import './SearchBox.css';
import { useState } from "react";

export default function SearchBox() {
    let [cityName, setCityName] = useState("");

    function handleChange(event) {
        setCityName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(cityName);
        setCityName("");
    }


  return (
    <div className="search-box">
      <h3>Search for weather!</h3>
      <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" value={cityName} onChange={handleChange} required />
        <br /><br />
        <Button variant="contained" type="submit">Search</Button>
      </form>
    </div>
  );
}
