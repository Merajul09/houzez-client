import Reviews from "../components/Reviews";
import Offer from "../components/home/Offer";
import Slider from "../components/home/Slider";
import AllProperties from "./AllProperties";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <AllProperties></AllProperties>
      <Reviews></Reviews>
      <Offer></Offer>
    </div>
  );
};

export default Home;
