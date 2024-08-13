import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Freebook() {
  const apiUrl = process.env.REACT_APP_API_URL;

  const [book, setBook] = useState([]);
  useEffect(() => {
      const getBooks = async () => {
          try {
              const res = await axios.get(`${apiUrl}/books`);
              const data = res.data.filter((data) => data.price === 0.0);
              // console.log(data);
              setBook(res.data);
          } catch (error) {
              console.log(error);
          }
      };
      getBooks();
      
  }, []);

  //   console.log(filterData);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container pt-8 md:pt-6 mx-auto md:px-20 px-4 bg-darkTheme space-y-2 dark:bg-white">
        <h1 className="font-semibold text-xl text-white dark:text-black">Free offered Books</h1>
        <p className="text-white dark:text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nemo
          iste sapiente magnam explicabo. Blanditiis, rem natus hic dicta
          necessitatibus dolor sit pariatur qui repellat inventore sint
          recusandae molestiae omnis.
        </p>
        <div>
        <Slider {...settings}>
          {book.map((item)=>(
            <Cards item={item} key={item.id}/>
          ))}
        </Slider>
      </div>
      </div>
    </>
  );
}

export default Freebook;
