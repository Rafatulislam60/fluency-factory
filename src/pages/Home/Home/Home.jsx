import { Helmet } from "react-helmet-async";
import PopularClass from "../PopularClass/PopularClass";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div className="py-24 lg:py-36">
      <Helmet>
        <title>Fluency Factory | Home</title>
      </Helmet>
      <Slider></Slider>
      <PopularClass></PopularClass>
    </div>
  );
};

export default Home;
