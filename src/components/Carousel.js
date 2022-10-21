import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p_1 from "../assets/avtar42.jpg";
import p_2 from "../assets/avtar43.jpg";
import p_3 from "../assets/avtar44.jpg";
import React from "react";
import background from "../assets/background.jpg";

export default Carousel = () => {
  const testimonials = [
    {
      imageSrc: { p_1 },
      description:
        "We see our customers as invited guests to a party and we are the hosts. Its our job every day to make every important aspect of the customer a better.",
      name: "Alexander harvard",
      position: "Creative director",
      id: 1,
    },
    {
      imageSrc: { p_2 },
      description:
        "Awesome theme and outstanding support. One of the best themes available out there. Design, coding, functionalities and possibilities are great!",
      name: "Shoko mugikura",
      position: "Graphic designer",
      id: 2,
    },
    {
      imageSrc: { p_3 },
      description:
        "Are you looking for a website that's ready now, and you don’t know coding, stop browsing themeforest because nothing better. Loyal to themezaa.",
      name: "Mackangy rose",
      position: "Creative director",
      id: 3,
    },
  ];
  return <div className="content"></div>;
};
