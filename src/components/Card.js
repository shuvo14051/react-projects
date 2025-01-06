import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Card = ({ title, image, description, link }) => {
  return (
    <div className="card container" style={{ width: "18rem" }}>
      {/* Image with Fixed Size and Consistent Sizing */}
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{
          height: "150px",
          objectFit: "cover",
          padding: "10px",
        }}
      />

      {/* Card Body with Title, Description, and Link */}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} className="btn btn-primary">
          Try It Out
        </a>
      </div>
    </div>
  );
};

export default Card;
