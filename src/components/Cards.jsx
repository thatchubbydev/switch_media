import React from "react";
import blog_1 from "../assets/blog_1.jpg";
import blog_2 from "../assets/blog_2.jpg";
import blog_3 from "../assets/blog_3.jpg";

const Cards = () => {
  const cardList = [
    {
      id: 1,
      head: "creative",
      desc: "Design can speak the in tongue of art force of commerce",
      date: "12 May 2020",
      imgSrc: blog_1,
    },
    {
      id: 2,
      head: "concept",
      desc: "Simplicity is process the obvious and adding meaningful",
      date: "22 June 2020",
      imgSrc: blog_2,
    },
    {
      id: 3,
      head: "modern",
      desc: "Everything know about midi skirts and how to wear fashion",
      date: "05 Aug 2020",
      imgSrc: blog_3,
    },
  ];
  return (
    <div className="bg-[#f7f7f7]">
      {/* mx auto container */}
      <div className="mx-auto">
        {/* header div */}
        <div className="flex-col flex md:flex-row text-center md:justify-between  p-12 md:p-24">
          <div className="">
            <h4 className=" text-5xl font-semibold  text-black ">
              Latest stories
            </h4>
          </div>
          <div className="pt-4 md:pt-0">
            <a
              className="border-b-2  border-black w-fittext-black  uppercase font-semibold text-sm"
              href="http://"
            >
              All stories
            </a>
          </div>
        </div>
        {/* card div */}
        <div className=" flex flex-col md:flex-row  items-center ">
          {cardList.map((item) => (
            <div
              className="mx-6 md:ml-24 bg-white rounded-md w-1/2 mb-12 cursor-pointer"
              key={item.id}
            >
              {/* container */}
              <div className=" w-full  h-full relative shadow-2xl ">
                <div className="">
                  {/* overlay */}
                  <div
                    style={{
                      width: "100%",
                      backgroundImage: `url(${item.imgSrc})`,
                    }}
                    className="w-full h-full bg-cover absolute block opacity-0 hover:opacity-100 text-white rounded-md ease-in duration-500"
                  >
                    <div className="">
                      {/* creative */}
                      <div className="p-6">
                        <p className="border w-fit py-1 px-3 uppercase text-xs text-white bg-black border-black">
                          {item.head}
                        </p>
                      </div>
                      {/* continue reading */}
                      <div className="pl-6 pt-12">
                        <p className="text-sm">{item.date}</p>
                      </div>
                      {/* description */}
                      <div className="pl-6 pt-2">
                        <p className="w-full font-semibold text-xl">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* creative */}
                  <div className="p-6">
                    <p className="border w-fit py-1 px-3 uppercase text-xs text-[#828282] border-[#828282]">
                      {item.head}
                    </p>
                  </div>
                  {/* description */}
                  <div className="p-6 w-full font-semibold text-xl">
                    <p>{item.desc}</p>
                  </div>
                  {/* continue reading */}
                  <div className="p-6">
                    <p className="uppercase text-xs font-semibold border-b-2 w-fit text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                      continue reading
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
