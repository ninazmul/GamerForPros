import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header/Header";

import Cart from "./Cart";
import DinoGame from "./DinoGame";

const Home = () => {
    const datas = useLoaderData();
    // console.log(data)

    return (
      <div>
        <Header></Header>
        <h1 className="text-3xl text-center text-pink-500 font-bold p-4">
          Popular Services:
        </h1>

        <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto">
          {datas.map((data) => (
            <Cart key={data.id} data={data}></Cart>
          ))}
        </div>
        <div>
          <h1 className="text-3xl text-center text-pink-500 font-bold p-4"></h1>
            </div>
            <div>
                <video src=""></video>
            </div>
        <div>
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