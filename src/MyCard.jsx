// En el archivo MyCard.jsx
import React from 'react';

const MyCard = ({ image, name, description, breedButton }) => {
  return (
    <div className="col">
      <div className="card">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <button className="btn btn-primary">{breedButton}</button>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
