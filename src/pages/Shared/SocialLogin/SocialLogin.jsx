import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { saveUser } from "../../../api/auth";
import { AuthContext } from "../../../providers/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        // save user to db
        saveUser(result.user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="text-center mb-8">
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-circle btn-white cursor-pointer"
      >
        <FcGoogle size={32} />
      </button>
    </div>
  );
};

export default SocialLogin;
