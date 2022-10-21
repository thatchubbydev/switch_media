import React from "react";
import background from "../assets/background.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p_1 from "../assets/avtar42.jpg";
import p_2 from "../assets/avtar44.jpg";
import p_3 from "../assets/avtar45.jpg";
import Slider from "react-slick";
import logo_1 from "../assets/logo_1.png";
import logo_2 from "../assets/logo_2.png";
import logo_3 from "../assets/logo_3.png";
import logo_4 from "../assets/logo_4.png";

const Portfolio = () => {
  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
  };
  const testimonials = [
    {
      imageSrc: p_1,
      description:
        "We see our customers as invited guests to a party and we are the hosts. Its our job every day to make every important aspect of the customer a better.",
      name: "Alexander harvard",
      position: "Creative director",
      id: 1,
    },
    {
      imageSrc: p_2,
      description:
        "Awesome theme and outstanding support. One of the best themes available out there. Design, coding, functionalities and possibilities are great!",
      name: "Shoko mugikura",
      position: "Graphic designer",
      id: 2,
    },
    {
      imageSrc: p_3,
      description:
        "Are you looking for a website that's ready now, and you don’t know coding, stop browsing themeforest because nothing better. Loyal to themezaa.",
      name: "Mackangy rose",
      position: "Creative director",
      id: 3,
    },
  ];

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="text-white py-24 mt-24"
    >
      {/* carousel container */}
      <div className="content mx-auto w-3/4 md:w-1/2 text-center">
        <Slider {...sliderSettings}>
          {testimonials.map((item) => (
            <div key={item.id} className=" space-y-6">
              {/* image div */}
              <div>
                <img
                  className=" flex mx-auto rounded-full"
                  src={item.imageSrc}
                  alt="profile"
                  width={100}
                  height={100}
                />
              </div>
              {/* description container */}
              <div className="flex mx-auto w-full md:w-3/4">
                <p className="text-xl text-[#828282]">{item.description}</p>
              </div>
              {/* name container */}
              <div className="uppercase space-y-1">
                <p className="text-[#e6994e]">{item.name}</p>
                <p className="text-[#d3d2d2] text-xs">{item.position}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* grid container */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4 items-center w-1/2 mx-auto md:w-3/4 md:pl-16">
        {/* grid items */}
        <div className="">
          <img src={logo_1} alt="magento" />
        </div>
        <div>
          <img src={logo_2} alt="magento" />
        </div>
        <div>
          <img src={logo_3} alt="magento" />
        </div>
        <div>
          <img src={logo_4} alt="magento" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
