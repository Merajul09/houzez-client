import Reviews from "../components/Reviews";
import AdvertiseCard from "../components/cards/AdvertiseCard";
import Faq from "../components/home/Faq";
import Offer from "../components/home/Offer";
import Slider from "../components/home/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <AdvertiseCard></AdvertiseCard>
      <Reviews></Reviews>
      <Offer></Offer>
      <Faq></Faq>
    </div>
  );
};

export default Home;
