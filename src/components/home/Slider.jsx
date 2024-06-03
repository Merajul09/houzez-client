import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {

    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    type: 'progressbar',
                    clickable: true,
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper rounded-xl pt-4"
            >
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799631.jpg?t=st=1717414100~exp=1717417700~hmac=879feddd465c5952c9508e3dea03ffcec4f453852f85aa166a9fac8142e378b5&w=826" alt="home" />
                </SwiperSlide>
                <SwiperSlide>  <img src="https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799627.jpg?t=st=1717414188~exp=1717417788~hmac=a30f9841615ff6bae8262a01dc6d37eb06fbeabc9f79ad025df79964d911d5bd&w=826" alt="home" />
                </SwiperSlide>
                <SwiperSlide>  <img src="https://source.unsplash.com/random?home/3" alt="home" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;