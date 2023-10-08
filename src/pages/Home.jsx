import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header/Header";
import Footer from "./footer/Footer";
import Cart from "./Cart";

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
        <Footer></Footer>
      </div>
    );
};

export default Home;