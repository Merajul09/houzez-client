import { Card, Carousel } from "flowbite-react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import SectionTitle from "./shared/SectionTitle";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Reviews = () => {
  const axiosPublic = useAxiosPublic();
  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/reviews`);
      return data;
    },
  });
  const left = (
    <HiArrowLeft className="text-4xl bg-gray-300 rounded-full p-1" />
  );
  const right = (
    <HiArrowRight className="text-4xl bg-gray-300 rounded-full p-1" />
  );
  return (
    <div>
      <SectionTitle
        subHeading="What Our Client Say"
        heading={"Reviews"}
      ></SectionTitle>
      <div className="h-96">
        <Carousel pauseOnHover leftControl={left} rightControl={right}>
          {reviews.map((review, idx) => (
            <div key={idx} className="flex items-center justify-center">
              <Card className="max-w-md">
                <img
                  alt={review.reviewerName}
                  height="96"
                  src={review.image}
                  width="96"
                  className="mb-3 rounded-full shadow-lg self-center"
                />
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                    {review.propertyName}
                  </h5>
                </a>
                <div className="rating rating-md">
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <div className="flex items-center justify-between text-justify">
                  <p>{review.review}</p>
                </div>
                <div className="flex items-center justify-end font-medium">
                  <p>- {review.reviewerName}</p>
                </div>
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
      {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-24 my-16">
               <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
              <p className="py-8">{review.propertyName}</p>
              <div className="avatar">
                <div className="w-24 rounded-full object-contain">
                  <img src={review.image} alt="Photo" />
                </div>
              </div>
              <p className="py-8">{review.review}</p>
              <h3 className="text-2xl text-orange-400">
                {review.reviewerName}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>  */}
    </div>
  );
};

export default Reviews;
