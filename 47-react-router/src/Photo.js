import React from "react";

const photos = {
  "Rammstein":
    "https://media.gettyimages.com/photos/richard-z-kruspe-from-rammstein-performs-live-on-stage-at-ahoy-on-picture-id94463758?s=2048x2048",
  "The Flying Lizards":
    "https://i.scdn.co/image/887a4099662ff3f5bfd5c2e5b9e60f106d6120c9",
  "Lin-Manuel Miranda":
    "https://m.media-amazon.com/images/M/MV5BMTU0MDM2Mzg0OV5BMl5BanBnXkFtZTgwMjA1MDE2MDI@._V1_.jpg"
};

const Photo = props => {
    return (
      <img
        alt="The band in question"
        className={props.band}
        src={photos[props.band]}
      />
    );
};

export default Photo