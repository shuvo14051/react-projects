import React from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  // Array of card data (Dictionary-like structure)
  const cardData = [
    {
      title: "Text Utils App",
      image:
        "https://github.com/ahamed14051/image-for-web/blob/master/text.png?raw=true",
      description: "",
      link: "/text-utils",
    },
    {
      title: "Todo app",
      image:
        "https://github.com/ahamed14051/image-for-web/blob/master/download.png?raw=true",
      description: "",
      link: "/todo",
    },
    {
      title: "CGPA Calculator",
      image:
        "https://github.com/ahamed14051/image-for-web/blob/master/cgpa.png?raw=true",
      description: "",
      link: "/cgpa",
    },
    {
      title: "Calculator",
      image:
        "https://github.com/ahamed14051/image-for-web/blob/master/calculator.png?raw=true",
      description: "",
      link: "/calculator",
    },
  ];

  return (
    <div className="container">
      <h1 className="text-center">Collections of app</h1>

      <div className="row g-4">
        {cardData.map((card, index) => (
          <div className="col-md-3" key={index}>
            <Card
              title={card.title}
              image={card.image}
              description={card.description}
              link={card.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
