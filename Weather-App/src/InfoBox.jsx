import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import './InfoBox.css';


export default function InfoBox({ info }) {
  console.log(info);
    const img_url =
      "https://images.unsplash.com/photo-1543968996-ee822b8176ba?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="info-box">
      <div className="info-content">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img_url}
        title="City Weather"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Temperature: {info.temp}&deg;C
          <br /><br />
          feels like:  {info.feels_like}°C.
          <br /><br />
          Pressure: {info.pressure} hPa
          <br /><br />
          Humidity: {info.humidity}%
          <br /><br />
          The weather condition is {info.weather}.
          <br /><br />
          Min. temperature: {info.temp_min}°C and Max. is {info.temp_max}°C.
          <br />
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
  );
}
