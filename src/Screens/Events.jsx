import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import InstagramIcon from "@mui/icons-material/Instagram";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LinkIcon from "@mui/icons-material/Link";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AddIcon from "@mui/icons-material/Add";
import FacebookIcon from "@mui/icons-material/Facebook";
import Button from "@mui/material/Button";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useEffect, useState } from "react";
import axios from "axios";
import "./../assets/css/icon.css";
import "./../assets/css/index.css";

import Swal from "sweetalert2";

import ella from "./../assets/images/ella.jpg";

const Events = () => {
  const [ads, setAds] = useState([]);
  const [image_1, setImage_1] = useState("");

  async function getAds() {
    axios
      .get(
        `http://localhost:5000/api/v1/destinationAds/${localStorage.getItem(
          "dealersID"
        )}`
      )
      .then((res) => {
        setAds(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getAds();
  }, []);

  const onClick = () => {
    if (localStorage.getItem("services") === "Destination") {
      window.location.replace("http://localhost:3000/add/destinations");
    } else if (localStorage.getItem("services") === "Photography") {
      window.location.replace("http://localhost:3000/add/photographers");
    } else if (localStorage.getItem("services") === "Decoration") {
      window.location.replace("http://localhost:3000/add/decorators");
    } else if (localStorage.getItem("services") === "Catering") {
      window.location.replace("http://localhost:3000/add/caterers");
    } else if (localStorage.getItem("services") === "Makeup") {
      window.location.replace("http://localhost:3000/add/beauticians");
    } else if (localStorage.getItem("services") === "Music Band") {
      window.location.replace("http://localhost:3000/add/musicbands");
    }
  };

  return (
    <div>
      <div className="destination__button">
        <Button
          variant="contained"
          color="success"
          onClick={onClick}
          endIcon={<AddIcon />}
        >
          Add
        </Button>
      </div>
      <div className="row">
        {ads.map((ad) => (
          <div className="col-4">
            <Card sx={{ maxWidth: 345, minHeight: 420, marginBottom: 5 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    N
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={ad.destinations}
                subheader="August 25,2022"
              />
              <CardMedia
                component="img"
                height="194"
                image={ad.image1}
                alt="Destination Wedding Hall"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Newly renovated and modern, this hotel is a 5-star hotel with
                  a full Air conditioned wedding hall.
                </Typography>
              </CardContent>
              <CardActions className="content__format">
                <div className="bottom__content">
                  <div className="text__content">
                    <MonetizationOnIcon />
                    {ad.amount} Rs
                  </div>
                  <div className="text__content">
                    <PeopleAltIcon /> {ad.maxGuest}
                  </div>
                </div>
                <div className="bottom__content">
                  <IconButton aria-label="link">
                    <a className="link__button" href={ad.websiteurl}>
                      <LinkIcon fontSize="medium" />
                    </a>
                  </IconButton>
                  <IconButton aria-label="link">
                    <a className="link__button" href={ad.instagram}>
                      <InstagramIcon fontSize="medium" />
                    </a>
                  </IconButton>
                  <IconButton aria-label="link">
                    <a className="link__button" href={ad.instagram}>
                      <FacebookIcon fontSize="medium" />
                    </a>
                  </IconButton>
                </div>
              </CardActions>
              <div className="button__container">
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    axios

                      .delete(
                        `http://localhost:5000/api/v1/destinationAds/${ad.id}`
                      )
                      .then((res) => {
                        console.log(res.data);
                        Swal.fire({
                          position: "center",
                          icon: "success",
                          title: "Deleted Successfully",
                          showConfirmButton: false,
                          timer: 1500,
                        });
                        window.location.reload();
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                >
                  Delete
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
