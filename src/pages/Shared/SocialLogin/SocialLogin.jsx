import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
  return (
    <div className='text-center mb-8'>
      <button
        // onClick={handleGoogleSignIn}
        className="btn btn-circle btn-white cursor-pointer"
      >
        <FcGoogle size={32} />
      </button>
    </div>
  );
};

export default SocialLogin;
