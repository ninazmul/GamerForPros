
import { useParams } from "react-router-dom";
import data from "../../public/data.json"; // 
const CartDetails = () => {
  const { id } = useParams();
  const service = data.find((item) => item.id === id);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl text-center text-pink-500 font-bold p-4">
        Game Details:
      </h1>

      <div className="text-start">
              <h1 className="text-4xl font-bold">{service.title}</h1>
              <img className="h-[500px] w-full py-4" src={service.image} alt="" />
              <p className="text-pink-500 text-2xl font-bold">{ service.price}</p>
              <p>{ service.description}</p>
      </div>
    </div>
  );
};

export default CartDetails;
