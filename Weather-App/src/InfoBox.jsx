import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import GrainIcon from "@mui/icons-material/Grain";
import FoggyIcon from "@mui/icons-material/Foggy";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  console.log(info);
  const mist_img_url =
    "https://images.unsplash.com/photo-1543968996-ee822b8176ba?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const hot_img_url =
    "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?q=80&w=379&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const cold_img_url =
    "https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?q=80&w=1394&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const rain_img_url =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="info-box">
      <div className="info-content">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? rain_img_url
                : info.temp > 20
                ? hot_img_url
                : info.temp < 15
                ? cold_img_url
                : mist_img_url
            }
            title="City Weather"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.name}{" "}
              {info.humidity > 80 ? (
                <GrainIcon />
              ) : info.temp > 20 ? (
                <WbSunnyIcon />
              ) : info.temp < 15 ? (
                <AcUnitIcon />
              ) : (
                <FoggyIcon />
              )}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Temperature: {info.temp}&deg;C
              <br />
              <br />
              feels like: {info.feels_like}°C.
              <br />
              <br />
              Pressure: {info.pressure} hPa
              <br />
              <br />
              Humidity: {info.humidity}%
              <br />
              <br />
              The weather condition is {info.weather}.
              <br />
              <br />
              Min. temperature: {info.temp_min}°C and Max. is {info.temp_max}°C.
              <br />
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
