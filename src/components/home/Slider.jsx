import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Slider = () => {
  const properties = [
    {
      propertyName: "Sunny Villa",
      image:
        "https://thumbnails.production.thenounproject.com/gA9eZOvsBYSHrMumgrslmRGoBto=/fit-in/1000x1000/photos.production.thenounproject.com/photos/BCBA88B6-5B41-4B50-A786-E60CAA0ECDA3.jpg",
      shortDescription:
        "A beautiful 4-bedroom villa with a private pool and garden, located in the heart of the city.",
    },
    {
      propertyName: "Cozy Apartment",
      image:
        "https://img.freepik.com/free-photo/cozy-lively-home-interior-design_23-2151119031.jpg?t=st=1733984144~exp=1733987744~hmac=b572174a4e18fc13537c43ffad2058fe6e7a4d1c2d26d9b3ed3bda6370559ff8&w=740",
      shortDescription:
        "A modern 2-bedroom apartment with stunning city views and easy access to public transport.",
    },
    {
      propertyName: "Luxury Penthouse",
      image:
        "https://img.freepik.com/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694085.jpg?t=st=1733984101~exp=1733987701~hmac=7c68a44173fcef940a0f8f8749b0c388088a6137de34771843177a39d594222b&w=740",
      shortDescription:
        "An exquisite 3-bedroom penthouse with a spacious terrace and premium finishes.",
    },
    {
      propertyName: "Riverside Cottage",
      image:
        "https://img.freepik.com/free-photo/photorealistic-wooden-house-with-timber-structure_23-2151302609.jpg?t=st=1733984064~exp=1733987664~hmac=81a9142ed72e893d94c3cdb3f6e7fd5657b6db0a3141a13ae499ee264b2c54c6&w=740",
      shortDescription:
        "A charming 3-bedroom cottage nestled by the river, perfect for a peaceful getaway.",
    },
    {
      propertyName: "Downtown Studio",
      image:
        "https://img.freepik.com/free-photo/view-black-white-theatre-building-exterior_23-2151184608.jpg?t=st=1733984000~exp=1733987600~hmac=aed724e65a907d398f6f63e4391ca899d4ecb8803c667ada6adb30129a7189ac&w=740",
      shortDescription:
        "A compact yet stylish studio apartment, ideal for professionals working in the city center.",
    },
  ];

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mt-3 rounded-2xl relative z-0"
      >
        {properties.map((property, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="hero h-[80vh]"
              style={{
                backgroundImage: `url(${property.image})`,
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">
                    {property.propertyName}
                  </h1>
                  <p className="mb-5">{property.shortDescription}</p>
                  <Link to="/all-properties">
                    <button className="btn btn-primary">Explore More</button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    // <div>
    //     <Swiper
    //         spaceBetween={30}
    //         centeredSlides={true}
    //         pagination={{
    //             type: 'progressbar',
    //             clickable: true,
    //         }}
    //         autoplay={{
    //             delay: 4000,
    //             disableOnInteraction: false,
    //         }}
    //         navigation={true}
    //         modules={[Autoplay, Pagination, Navigation]}
    //         className="mySwiper rounded-xl pt-4"
    //     >
    //         <SwiperSlide>
    //             <img src="https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799631.jpg?t=st=1717414100~exp=1717417700~hmac=879feddd465c5952c9508e3dea03ffcec4f453852f85aa166a9fac8142e378b5&w=826" alt="home" />
    //         </SwiperSlide>
    //         <SwiperSlide>  <img src="https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799627.jpg?t=st=1717414188~exp=1717417788~hmac=a30f9841615ff6bae8262a01dc6d37eb06fbeabc9f79ad025df79964d911d5bd&w=826" alt="home" />
    //         </SwiperSlide>
    //         <SwiperSlide>  <img src="https://plus.unsplash.com/premium_photo-1687960117069-567a456fe5f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="home" />
    //         </SwiperSlide>
    //     </Swiper>
    // </div>
  );
};

export default Slider;
