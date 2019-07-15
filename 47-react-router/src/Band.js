import React from "react";
import Photo from './Photo'

const Band = ({match, message}) => {
  return (
    <div>
      <h3>Requested Band: {match.params.band}</h3>
      <p>{message} {match.params.band}</p>
      <Photo band={match.params.band}/>
    </div>
  );
};

export default Band;
