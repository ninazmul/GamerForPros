import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header/Header";

import Cart from "./Cart";
import DinoGame from "./DinoGame";
import { AiFillPlayCircle } from "react-icons/ai";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Home = () => {
    const datas = useLoaderData();
    // console.log(data)
    const youtubeGamingVideosLink = "https://www.youtube.com/search?q=gaming+videos&sort=relevance&view=grid";

    useEffect(() => {
        Aos.init({duration: 2000});
    },[])

    return (
      <div>
        <Header></Header>
        <h1 className="text-3xl text-center text-pink-500 font-bold p-4">
          Popular Services:
        </h1>

        <div
          className="grid grid-cols-3 gap-4 max-w-6xl mx-auto"
          data-aos="fade-right"
        >
          {datas.map((data) => (
            <Cart key={data.id} data={data}></Cart>
          ))}
        </div>
        <div>
          <h1 className="text-3xl text-center text-pink-500 font-bold p-4"></h1>
        </div>
        <div
          className="flex flex-col justify-center items-center"
          data-aos="fade-left"
        >
          <h1 className="text-3xl text-center text-pink-500 font-bold p-4">
            Watch Gaming videos on YouTube:
            <a href={youtubeGamingVideosLink}>
              <span>
                <div className="relative ">
                  <AiFillPlayCircle className="absolute top-36 right-52 text-8xl"></AiFillPlayCircle>
                  <h1 className="text-4xl absolute top-60 left-32 text-white font-bold ">
                    Watch Now!
                  </h1>
                  <img
                    className="text-center flex justify-center w-96 ml-8"
                    src="https://i.ibb.co/dK4nGDN/3839218-removebg-preview.png"
                    alt=""
                  />
                </div>
              </span>
            </a>
          </h1>
        </div>
        <div data-aos="fade-right">
          <h1 className="text-3xl text-center text-pink-500 font-bold p-4">
            Play Now:
          </h1>
          <p className="text-center">press 'space' to play and jump. Enjoy!</p>
          <DinoGame />
          <p className="text-center">Reload the Window to stop the game!</p>
        </div>
      </div>
    );
};

export default Home;