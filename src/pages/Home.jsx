import Reviews from "../components/Reviews";
import Slider from "../components/home/Slider";
import AllProperties from "./AllProperties";

const Home = () => {
    return (
        <div className="pt-24">
            <Slider></Slider>
            <AllProperties></AllProperties>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;