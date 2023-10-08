import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
      <div className="max-w-6xl mx-auto text-2xl">
        <h1 className="text-3xl text-center text-pink-500 font-bold p-4">
          User Profile:
        </h1>
        <div className="flex item-center gap-4 justify-center">
          <div>
            <img className="rounded-full w-40" src={user.photoURL} alt="" />
          </div>
          <div className="p-4">
            <h1>Name: {user.displayName}</h1>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phoneNumber}</p>
                    <p>Access Token: {user.accessToken.slice(0, 20)}</p>
                    
          </div>
        </div>
      </div>
    );
};

export default Profile;